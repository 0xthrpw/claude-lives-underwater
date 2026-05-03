// abyssal-tide-fsm-downtempo
// Trip-hop / downtempo in F# minor at 92 bpm.
// Progression: F#m9 - Dmaj7 - Amaj7 - E (i9 - VI maj7 - III maj7 - VII).
//
// Long-form structure (112 cycles ≈ 4:52):
//   I.1-2  intro (8)             noise wash + sub drone, then half-time drums fade in
//   II     verse 1 (16)          bass + drums + light pad
//   III    pre-chorus 1 (4)      snare pre-roll, melody hints
//   IV     chorus 1 (16)         sine lead emerges with vibrato + square counter
//   V      verse 2 (16)          octave bass adds movement
//   VI     bridge (12)           drums drop, sub drone returns, melody floats
//   VII    pre-chorus 2 (4)      16th hats + snare build
//   VIII   final chorus (24)     full bloom — extended chord voicings, doubled lead
//   IX.1-2 outro (8)             counter drops, then drums thin out
//   X      final breath (4)      sub + pad ringing into silence
//
// New elements vs the trance pieces:
//   - Sine lead with vibrato for a vocal-like quality
//   - HPF'd noise wash panning slowly for stereo "underwater pressure"
//   - degradeBy on hats so they breathe instead of marching
//   - Extended chord voicings (maj7, m9) instead of plain triads

setcpm(92/4)

arrange(
  // ============ I. INTRO ============
  // I.1 — pure atmosphere: noise wash + sub drone + faint pad
  [4, stack(
    s("white").hpf(800).gain(0.06).pan(sine.range(0.3,0.7).slow(8)),
    note("f#1").s("sine").gain(0.4).vib(0.3, 0.04),
    note("[f#3,c#4]").s("triangle").attack(3).release(4).gain(0.25).room(0.9)
  )],
  // I.2 — half-time drums fade in (kick on 1+5, snare on 5, hats on every other)
  [4, stack(
    s("white").hpf(800).gain(0.05).pan(sine.range(0.3,0.7).slow(8)),
    note("f#1").s("sine").gain(0.4).vib(0.3, 0.04),
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.5),
    s("hh ~ hh ~ hh ~ hh ~").gain(0.4)
  )],

  // ============ II. VERSE 1 ============
  // V1 — bass + drums + light pad, slow filter sweep on bass
  [16, stack(
    s("white").hpf(1000).gain(0.04),
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*8").gain(0.4).degradeBy(0.2),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~] [a1 ~ ~ ~ e2 ~ ~ ~] [e2 ~ ~ ~ b2 ~ ~ ~]>")
      .s("sawtooth").lpf(sine.range(400,1000).slow(8)).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [a3,c#4,e4,g#4] [e3,g#3,b3,d#4]>")
      .s("triangle").attack(0.6).release(1.5).gain(0.28).room(0.7)
      .pan(sine.range(0.3,0.7).slow(16))
  )],

  // ============ III. PRE-CHORUS 1 ============
  // PC1 — snare pre-roll on the last bar, filter rises
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*8").gain(0.4),
    s("~ ~ ~ ~ ~ ~ sd sd").gain(0.4),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~]>")
      .s("sawtooth").lpf(sine.range(800,1500).slow(2)).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4]>")
      .s("triangle").attack(0.3).release(0.8).gain(0.32).room(0.5)
  )],

  // ============ IV. CHORUS 1 ============
  // C1 — sine lead with vibrato (vocal-like) + square counter, both with delay
  [16, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.6),
    s("hh*8").gain(0.4).degradeBy(0.15),
    s("~ ~ ~ oh").gain(0.3),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~] [a1 ~ ~ ~ e2 ~ ~ ~] [e2 ~ ~ ~ b2 ~ ~ ~]>")
      .s("sawtooth").lpf(1100).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [a3,c#4,e4,g#4] [e3,g#3,b3,d#4]>")
      .s("triangle").attack(0.3).release(1).gain(0.32).room(0.6)
      .pan(sine.range(0.3,0.7).slow(8)),
    note("<[a4 ~ c#5 a4] [f#4 ~ a4 f#4] [e5 ~ c#5 a4] [g#4 ~ b4 g#4]>")
      .s("sine").attack(0.05).release(0.6).vib(3,0.03).gain(0.3).room(0.55).delay(0.4).delaytime(0.375),
    note("<[f#5 ~ a5 ~] [d5 ~ f#5 ~] [a5 ~ c#6 ~] [e5 ~ g#5 ~]>")
      .s("square").attack(0.005).release(0.4).delay(0.55).delaytime(0.25).room(0.6).gain(0.25)
  )],

  // ============ V. VERSE 2 ============
  // V2 — octave bass adds movement, triangle melody replaces sine lead
  [16, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.6),
    s("hh*8").gain(0.4).degradeBy(0.2),
    s("~ ~ ~ oh ~ ~ ~ ~").gain(0.3),
    note("<[f#1 ~ f#2 ~ c#2 ~ f#2 ~] [d2 ~ d3 ~ a2 ~ d3 ~] [a1 ~ a2 ~ e2 ~ a2 ~] [e2 ~ e3 ~ b2 ~ e3 ~]>")
      .s("sawtooth").lpf(sine.range(500,1300).slow(8)).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [a3,c#4,e4,g#4] [e3,g#3,b3,d#4]>")
      .s("triangle").attack(0.3).release(1).gain(0.3).room(0.6),
    note("<[a4 c#5 a4 f#4] [c#5 e5 c#5 a4] [e5 a5 e5 c#5] [d#5 f#5 d#5 b4]>")
      .s("triangle").attack(0.005).release(0.3).delay(0.5).delaytime(0.375).room(0.6).gain(0.3)
  )],

  // ============ VI. BRIDGE ============
  // Br — drums drop, sub drone returns, extended chord voicings + sine accents
  [12, stack(
    s("white").hpf(1500).gain(0.06).pan(sine.range(0.2,0.8).slow(8)),
    note("f#1").s("sine").gain(0.4).vib(0.3, 0.05),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~] [a1 ~ ~ ~ e2 ~ ~ ~] [e2 ~ ~ ~ b2 ~ ~ ~]>")
      .s("sawtooth").lpf(sine.range(300,800).slow(4)).gain(0.5),
    note("<[f#3,a3,c#4,e4,g#4] [d3,f#3,a3,c#4,e4] [a3,c#4,e4,g#4,b4] [e3,g#3,b3,d#4,f#4]>")
      .s("triangle").attack(1.5).release(2).gain(0.4).room(0.85),
    note("<f#5 ~ a5 ~ c#6 ~ a5 ~>").s("triangle").attack(0.5).release(2)
      .delay(0.85).delaytime(0.5).delayfeedback(0.6).room(0.9).gain(0.28),
    note("<a4 ~ ~ ~ c#5 ~ ~ ~>").s("sine").attack(0.3).release(1.5).vib(2,0.04).gain(0.25).room(0.7)
  )],

  // ============ VII. PRE-CHORUS 2 ============
  // PC2 — 16th hats + 8th snare build tension back
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.78),
    s("hh*16").gain(0.45),
    s("sd*8").gain(0.35),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~]>")
      .s("sawtooth").lpf(sine.range(800,2200).slow(2)).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4]>")
      .s("triangle").attack(0.1).release(0.5).gain(0.32).room(0.5)
  )],

  // ============ VIII. FINAL CHORUS ============
  // C2 — full bloom: extended voicings, doubled sine lead, panned square counter
  [24, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.8),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.6),
    s("hh*8").gain(0.45),
    s("oh ~ ~ ~ ~ ~ oh ~").gain(0.35),
    note("<[f#1 ~ f#2 ~ c#2 ~ f#2 ~] [d2 ~ d3 ~ a2 ~ d3 ~] [a1 ~ a2 ~ e2 ~ a2 ~] [e2 ~ e3 ~ b2 ~ e3 ~]>")
      .s("sawtooth").lpf(1900).gain(0.65),
    note("<[f#3,a3,c#4,e4,g#4] [d3,f#3,a3,c#4,e4] [a3,c#4,e4,g#4,b4] [e3,g#3,b3,d#4,f#4]>")
      .s("triangle").attack(0.15).release(0.8).gain(0.36).room(0.6)
      .pan(sine.range(0.2,0.8).slow(8)),
    note("<[a4 ~ c#5 a4] [f#4 ~ a4 f#4] [e5 ~ c#5 a4] [g#4 ~ b4 g#4]>")
      .s("sine").attack(0.05).release(0.6).vib(3,0.03).gain(0.32).room(0.55).delay(0.4).delaytime(0.375),
    note("<[f#5 a5 c#6 a5] [d5 f#5 a5 f#5] [a5 c#6 e6 c#6] [e5 g#5 b5 g#5]>")
      .s("square").delay(0.5).delaytime(0.25).room(0.6).gain(0.28)
      .pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ IX. OUTRO ============
  // O.1 — high square counter drops out, lead simplifies
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.55),
    s("hh*8").gain(0.4),
    note("<[f#1 ~ ~ ~ c#2 ~ ~ ~] [d2 ~ ~ ~ a2 ~ ~ ~]>")
      .s("sawtooth").lpf(1300).gain(0.6),
    note("<[f#3,a3,c#4,e4] [d3,f#3,a3,c#4]>")
      .s("triangle").attack(0.3).release(1).gain(0.3).room(0.65),
    note("<a4 ~ c#5 a4>").s("sine").attack(0.1).release(0.8).vib(2,0.03).gain(0.28).room(0.6)
  )],
  // O.2 — drums thin to just kick on 1, pad swells
  [4, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~").gain(0.6),
    note("f#1*2").s("sawtooth").lpf(700).gain(0.5),
    note("[f#3,a3,c#4,e4]").s("triangle").attack(0.5).release(2).gain(0.32).room(0.85)
  )],

  // ============ X. FINAL BREATH ============
  // FB — sub + pad ringing into silence
  [4, stack(
    s("white").hpf(1500).gain(0.04),
    note("f#1").s("sine").gain(0.3).vib(0.2, 0.03),
    note("[f#3,a3,c#4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
