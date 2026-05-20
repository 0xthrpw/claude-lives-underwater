// midnight-tide-bm-dnb
// Atmospheric / intelligent drum and bass in B minor at 172 bpm.
// Progression: Bm7 - Em7 - Gmaj7 - F#7 (i7 - iv7 - VI maj7 - V7).
// The F#7 is the harmonic-minor V7 — its A# leading-tone pulls hard back to B.
//
// Long-form structure (148 cycles ≈ 3:27):
//   I.1-2  intro (8)             atmosphere → break fades in
//   II     verse 1 (24)          Reese bass + light pad
//   III    chorus 1 (24)         pluck arpeggio + square stab lead
//   IV     verse 2 (24)          walking 8th-note Reese, fast pluck arp doubles
//   V      bridge (16)           drums simplify, melody floats in dub delay
//   VI     final chorus (32)     peak: dual square leads, pluck + Reese + pad
//   VII.1-2 outro (12)           counter drops, then bass thins
//   VIII   final breath (8)      sub + pad ringing
//
// Drum pattern (16 steps): kick on 1, "and of 2", and "and of 3" — three-kick
// rolling pattern around the snare on 2 and 4, classic atmospheric DnB.
//
// New elements vs the liquid piece:
//   - Reese bass: detune(0.35-0.4) on the sawtooth instead of detune(0.15)
//   - Pluck arpeggio: 8/16 fast triangle notes per cycle, attack 0.001 release 0.08
//   - Dual square stab leads (high counter + higher counter) instead of sine vocal
//   - Atmospheric breakdown (16 cycles) for cinematic build
//   - Cinematic harmonic-minor V7 cadence

setcpm(172/4)

arrange(
  // ============ I. INTRO ============
  // I.1 — atmosphere, sub drone, faint pad
  [4, stack(
    s("white").hpf(1200).gain(0.05).pan(sine.range(0.3,0.7).slow(8)),
    note("b1").s("sine").gain(0.4).vib(0.4,0.04),
    note("[b3,f#4]").s("triangle").attack(2).release(3).gain(0.25).room(0.85)
  )],
  // I.2 — break fades in (rolling kick: 1, 8, 11)
  [4, stack(
    s("white").hpf(1200).gain(0.05),
    note("b1").s("sine").gain(0.4).vib(0.4,0.04),
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.7),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*16").gain(0.4).degradeBy(0.2)
  )],

  // ============ II. VERSE 1 ============
  // V1 — Reese bass enters with slow filter sweep, light pad
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.78),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.62),
    s("hh*16").gain(0.42).degradeBy(0.18),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.3),
    note("<[b1 ~ f#2 ~ b2 ~ ~ f#2] [e2 ~ b2 ~ e3 ~ ~ b2] [g2 ~ d3 ~ g2 ~ ~ d3] [f#2 ~ c#3 ~ a#2 ~ ~ c#3]>")
      .s("sawtooth").detune(0.35).lpf(sine.range(400,1100).slow(8)).gain(0.55),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>")
      .s("triangle").attack(0.4).release(1).gain(0.28).room(0.75)
  )],

  // ============ III. CHORUS 1 ============
  // C1 — pluck arpeggio enters + square stab lead
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.82),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.66),
    s("hh*16").gain(0.46).degradeBy(0.15),
    s("~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.4),
    note("<[b1 ~ f#2 ~ b2 ~ ~ f#2] [e2 ~ b2 ~ e3 ~ ~ b2] [g2 ~ d3 ~ g2 ~ ~ d3] [f#2 ~ c#3 ~ a#2 ~ ~ c#3]>")
      .s("sawtooth").detune(0.35).lpf(1300).gain(0.6),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>")
      .s("triangle").attack(0.25).release(0.8).gain(0.3).room(0.65)
      .pan(sine.range(0.3,0.7).slow(8)),
    note("<[b3 d4 f#4 b4 d5 b4 f#4 d4] [e3 g3 b3 e4 g4 e4 b3 g3] [g3 b3 d4 g4 b4 g4 d4 b3] [f#3 a#3 c#4 f#4 a#4 f#4 c#4 a#3]>")
      .s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.22),
    note("<[b4 ~ d5 ~ f#5 ~ d5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [d5 ~ g5 ~ b5 ~ g5 ~] [c#5 ~ f#5 ~ a#5 ~ f#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.28)
  )],

  // ============ IV. VERSE 2 ============
  // V2 — denser walking Reese bass (8 events/cycle), pluck arp doubles to 16/cycle
  [24, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.8),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.64),
    s("hh*16").gain(0.44).degradeBy(0.2),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.32),
    note("<[b1 f#2 b2 f#2 b1 ~ f#2 b2] [e2 b2 e3 b2 e2 ~ b2 e3] [g2 d3 g3 d3 g2 ~ d3 g3] [f#2 c#3 f#3 c#3 a#2 ~ c#3 f#3]>")
      .s("sawtooth").detune(0.4).lpf(sine.range(500,1400).slow(8)).gain(0.6),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>")
      .s("triangle").attack(0.2).release(0.7).gain(0.3).room(0.6),
    note("<[b3 d4 f#4 b4 d5 b4 f#4 d4 b3 d4 f#4 b4 d5 b4 f#4 d4] [e3 g3 b3 e4 g4 e4 b3 g3 e3 g3 b3 e4 g4 e4 b3 g3] [g3 b3 d4 g4 b4 g4 d4 b3 g3 b3 d4 g4 b4 g4 d4 b3] [f#3 a#3 c#4 f#4 a#4 f#4 c#4 a#3 f#3 a#3 c#4 f#4 a#4 f#4 c#4 a#3]>")
      .s("triangle").attack(0.001).release(0.08).delay(0.5).delaytime(0.375).room(0.6).gain(0.22)
  )],

  // ============ V. BRIDGE ============
  // Br — atmospheric breakdown, drums quieter, 5-voice extended chord pad, melody in dub delay
  [16, stack(
    s("white").hpf(1500).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("b1").s("sine").gain(0.4).vib(0.5,0.05),
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.6),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.5),
    s("hh*16").gain(0.4).degradeBy(0.25),
    note("<[b3,d4,f#4,a4,c#5] [e3,g3,b3,d4,f#4] [g3,b3,d4,f#4,a4] [f#3,a#3,c#4,e4,g#4]>")
      .s("triangle").attack(1.5).release(2).gain(0.4).room(0.85),
    note("<f#5 ~ ~ ~ a5 ~ ~ ~ b5 ~ ~ ~ a5 ~ ~ ~>").s("triangle").attack(0.5).release(2)
      .delay(0.85).delaytime(0.5).delayfeedback(0.65).room(0.9).gain(0.3),
    note("<b4 ~ ~ ~ ~ ~ ~ ~ d5 ~ ~ ~ ~ ~ ~ ~>").s("sine").attack(0.3).release(1.5).vib(2,0.04).gain(0.25).room(0.7)
  )],

  // ============ VI. FINAL CHORUS ============
  // C2 — peak: walking Reese, fast pluck, dual square leads, panned wide
  [32, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.88),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.72),
    s("hh*16").gain(0.5),
    s("~ ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.42),
    s("~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim").gain(0.34),
    note("<[b1 f#2 b2 f#2 b1 ~ f#2 b2] [e2 b2 e3 b2 e2 ~ b2 e3] [g2 d3 g3 d3 g2 ~ d3 g3] [f#2 c#3 f#3 c#3 a#2 ~ c#3 f#3]>")
      .s("sawtooth").detune(0.4).lpf(1900).gain(0.65),
    note("<[b3,d4,f#4,a4,c#5] [e3,g3,b3,d4,f#4] [g3,b3,d4,f#4,a4] [f#3,a#3,c#4,e4,g#4]>")
      .s("triangle").attack(0.15).release(0.8).gain(0.36).room(0.55)
      .pan(sine.range(0.2,0.8).slow(8)),
    note("<[b3 d4 f#4 b4 d5 b4 f#4 d4 b3 d4 f#4 b4 d5 b4 f#4 d4] [e3 g3 b3 e4 g4 e4 b3 g3 e3 g3 b3 e4 g4 e4 b3 g3] [g3 b3 d4 g4 b4 g4 d4 b3 g3 b3 d4 g4 b4 g4 d4 b3] [f#3 a#3 c#4 f#4 a#4 f#4 c#4 a#3 f#3 a#3 c#4 f#4 a#4 f#4 c#4 a#3]>")
      .s("triangle").attack(0.001).release(0.08).delay(0.5).delaytime(0.375).room(0.6).gain(0.24),
    note("<[b4 ~ d5 ~ f#5 ~ d5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [d5 ~ g5 ~ b5 ~ g5 ~] [c#5 ~ f#5 ~ a#5 ~ f#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.32),
    note("<[d6 ~ f#6 ~ b5 ~ f#6 ~] [b5 ~ d6 ~ g5 ~ d6 ~] [g5 ~ b5 ~ d6 ~ b5 ~] [f#5 ~ a#5 ~ c#6 ~ a#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.5).delaytime(0.25).room(0.6).gain(0.26)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ VII. OUTRO ============
  // O.1 — high counter drops, lead simplifies
  [8, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.78),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.62),
    s("hh*16").gain(0.42).degradeBy(0.2),
    note("<[b1 ~ f#2 ~ b2 ~ ~ f#2] [e2 ~ b2 ~ e3 ~ ~ b2]>")
      .s("sawtooth").detune(0.3).lpf(1100).gain(0.55),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4]>")
      .s("triangle").attack(0.3).release(1).gain(0.3).room(0.7),
    note("<b4 ~ d5 ~ f#5 ~ d5 ~>").s("square").attack(0.005).release(0.3).delay(0.5).delaytime(0.375).room(0.55).gain(0.26)
  )],
  // O.2 — bass thins, just sparse kick + pad
  [4, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ ~ ~").gain(0.65),
    note("b1*2").s("sawtooth").detune(0.2).lpf(700).gain(0.5),
    note("[b3,d4,f#4,a4]").s("triangle").attack(0.5).release(2).gain(0.32).room(0.85)
  )],

  // ============ VIII. FINAL BREATH ============
  // FB — sub + pad ringing into silence
  [8, stack(
    s("white").hpf(1500).gain(0.04),
    note("b1").s("sine").gain(0.3).vib(0.2,0.03),
    note("[b3,d4,f#4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
