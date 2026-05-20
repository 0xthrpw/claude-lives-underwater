# claude-lives-underwater

A workshop where Claude and a human live-code music together, using a locally-hosted [Strudel](https://strudel.cc/) REPL driven by an MCP server.

## What's in here

```
.
├── .mcp.json                 # registers the strudel MCP at project scope
├── bin/strudel-mcp           # wrapper that activates Node 22 + cwd's into the MCP
├── patches/                  # patch we apply to the upstream MCP server
├── patterns/                 # patterns Claude/we save during sessions
└── vendor/                   # gitignored — clones of the two upstreams
    ├── strudel/              # the Strudel REPL itself (codeberg.org/uzu/strudel)
    └── strudel-mcp/          # MCP server that drives Strudel via Playwright
```

The two `vendor/` projects are **clones, not submodules**. We keep our changes to them as a patch in `patches/` so they're auditable and re-appliable, and we can drop the vendoring once upstream takes the change.

## Prerequisites

- `nvm` with Node 22 installed (`nvm install 22`)
- `pnpm` (`npm i -g pnpm`)
- `claude` CLI (Claude Code)
- Linux/macOS, working speakers, a Chromium-capable graphical session (the MCP launches a visible browser to play audio)

## First-time setup

From the repo root:

```bash
# 1. Vendor the two upstreams (gitignored)
mkdir -p vendor
git clone https://github.com/williamzujkowski/strudel-mcp-server.git vendor/strudel-mcp
git clone https://codeberg.org/uzu/strudel.git vendor/strudel

# 2. Apply our patch to the MCP server (lets it honor strudel_url in config.json)
git -C vendor/strudel-mcp apply ../../patches/strudel-mcp-local-url.patch

# 3. Build the MCP server under Node 22
nvm use 22
( cd vendor/strudel-mcp && npm install && npx playwright install chromium )

# 4. Point the MCP at our local Strudel
cat > vendor/strudel-mcp/config.json <<'EOF'
{
  "headless": false,
  "strudel_url": "http://localhost:4321/",
  "patterns_dir": "./patterns",
  "audio_analysis": { "fft_size": 2048, "smoothing": 0.8 }
}
EOF

# 5. Build local Strudel (~1–2 GB of node_modules, takes a few minutes)
( cd vendor/strudel && pnpm install )

# 6. Register the MCP at project scope (only needs to run once per machine)
claude mcp add --scope project strudel "$(pwd)/bin/strudel-mcp"
```

Step 6 writes `.mcp.json` (already committed). On a fresh clone you can skip it — Claude Code picks the project MCP up automatically and asks you to approve it the first time you open a session here.

## Running a session

Two pieces need to be up: the Strudel dev server, and Claude Code in this directory.

**Terminal 1** — Strudel dev server (leave it running):

```bash
cd vendor/strudel
pnpm dev
# serves http://localhost:4321/
```

The first run pulls soundfonts from a CDN and the browser caches them; subsequent runs are quick and work offline.

**Terminal 2** — Claude:

```bash
cd ~/work/ai/music/claude-lives-underwater
claude
```

The first time, Claude prompts to trust the project-scoped MCP — approve it. From then on, the `strudel` MCP shows up in `claude mcp list` as `✓ Connected`.

Then ask Claude something like *"init strudel and play a 4-on-the-floor kick at 124 bpm."* A Chromium window opens, navigates to `localhost:4321`, types the pattern, hits play, and audio comes out the speakers. The 66 strudel tools cover writing/appending/replacing pattern code, play/pause/tempo, generating drums/basslines/melodies, and FFT-based audio analysis.

## How the wrapper works

`bin/strudel-mcp` is what `.mcp.json` points to. It exists because:

- The MCP requires Node ≥ 22 (its build script uses `import.meta.dirname`), but the system `node` may be older. The wrapper sources `nvm` and selects 22 explicitly.
- The MCP reads `./config.json` relative to its working directory, so the wrapper `cd`s into `vendor/strudel-mcp/` before exec'ing `node dist/index.js`.

If you change Node versions or move the project, the wrapper still works because it derives paths from its own location.

## The patch

`patches/strudel-mcp-local-url.patch` makes the MCP actually honor the `strudel_url` field in `config.json`. Upstream advertises the field but doesn't read it — strudel.cc is hardcoded in two places (`src/StrudelController.ts` and `src/services/SessionManager.ts`). The patch adds a constructor parameter and threads `config.strudel_url` through. Five edits, no behavior change for anyone using the default URL.

To re-apply on a fresh clone of `vendor/strudel-mcp`:

```bash
git -C vendor/strudel-mcp apply ../../patches/strudel-mcp-local-url.patch
```

## Troubleshooting

- **`claude mcp list` shows `strudel: ✗ Failed to connect`** — usually a Node version issue. Run `bin/strudel-mcp` manually; if it errors with `import.meta.dirname` undefined or similar, your Node is < 22. Make sure `nvm install 22` has run on this machine.
- **Chromium opens but the page is blank** — check Terminal 1: is `pnpm dev` still running? If it crashed, restart it. If the port isn't 4321 (Astro will print whatever it picked), update `vendor/strudel-mcp/config.json` to match.
- **No audio** — Chromium needs to be visible (`headless: false` in config.json — it already is). If you're on a headless box, you'll need a virtual audio sink and an X server, which is out of scope here.
- **Patterns play but the editor stays empty** — happens if the local Strudel HEAD has drifted enough that the MCP's selectors miss. Pin `vendor/strudel` to a tag closer to the MCP's `@strudel/core@1.2.5` release if it bites.

## What lives where, in one paragraph

We don't ship Strudel or the MCP server in this repo — they're cloned into `vendor/` (gitignored). What we do own and version: the patch in `patches/`, the wrapper in `bin/`, the project-scope MCP registration in `.mcp.json`, the saved patterns in `patterns/`, and this README. That's the whole project. Nuke `vendor/` and follow the setup section to rebuild.
