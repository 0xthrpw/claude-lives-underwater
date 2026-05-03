// current-runner-fsm-liquid-dnb
// Liquid drum and bass in F# minor at 174 bpm.
// Same harmonic palette as abyssal-tide-fsm-downtempo (F#m9 - Dmaj7 - Amaj7 - E),
// but the energy is night-and-day — fast breakbeat, walking 8th-note bass, hyperactive hats.
//
// Long-form structure (140 cycles ≈ 3:13):
//   I.1-2  intro (8)             atmosphere → drums fade in
//   II     verse 1 (24)          bass + drums + light pad
//   III    chorus 1 (24)         sine lead + square counter, full atmosphere
//   IV     verse 2 (24)          denser walking bass, triangle melody
//   V      bridge (12)           full break drum solo with delayed melodic stabs
//   VI     final chorus (32)     peak: dual leads, panned wide, busy hi-hats
//   VII    outro (8)             counter drops, drums thin
//   VIII   final breath (8)      sub + pad ringing
//
// DnB drum pattern (16 steps per cycle):
//   bd: positions 0 and 10  → kick on 1 and the "and of 3" (classic break syncopation)
//   sd: positions 4 and 12  → snare on 2 and 4 (backbeat)
//   hh: every step with degradeBy(0.18) so some ghost out
//   rim: scattered ghost rims for that breakbeat shuffle

setcpm(174/4)

arrange(
  // ============ I. INTRO ============
  // I.1 — atmosphere only: noise wash + sub drone + faint pad
  [4, stack(
    s("white").hpf(1000).gain(0.05).pan(sine.range(0.3,0.7).slow(8)),
    note("f#1").s("sine").gain(0.4).vib(0.4,0.04),
    note("[f#3,c#4]").s("triangle").attack(2).release(3).gain(0.25).room(0.85)
  )],
  // I.2 — break fades in (this is the moment DnB heads recognize)
  [4, stack(
    s("white").hpf(1000).gain(0.05),
    note("f#1").s("sine").gain(0.4).vib(0.4,0.04),
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.7),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*16").gain(0.4).degradeBy(0.2)
  )],

  // ============ II. VERSE 1 ============
  // V1 — walking 8th-note bass enters, light pad supports
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.75),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.6),
    s("hh*16").gain(0.4).degradeBy(0.18),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.3),
    note("<[f#1 ~ c#2 ~ f#2 ~ ~ c#2] [d2 ~ a2 ~ d3 ~ ~ a2] [a1 ~ e2 ~ a2 ~ ~ e2] [e2 ~ b2 ~ e3 ~ ~ b2]>")
      .s("sawtooth").detune(0.15).lpf(sine.range(500,1300).slow(8)).gain(0.55),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [a3,c#4,e4,g#4] [e3,g#3,b3,d#4]>")
      .s("triangle").attack(0.3).release(0.8).gain(0.28).room(0.7)
  )],

  // ============ III. CHORUS 1 ============
  // C1 — sine lead with vibrato + square counter, panned pad
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.8),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.65),
    s("hh*16").gain(0.45).degradeBy(0.15),
    s("~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.4),
    note("<[f#1 ~ c#2 ~ f#2 ~ ~ c#2] [d2 ~ a2 ~ d3 ~ ~ a2] [a1 ~ e2 ~ a2 ~ ~ e2] [e2 ~ b2 ~ e3 ~ ~ b2]>")
      .s("sawtooth").detune(0.15).lpf(1300).gain(0.6),
    note("<[f#3,a3,c#4,e4,g#4] [d3,f#3,a3,c#4,e4] [a3,c#4,e4,g#4,b4] [e3,g#3,b3,d#4,f#4]>")
      .s("triangle").attack(0.2).release(0.8).gain(0.3).room(0.6)
      .pan(sine.range(0.3,0.7).slow(8)),
    note("<[a4 ~ c#5 ~ a4 ~ ~ c#5] [f#4 ~ a4 ~ f#4 ~ ~ a4] [e5 ~ c#5 ~ a4 ~ ~ e5] [g#4 ~ b4 ~ g#4 ~ ~ b4]>")
      .s("sine").attack(0.02).release(0.4).vib(3,0.03).gain(0.3).room(0.55).delay(0.4).delaytime(0.375),
    note("<[f#5 ~ a5 ~] [d5 ~ f#5 ~] [a5 ~ c#6 ~] [e5 ~ g#5 ~]>")
      .s("square").attack(0.005).release(0.3).delay(0.55).delaytime(0.25).room(0.6).gain(0.25)
  )],

  // ============ IV. VERSE 2 ============
  // V2 — bass goes 8 events per cycle (denser), triangle melody replaces sine
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.78),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.62),
    s("hh*16").gain(0.42).degradeBy(0.2),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.3),
    note("<[f#1 c#2 f#2 c#2 f#1 ~ c#2 f#2] [d2 a2 d3 a2 d2 ~ a2 d3] [a1 e2 a2 e2 a1 ~ e2 a2] [e2 b2 e3 b2 e2 ~ b2 e3]>")
      .s("sawtooth").detune(0.18).lpf(sine.range(600,1500).slow(8)).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [a3,c#4,e4,g#4] [e3,g#3,b3,d#4]>")
      .s("triangle").attack(0.2).release(0.7).gain(0.3).room(0.6),
    note("<[c#5 a4 f#4 a4 c#5 ~ a4 ~] [a4 f#4 d4 f#4 a4 ~ f#4 ~] [e5 c#5 a4 c#5 e5 ~ c#5 ~] [b4 g#4 e4 g#4 b4 ~ g#4 ~]>")
      .s("triangle").attack(0.005).release(0.25).delay(0.5).delaytime(0.375).room(0.6).gain(0.3)
  )],

  // ============ V. BRIDGE ============
  // Br — drum break solo with atmosphere, bass drops, melodic stabs in dub delay
  [12, stack(
    s("white").hpf(1500).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("f#1").s("sine").gain(0.4).vib(0.5,0.05),
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.65),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*16").gain(0.45).degradeBy(0.15),
    s("~ rim ~ ~ ~ rim ~ rim ~ ~ rim ~ ~ rim ~ rim").gain(0.4),
    note("<[f#3,a3,c#4,e4,g#4] [d3,f#3,a3,c#4,e4]>")
      .s("triangle").attack(1).release(2).gain(0.35).room(0.85),
    note("<f#5 ~ ~ ~ a5 ~ ~ ~ c#6 ~ ~ ~ a5 ~ ~ ~>").s("triangle").attack(0.5).release(2)
      .delay(0.85).delaytime(0.5).delayfeedback(0.6).room(0.9).gain(0.28)
  )],

  // ============ VI. FINAL CHORUS ============
  // C2 — peak: walking bass, dual leads, panned wide, ride-style ghost rims on every 16th
  [32, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.85),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.7),
    s("hh*16").gain(0.5),
    s("~ ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.4),
    s("~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim").gain(0.32),
    note("<[f#1 c#2 f#2 c#2 f#1 ~ c#2 f#2] [d2 a2 d3 a2 d2 ~ a2 d3] [a1 e2 a2 e2 a1 ~ e2 a2] [e2 b2 e3 b2 e2 ~ b2 e3]>")
      .s("sawtooth").detune(0.2).lpf(1800).gain(0.65),
    note("<[f#3,a3,c#4,e4,g#4] [d3,f#3,a3,c#4,e4] [a3,c#4,e4,g#4,b4] [e3,g#3,b3,d#4,f#4]>")
      .s("triangle").attack(0.15).release(0.8).gain(0.34).room(0.55)
      .pan(sine.range(0.2,0.8).slow(8)),
    note("<[a4 ~ c#5 ~ a4 ~ ~ c#5] [f#4 ~ a4 ~ f#4 ~ ~ a4] [e5 ~ c#5 ~ a4 ~ ~ e5] [g#4 ~ b4 ~ g#4 ~ ~ b4]>")
      .s("sine").attack(0.02).release(0.4).vib(3,0.03).gain(0.32).room(0.55).delay(0.4).delaytime(0.375),
    note("<[f#5 a5 c#6 a5 f#5 a5 c#6 a5] [d5 f#5 a5 f#5 d5 f#5 a5 f#5] [a5 c#6 e6 c#6 a5 c#6 e6 c#6] [e5 g#5 b5 g#5 e5 g#5 b5 g#5]>")
      .s("square").delay(0.5).delaytime(0.25).room(0.6).gain(0.28)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ VII. OUTRO ============
  // O.1 — high counter drops, sine lead simplifies
  [8, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.75),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.6),
    s("hh*16").gain(0.4).degradeBy(0.2),
    note("<[f#1 ~ c#2 ~ f#2 ~ ~ c#2] [d2 ~ a2 ~ d3 ~ ~ a2]>")
      .s("sawtooth").detune(0.15).lpf(1100).gain(0.55),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4]>")
      .s("triangle").attack(0.3).release(1).gain(0.3).room(0.65),
    note("<a4 ~ c#5 ~ a4 ~ ~ c#5>").s("sine").attack(0.05).release(0.5).vib(2,0.03).gain(0.28).room(0.6)
  )],

  // ============ VIII. FINAL BREATH ============
  // FB — sub + extended pad ringing into silence
  [8, stack(
    s("white").hpf(1500).gain(0.04),
    note("f#1").s("sine").gain(0.3).vib(0.2,0.03),
    note("[f#3,a3,c#4,e4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
