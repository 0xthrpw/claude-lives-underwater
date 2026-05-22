// racing-current-g-liquid
// Liquid DnB anthem in G major at 174 bpm, in the lineage of High Contrast
// "Racing Green" and John B "All Night" — euphoric, melodic, big-chord liquid.
//
// Progression: Gmaj7 - Em9 - Am7 - D9 (I7 - vi9 - ii7 - V9)
// The classic ii-V-I jazz cycle reordered to start on the tonic — gives every
// loop a built-in cadential pull back to G via the D9.
//
// Defining features of this style (vs the F#m liquid and Bm atmospheric pieces):
//   - MAJOR key for that summery, daytime feel
//   - Jazz extensions (maj7, m9, 9) for harmonic richness
//   - BIG supersaw chord stab with sidechain pumping (the "Racing Green" moment)
//   - Piano-like pluck lead (triangle, attack 0.001, release 0.12)
//   - Vocal-like sine lead with vibrato for the verse
//   - Walking 8th-note bassline (chord tones, not just root pumps)
//   - Long 24-cycle breakdown for emotional release
//
// Structure (136 cycles ≈ 3:08):
//   I    Intro             (8)   atmosphere + pad cycling, no drums
//   II   Drums emerge      (8)   kick/hat/rim creep in, bass quiet
//   III  Drop 1            (16)  full break, walking bass, piano pluck arrives
//   IV   Verse             (16)  sine vocal lead with vibrato enters
//   V    Drop 2 supersaws  (16)  THE big-chord moment — supersaw stab w/ sidechain
//   VI   Pre-breakdown     (4)   snare roll + filter dive
//   VII  Breakdown         (24)  drums drop, vocal lead floats, lush pad swells
//   VIII Build             (4)   snare 16ths + filter rise
//   IX   Final drop        (24)  everything firing — supersaws, dual squares, doubled pluck
//   X    Outro             (12)  elements drop one at a time
//   XI   Final breath      (4)   pad ringing into silence
//
// The chord pad layer and the supersaw layer are SEPARATE. The triangle pad
// provides the soft harmonic floor in every section; the supersaw is only
// present in Drop 2 and Final Drop — that's how the "big chord" moments hit
// harder than the verse.

setcpm(174/4);

let pluck = "<[g4 b4 d5 b4 d5 b4 a4 g4] [e4 g4 b4 d5 b4 g4 f#4 e4] [a4 c5 e5 c5 e5 c5 b4 a4] [f#4 a4 d5 e5 d5 a4 f#4 e4]>",
pluckD = "<[g4 b4 d5 b4 d5 b4 a4 g4 g4 b4 d5 b4 d5 b4 a4 g4] [e4 g4 b4 d5 b4 g4 f#4 e4 e4 g4 b4 d5 b4 g4 f#4 e4] [a4 c5 e5 c5 e5 c5 b4 a4 a4 c5 e5 c5 e5 c5 b4 a4] [f#4 a4 d5 e5 d5 a4 f#4 e4 f#4 a4 d5 e5 d5 a4 f#4 e4]>",
ch = "<[g3,b3,d4,f#4] [e3,g3,b3,d4,f#4] [a3,c4,e4,g4] [d3,f#3,a3,c4,e4]>",
chS = "<[g3,b3,d4] [e3,g3,b3] [a3,c4,e4] [d3,f#3,a3]>",
bs = "<[g1 d2 g2 b2 d3 b2 g2 d2] [e2 b2 e3 g3 b3 g3 e3 b2] [a1 e2 a2 c3 e3 c3 a2 e2] [d2 a2 d3 f#3 a3 f#3 d3 a2]>",
voc = "<[g4 ~ b4 ~ d5 ~ b4 a4] [g4 ~ ~ ~ e4 ~ g4 e4] [a4 ~ c5 ~ e5 ~ c5 b4] [f#4 ~ a4 ~ d5 ~ a4 f#4]>",
sqHi = "<[d5 ~ g5 ~ b5 ~ g5 ~] [b4 ~ d5 ~ g5 ~ d5 ~] [e5 ~ a5 ~ c6 ~ a5 ~] [a5 ~ d6 ~ f#6 ~ d6 ~]>",
dB = "bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~",
sn = "~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~",
rm = "~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~",
rmD = "~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim";

arrange(
  // ============ I. INTRO ============
  // Atmosphere + sub drone + soft chord pad. No drums. Sets the bright mood.
  [8, stack(
    s("white").hpf(1500).gain(0.05).pan(sine.range(0.3,0.7).slow(8)),
    note("g1").s("sine").gain(0.4).vib(0.3,0.04),
    note(ch).s("triangle").attack(2).release(2.5).gain(0.3).room(0.85)
  )],

  // ============ II. DRUMS EMERGE ============
  // Hats/rim/kick creep in. Bass at low level. Pluck not yet.
  [8, stack(
    s("white").hpf(1500).gain(0.04),
    note("g1").s("sine").gain(0.4).vib(0.3,0.04),
    s(dB).gain(0.65),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.4),
    s("hh*16").gain(0.35).degradeBy(0.3),
    s(rm).gain(0.25),
    note(bs).s("sawtooth").detune(0.15).lpf(sine.range(400,900).slow(8)).gain(0.5),
    note(ch).s("triangle").attack(0.6).release(1.2).gain(0.3).room(0.7)
  )],

  // ============ III. DROP 1 ============
  // Full break locks in. Bass walks. Piano pluck arrives tracing the melody.
  [16, stack(
    s(dB).gain(0.82),
    s(sn).gain(0.66),
    s("hh*16").gain(0.45).degradeBy(0.2),
    s(rm).gain(0.32),
    s("~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.38),
    note(bs).s("sawtooth").detune(0.18).lpf(1300).gain(0.6),
    note(ch).s("triangle").attack(0.3).release(1).gain(0.32).room(0.65)
      .pan(sine.range(0.3,0.7).slow(8)),
    note(pluck).s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.4)
  )],

  // ============ IV. VERSE ============
  // Sine vocal lead with vibrato enters — the "song" moment
  [16, stack(
    s(dB).gain(0.82),
    s(sn).gain(0.66),
    s("hh*16").gain(0.45).degradeBy(0.18),
    s(rm).gain(0.32),
    s("~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.38),
    note(bs).s("sawtooth").detune(0.18).lpf(1300).gain(0.6),
    note(ch).s("triangle").attack(0.3).release(1).gain(0.3).room(0.65)
      .pan(sine.range(0.3,0.7).slow(8)),
    note(pluck).s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.38),
    note(voc).s("sine").attack(0.08).release(0.6).vib(3.5,0.04).gain(0.32).room(0.6).delay(0.35).delaytime(0.375)
  )],

  // ============ V. DROP 2 — SUPERSAWS ============
  // The "Racing Green" big-chord moment. Sidechain pumps the supersaw stack.
  [16, stack(
    s(dB).gain(0.88),
    s(sn).gain(0.7),
    s("hh*16").gain(0.5).degradeBy(0.12),
    s(rm).gain(0.34),
    s("oh ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.42),
    note(bs).s("sawtooth").detune(0.2).lpf(1700).gain(0.65),
    note(ch).s("triangle").attack(0.15).release(0.8).gain(0.32).room(0.55)
      .pan(sine.range(0.3,0.7).slow(8)),
    // The supersaw stack with sidechain pump
    note(ch).s("sawtooth").detune(0.4).attack(0.02).release(0.4).room(0.45)
      .gain(saw.range(0.18,0.42).fast(4)),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.45).delaytime(0.375).room(0.55).gain(0.4),
    note(voc).s("sine").attack(0.05).release(0.5).vib(3.5,0.04).gain(0.34).room(0.55).delay(0.35).delaytime(0.375)
  )],

  // ============ VI. PRE-BREAKDOWN ============
  // Snare roll, filter dive — preparing the emotional drop
  [4, stack(
    s(dB).gain(0.85),
    s("sd*16").gain(0.4),
    s("hh*16").gain(0.5),
    note(bs).s("sawtooth").detune(0.22).lpf(sine.range(2000,400).slow(4)).gain(0.6),
    note(ch).s("triangle").attack(0.1).release(0.5).gain(0.32).room(0.55),
    note(ch).s("sawtooth").detune(0.4).attack(0.02).release(0.3).gain(saw.range(0.2,0.45).fast(4)).room(0.45)
  )],

  // ============ VII. BREAKDOWN ============
  // The big emotional release. Drums fall away. Vocal lead floats over pad swells.
  // 24 cycles — long enough to really breathe before the final drop.
  [8, stack(
    s("white").hpf(1800).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("g1").s("sine").gain(0.45).vib(0.4,0.05),
    note(ch).s("triangle").attack(2).release(3).gain(0.42).room(0.9),
    note(voc).s("sine").attack(0.3).release(2).vib(3,0.04).gain(0.34).room(0.8).delay(0.7).delaytime(0.5).delayfeedback(0.55)
  )],
  [8, stack(
    s("white").hpf(1800).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("g1").s("sine").gain(0.45).vib(0.4,0.05),
    note(ch).s("triangle").attack(2).release(3).gain(0.42).room(0.9),
    note(voc).s("sine").attack(0.3).release(2).vib(3,0.04).gain(0.34).room(0.8).delay(0.7).delaytime(0.5).delayfeedback(0.55),
    note(pluck).s("triangle").attack(0.001).release(0.18).delay(0.65).delaytime(0.375).delayfeedback(0.5).room(0.85).gain(0.32)
  )],
  [8, stack(
    s("white").hpf(1800).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("g1").s("sine").gain(0.45),
    note(ch).s("triangle").attack(1.5).release(2.5).gain(0.42).room(0.85),
    note(voc).s("sine").attack(0.15).release(1.2).vib(3,0.04).gain(0.36).room(0.7).delay(0.5).delaytime(0.375),
    note(pluck).s("triangle").attack(0.001).release(0.15).delay(0.55).delaytime(0.375).room(0.75).gain(0.36),
    // Bass returns lightly to set up the build
    note(bs).s("sawtooth").detune(0.15).attack(0.3).release(0.8)
      .lpf(sine.range(500,1500).slow(4)).gain(0.5).room(0.5)
  )],

  // ============ VIII. BUILD ============
  // Snare 16ths, filter rises, everything converging
  [4, stack(
    note("g1").s("sine").gain(0.4),
    note(ch).s("triangle").attack(0.2).release(0.6).gain(0.4).room(0.6),
    note(voc).s("sine").attack(0.05).release(0.4).vib(3,0.04).gain(0.36).room(0.55).delay(0.4).delaytime(0.375),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.4),
    s("sd*16").gain(0.42),
    s("hh*16").gain(0.5),
    note(bs).s("sawtooth").detune(0.2).lpf(sine.range(800,3000).slow(4)).gain(0.6)
  )],

  // ============ IX. FINAL DROP ============
  // Peak: full break + walking bass + chord pad + supersaws + doubled pluck + dual square leads
  [24, stack(
    s(dB).gain(0.92),
    s(sn).gain(0.74),
    s("hh*16").gain(0.55),
    s("oh ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.45),
    s(rmD).gain(0.36),
    note(bs).s("sawtooth").detune(0.22).lpf(2000).gain(0.7),
    note(ch).s("triangle").attack(0.12).release(0.8).gain(0.34).room(0.55)
      .pan(sine.range(0.2,0.8).slow(8)),
    // Big supersaw stack with deeper sidechain pump
    note(ch).s("sawtooth").detune(0.45).attack(0.02).release(0.4).room(0.45)
      .gain(saw.range(0.22,0.5).fast(4)),
    note(pluckD).s("triangle").attack(0.001).release(0.08).delay(0.4).delaytime(0.375).room(0.55).gain(0.44),
    note(voc).s("sine").attack(0.05).release(0.6).vib(3.5,0.04).gain(0.36).room(0.55).delay(0.35).delaytime(0.375),
    note(sqHi).s("square").attack(0.005).release(0.2).delay(0.5).delaytime(0.25).room(0.6).gain(0.28)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ X. OUTRO ============
  // Supersaw drops first, then square counter, then bass — elements peeling away
  [4, stack(
    s(dB).gain(0.82),
    s(sn).gain(0.66),
    s("hh*16").gain(0.46).degradeBy(0.18),
    s(rm).gain(0.32),
    note(bs).s("sawtooth").detune(0.18).lpf(1500).gain(0.6),
    note(ch).s("triangle").attack(0.3).release(1).gain(0.32).room(0.6),
    note(pluck).s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.38),
    note(voc).s("sine").attack(0.08).release(0.6).vib(3.5,0.04).gain(0.32).room(0.6).delay(0.35).delaytime(0.375)
  )],
  [4, stack(
    s(dB).gain(0.75),
    s(sn).gain(0.6),
    s("hh*16").gain(0.4).degradeBy(0.3),
    note(bs).s("sawtooth").detune(0.15).lpf(1100).gain(0.55),
    note(chS).s("triangle").attack(0.5).release(1.5).gain(0.32).room(0.7)
  )],
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.6),
    note("g1*2").s("sawtooth").detune(0.1).lpf(700).gain(0.5),
    note(chS).s("triangle").attack(0.5).release(2).gain(0.3).room(0.85)
  )],

  // ============ XI. FINAL BREATH ============
  // Single sustained Gmaj chord ringing into silence
  [4, stack(
    s("white").hpf(1800).gain(0.04),
    note("g1").s("sine").gain(0.3).vib(0.2,0.03),
    note("[g3,b3,d4,f#4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
