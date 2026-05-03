// tidewave-am-extended
// ~3 minute trance piece in A minor at 138 bpm.
// Progression: Am - F - C - G (i - VI - III - VII).
//
// Structure (108 cycles total ≈ 3:08):
//   I.1-3  intro (12)              gradually layering kick → bass → pad
//   II     build (4)               clap arrives, pre-roll
//   III    drop 1 (8)              first peak with sidechain chord stabs
//   IV     verse (8)               theme A melody enters
//   V      drop 2 (8)              + high counter-melody, panned wide
//   VI     transition (4)          16th snare roll + filter dive
//   VII.1-4 breakdown (16)         pad swells, theme B emerges
//   VIII   buildup (4)             snare 16ths, filter rising
//   IX.a   final drop A (16)       peak: theme A + counter-line
//   IX.b   final drop B (16)       theme B (anthemic) replaces theme A on top
//   X.1-2  outro (8)               elements drop away
//   XI     final breath (4)        sub + pad ringing
//
// Sidechain pumping is implemented via gain(saw.range(low,high).fast(4)) on the
// sawtooth chord stacks — each kick triggers a duck and the chord swells back up.

setcpm(138/4)

arrange(
  // ============ INTRO ============
  // I.1 — kick alone, deep sub bass slowly opening
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.65),
    note("a1*4").s("sawtooth").detune(0.15).lpf(sine.range(150,500).slow(8)).gain(0.45)
  )],
  // I.2 — add closed hats + faint pad
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    s("[~ hh]*4").gain(0.4),
    note("a1*4").s("sawtooth").detune(0.15).lpf(sine.range(300,900).slow(8)).gain(0.55),
    note("<[a3,e4] [f3,c4]>").s("triangle").attack(2).release(2).gain(0.25).room(0.7)
  )],
  // I.3 — 4/4 kick locks in, off-beat bass arrives
  [4, stack(
    s("bd*4").gain(0.85),
    s("[~ hh]*4").gain(0.5),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(sine.range(500,1300).slow(4)).gain(0.6),
    note("<[a3,e4] [f3,c4] [c3,g3] [g3,d4]>")
      .s("triangle").attack(0.8).release(1.5).gain(0.28).room(0.6)
  )],

  // ============ BUILD 1 ============
  // II — clap arrives, snare pre-roll, filter rising
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.5),
    s("~ ~ ~ ~ ~ ~ sd sd").gain(0.35),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(sine.range(700,1800).slow(2)).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.2).attack(0.1).release(0.4).gain(0.25).room(0.5)
  )],

  // ============ DROP 1 ============
  // III — first drop: chord stabs with sidechain pump
  [8, stack(
    s("bd*4").gain(0.9),
    s("~ cp ~ cp"),
    s("hh*8").gain(0.45),
    s("oh*2").gain(0.4),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(1600).gain(0.65),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.25).attack(0.02).release(0.35).room(0.4)
      .gain(saw.range(0.15, 0.4).fast(4))
  )],

  // ============ VERSE ============
  // IV — theme A melody enters
  [8, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.45),
    s("oh*2").gain(0.35),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(1400).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.25).attack(0.05).release(0.4).room(0.4)
      .gain(saw.range(0.15, 0.32).fast(4)),
    note("<[a4 c5 e5 d5] [c5 a4 f4 a4] [g4 c5 e5 g5] [b4 d5 g4 b4]>")
      .s("triangle").attack(0.005).release(0.2).delay(0.5).delaytime(0.375).room(0.55).gain(0.32)
  )],

  // ============ DROP 2 ============
  // V — full kit, theme A + high counter-line panned wide
  [8, stack(
    s("bd*4").gain(0.9),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.45),
    s("oh*4").gain(0.4),
    note("[~ a1]*4").s("sawtooth").detune(0.18).lpf(1900).gain(0.65),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.3).attack(0.02).release(0.35).room(0.4)
      .gain(saw.range(0.18, 0.42).fast(4)),
    note("<[a4 c5 e5 d5] [c5 a4 f4 a4] [g4 c5 e5 g5] [b4 d5 g4 b4]>")
      .s("triangle").attack(0.005).release(0.18).delay(0.45).delaytime(0.375).room(0.5).gain(0.34),
    note("<[a5 e5 c6 a5] [c6 a5 f5 c5] [e5 c5 g5 e5] [d5 g4 b4 d5]>")
      .s("square").delay(0.5).delaytime(0.25).room(0.6).gain(0.28)
      .pan(sine.range(0.2, 0.8).slow(4))
  )],

  // ============ TRANSITION TO BREAKDOWN ============
  // VI — snare roll, filter dive
  [4, stack(
    s("bd*4").gain(0.85),
    s("sd*16").gain(0.35),
    s("hh*16").gain(0.5),
    note("[~ a1]*4").s("sawtooth").detune(0.18).lpf(sine.range(2000,400).slow(4)).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.3).attack(0.02).release(0.3).room(0.4).gain(0.32)
  )],

  // ============ BREAKDOWN ============
  // VII.1 — sub drone + 2-chord pad
  [4, stack(
    note("a1").s("sine").gain(0.45).vib(0.3, 0.04),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4]>")
      .s("triangle").attack(2).release(2.5).gain(0.4).room(0.85)
  )],
  // VII.2 — full chord cycle, distant melodic stabs in dub delay
  [4, stack(
    note("a1").s("sine").gain(0.45).vib(0.3, 0.04),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("triangle").attack(2).release(2.5).gain(0.4).room(0.85),
    note("<a5 ~ e5 ~ c6 ~ a5 ~>").s("triangle").attack(0.5).release(2)
      .delay(0.85).delaytime(0.5).delayfeedback(0.65).room(0.9).gain(0.3)
  )],
  // VII.3 — triumphant theme B melody emerges
  [4, stack(
    note("a1").s("sine").gain(0.45),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("triangle").attack(1.2).release(2).gain(0.4).room(0.85),
    note("<a5 c6 e6 a6 e6 c6 a5 e5>").s("triangle").attack(0.2).release(1.5)
      .delay(0.7).delaytime(0.375).delayfeedback(0.6).room(0.9).gain(0.34),
    note("[a3,c4,e4]").s("sawtooth").detune(0.25).attack(1).release(1.5)
      .lpf(sine.range(500,2000).slow(4)).gain(0.3).room(0.6)
  )],
  // VII.4 — denser, leads converging
  [4, stack(
    note("a1").s("sine").gain(0.42),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("triangle").attack(0.6).release(1.5).gain(0.4).room(0.75),
    note("a5 c6 e6 a6 g6 e6 c6 a5").s("triangle").attack(0.1).release(0.8)
      .delay(0.6).delaytime(0.375).room(0.7).gain(0.36),
    note("<[a4 c5 e5] [f4 a4 c5] [c4 e4 g4] [g4 b4 d5]>")
      .s("sawtooth").detune(0.25).attack(0.3).release(0.7).gain(0.3).room(0.5)
  )],

  // ============ BUILDUP TO FINAL DROP ============
  // VIII — snare 16ths, filter rises, all elements converging
  [4, stack(
    note("a1").s("sine").gain(0.4),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("triangle").attack(0.2).release(0.6).gain(0.4).room(0.6),
    note("a5 c6 e6 a6 c6 a5 e6 a6").s("triangle").attack(0.05).release(0.5)
      .delay(0.55).delaytime(0.375).room(0.7).gain(0.36),
    s("sd*16").gain(0.4),
    s("hh*16").gain(0.5),
    note("[~ a1]*4").s("sawtooth").detune(0.18).lpf(sine.range(800,3500).slow(4)).gain(0.55)
  )],

  // ============ FINAL DROP — PART A ============
  // IX.a — peak: full theme A + counter-melody, sidechain wide open
  [16, stack(
    s("bd*4").gain(0.95),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.5),
    s("oh*4").gain(0.45),
    note("[~ a1]*4").s("sawtooth").detune(0.2).lpf(2400).gain(0.7),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("sawtooth").detune(0.3).attack(0.02).release(0.4).room(0.4)
      .gain(saw.range(0.22, 0.5).fast(4)),
    note("<[a4 c5 e5 d5] [c5 a4 f4 a4] [g4 c5 e5 g5] [b4 d5 g4 b4]>*2")
      .s("triangle").attack(0.005).release(0.18).delay(0.4).delaytime(0.375).room(0.5).gain(0.34),
    note("<[a5 e5 c6 a5] [c6 a5 f5 c5] [e5 c5 g5 e5] [d5 g4 b4 d5]>*2")
      .s("square").delay(0.45).delaytime(0.25).room(0.6).gain(0.32)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ FINAL DROP — PART B ============
  // IX.b — same energy, theme B (anthemic line) takes the top
  [16, stack(
    s("bd*4").gain(0.95),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.5),
    s("oh*4").gain(0.45),
    note("[~ a1]*4").s("sawtooth").detune(0.2).lpf(2600).gain(0.7),
    note("<[a3,c4,e4,g4] [f3,a3,c4,e4] [c3,e3,g3,b3] [g3,b3,d4,f4]>")
      .s("sawtooth").detune(0.3).attack(0.02).release(0.4).room(0.4)
      .gain(saw.range(0.22, 0.5).fast(4)),
    note("<a5 c6 e6 a6 e6 c6 a5 e5>*2")
      .s("triangle").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.36),
    note("<[a5 e5 c6 a5] [c6 a5 f5 c5] [e5 c5 g5 e5] [d5 g4 b4 d5]>*2")
      .s("square").delay(0.45).delaytime(0.25).room(0.6).gain(0.32)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ OUTRO ============
  // X.1 — counter-line drops, just chords + theme
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.45),
    note("[~ a1]*4").s("sawtooth").detune(0.18).lpf(1600).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [c3,e3,g3] [g3,b3,d4]>")
      .s("sawtooth").detune(0.25).attack(0.05).release(0.5).room(0.5)
      .gain(saw.range(0.15, 0.35).fast(4)),
    note("<[a4 c5 e5 d5] [c5 a4 f4 a4] [g4 c5 e5 g5] [b4 d5 g4 b4]>")
      .s("triangle").attack(0.005).release(0.2).delay(0.5).delaytime(0.375).room(0.55).gain(0.28)
  )],
  // X.2 — half-time kick, sparse
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    note("a1*4").s("sawtooth").detune(0.15).lpf(800).gain(0.55),
    note("<[a3,c4,e4] [f3,a3,c4]>")
      .s("triangle").attack(0.5).release(2).gain(0.3).room(0.85)
  )],

  // ============ FINAL BREATH ============
  // XI — sub + pad, ringing into silence
  [4, stack(
    note("a1").s("sine").gain(0.3).vib(0.2, 0.03),
    note("[a3,c4,e4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
