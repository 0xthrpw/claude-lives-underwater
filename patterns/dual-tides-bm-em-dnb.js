// dual-tides-bm-em-dnb
// Through-composed atmospheric DnB at 172 bpm.
// Key 1: B minor — Bm7 - Em7 - Gmaj7 - F#7
// Key 2: E minor — Em7 - Am7 - Cmaj7 - B7
// Modulation pivots through the shared chord (Em is iv of Bm and i of Em).
//
// New structural ideas vs the typical verse/chorus:
//   - The pluck arpeggio plays from cycle 1 to the very last cycle (the protagonist)
//   - No intro-verse-chorus-verse-chorus-bridge-chorus-outro
//   - Drums BUILD across micro-sections (4×4 in Awakening, 3×4 in Reborn)
//   - Mid-piece key change (Bm → Em) and resolution back via deceptive cadence
//   - Each plateau has unique material — no repeated section
//
// Long-form structure (140 cycles ≈ 3:15):
//   I    Emergence         (8)   pluck arp solo + atmosphere
//   II   Foundation        (8)   + sub + pad
//   III  Awakening        (16)   4×4: hats → +rim → +snare → +kick (slow build)
//   IV   First plateau    (16)   full break in Bm + Reese + square stab
//   V    Modulation       (12)   drums cut, pivot Bm→Em via F#7→B7→Em
//   VI   Reborn           (12)   3×4: hats → +rim+snare → +kick in Em
//   VII  Second plateau   (24)   full break in Em + Reese variations
//   VIII Transformation   (16)   modulate back Em→Bm via deceptive cadence
//   IX   Final plateau    (16)   home in Bm, combining elements developed in Em
//   X    Echo + silence   (12)   pluck fading + sustained pad

setcpm(172/4)

arrange(
  // ============ I. EMERGENCE ============
  // Pluck arpeggio enters from silence, no drums or bass
  [8, stack(
    s("white").hpf(1500).gain(0.04).pan(sine.range(0.3,0.7).slow(8)),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.18).delay(0.7).delaytime(0.375).delayfeedback(0.55).room(0.9).gain(0.42)
  )],

  // ============ II. FOUNDATION ============
  // Sub drone + slow bass + faint pad join the pluck
  [8, stack(
    s("white").hpf(1500).gain(0.04),
    note("b1").s("sine").gain(0.4).vib(0.4,0.04),
    note("<b1 e2 g2 f#2>").s("sawtooth").detune(0.2).lpf(550).gain(0.5),
    note("<[b3,d4,f#4] [e3,g3,b3] [g3,b3,d4] [f#3,a#3,c#4]>")
      .s("triangle").attack(2).release(2).gain(0.28).room(0.85),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.15).delay(0.6).delaytime(0.375).delayfeedback(0.5).room(0.85).gain(0.4)
  )],

  // ============ III. AWAKENING — 4×4 build ============
  // III.a — hats fade in
  [4, stack(
    note("b1").s("sine").gain(0.4),
    note("<b1 e2 g2 f#2>").s("sawtooth").detune(0.25).lpf(700).gain(0.55),
    note("<[b3,d4,f#4] [e3,g3,b3] [g3,b3,d4] [f#3,a#3,c#4]>").s("triangle").attack(1).release(1.5).gain(0.3).room(0.8),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.15).delay(0.55).delaytime(0.375).room(0.75).gain(0.38),
    s("hh*16").gain(0.3).degradeBy(0.45)
  )],
  // III.b — add ghost rims
  [4, stack(
    note("b1").s("sine").gain(0.4),
    note("<b1 e2 g2 f#2>").s("sawtooth").detune(0.28).lpf(800).gain(0.55),
    note("<[b3,d4,f#4] [e3,g3,b3] [g3,b3,d4] [f#3,a#3,c#4]>").s("triangle").attack(0.8).release(1.2).gain(0.3).room(0.75),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.15).delay(0.55).delaytime(0.375).room(0.7).gain(0.4),
    s("hh*16").gain(0.4).degradeBy(0.3),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.28)
  )],
  // III.c — add snare
  [4, stack(
    note("b1").s("sine").gain(0.4),
    note("<b1 ~ f#2 ~ e2 ~ b2 ~ g2 ~ d3 ~ f#2 ~ c#3 ~>").s("sawtooth").detune(0.3).lpf(900).gain(0.58),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>").s("triangle").attack(0.5).release(1).gain(0.3).room(0.7),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.13).delay(0.5).delaytime(0.375).room(0.65).gain(0.4),
    s("hh*16").gain(0.45).degradeBy(0.2),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.3),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.55)
  )],
  // III.d — full break locks in
  [4, stack(
    note("<[b1 ~ f#2 ~ b2 ~ ~ f#2] [e2 ~ b2 ~ e3 ~ ~ b2] [g2 ~ d3 ~ g2 ~ ~ d3] [f#2 ~ c#3 ~ a#2 ~ ~ c#3]>")
      .s("sawtooth").detune(0.35).lpf(1200).gain(0.6),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>").s("triangle").attack(0.3).release(0.9).gain(0.3).room(0.7),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.4),
    s("hh*16").gain(0.48).degradeBy(0.15),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.32),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.62),
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.78)
  )],

  // ============ IV. FIRST PLATEAU ============
  // Full break in Bm + Reese walks + first square stab lead
  [16, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.85),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.68),
    s("hh*16").gain(0.48).degradeBy(0.15),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.32),
    s("~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(0.4),
    note("<[b1 ~ f#2 ~ b2 ~ ~ f#2] [e2 ~ b2 ~ e3 ~ ~ b2] [g2 ~ d3 ~ g2 ~ ~ d3] [f#2 ~ c#3 ~ a#2 ~ ~ c#3]>")
      .s("sawtooth").detune(0.4).lpf(1500).gain(0.65),
    note("<[b3,d4,f#4,a4] [e3,g3,b3,d4] [g3,b3,d4,f#4] [f#3,a#3,c#4,e4]>").s("triangle").attack(0.2).release(0.8).gain(0.3).room(0.6).pan(sine.range(0.3,0.7).slow(8)),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.42),
    note("<[b4 ~ d5 ~ f#5 ~ d5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [d5 ~ g5 ~ b5 ~ g5 ~] [c#5 ~ f#5 ~ a#5 ~ f#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.28)
  )],

  // ============ V. MODULATION BRIDGE ============
  // Drums cut. F#7 (V of Bm) becomes pivot — held, then resolves to B7, then to Em.
  // Pluck reharmonizes to land on Em by end of section.
  [12, stack(
    s("white").hpf(1800).gain(0.06).pan(sine.range(0.2,0.8).slow(4)),
    note("<b1 b1 b1 e1>").s("sine").gain(0.4).vib(0.5,0.05),
    note("<[f#3,a#3,c#4,e4] [f#3,a#3,c#4,e4] [b2,d#3,f#3,a3] [e3,g3,b3,d4]>")
      .s("triangle").attack(2).release(2.5).gain(0.4).room(0.85),
    note("<f#5 ~ ~ ~ a5 ~ ~ ~ b5 ~ ~ ~ d5 ~ ~ ~>").s("triangle").attack(0.5).release(2)
      .delay(0.85).delaytime(0.5).delayfeedback(0.65).room(0.9).gain(0.3),
    note("<[f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4] [e3 g3 b3 e4 g4 b4 e4 g3]>")
      .s("triangle").attack(0.001).release(0.15).delay(0.55).delaytime(0.375).delayfeedback(0.5).room(0.8).gain(0.4)
  )],

  // ============ VI. REBORN — 3×4 build in E minor ============
  // VI.a — hats + rim creep back, Em pluck establishes new tonic
  [4, stack(
    note("e1").s("sine").gain(0.4),
    note("<e2 a2 c3 b1>").s("sawtooth").detune(0.3).lpf(900).gain(0.58),
    note("<[e3,g3,b3,d4] [a3,c4,e4,g4] [c3,e3,g3,b3] [b2,d#3,f#3,a3]>").s("triangle").attack(0.6).release(1.2).gain(0.3).room(0.7),
    note("<[e3 g3 b3 e4 g4 b4 e4 g3] [a3 c4 e4 a4 c5 e5 a4 c4] [c4 e4 g4 c5 e5 g5 c5 e4] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4]>")
      .s("triangle").attack(0.001).release(0.13).delay(0.55).delaytime(0.375).room(0.7).gain(0.4),
    s("hh*16").gain(0.4).degradeBy(0.25),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.3)
  )],
  // VI.b — snare returns
  [4, stack(
    note("e1").s("sine").gain(0.4),
    note("<e2 a2 c3 b1>").s("sawtooth").detune(0.32).lpf(1100).gain(0.6),
    note("<[e3,g3,b3,d4] [a3,c4,e4,g4] [c3,e3,g3,b3] [b2,d#3,f#3,a3]>").s("triangle").attack(0.4).release(1).gain(0.3).room(0.65),
    note("<[e3 g3 b3 e4 g4 b4 e4 g3] [a3 c4 e4 a4 c5 e5 a4 c4] [c4 e4 g4 c5 e5 g5 c5 e4] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4]>")
      .s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.65).gain(0.42),
    s("hh*16").gain(0.45).degradeBy(0.2),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.32),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.6)
  )],
  // VI.c — kick locks in (different break: 1, 4, 11 instead of 1, 8, 11)
  [4, stack(
    note("<[e2 ~ b2 ~ e3 ~ ~ b2] [a2 ~ e3 ~ a3 ~ ~ e3] [c3 ~ g3 ~ c4 ~ ~ g3] [b2 ~ f#3 ~ b3 ~ ~ f#3]>")
      .s("sawtooth").detune(0.4).lpf(1400).gain(0.62),
    note("<[e3,g3,b3,d4] [a3,c4,e4,g4] [c3,e3,g3,b3] [b2,d#3,f#3,a3]>").s("triangle").attack(0.25).release(0.85).gain(0.3).room(0.6),
    note("<[e3 g3 b3 e4 g4 b4 e4 g3] [a3 c4 e4 a4 c5 e5 a4 c4] [c4 e4 g4 c5 e5 g5 c5 e4] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4]>")
      .s("triangle").attack(0.001).release(0.12).delay(0.5).delaytime(0.375).room(0.6).gain(0.42),
    s("hh*16").gain(0.5).degradeBy(0.15),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.34),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.65),
    s("bd ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.8)
  )],

  // ============ VII. SECOND PLATEAU ============
  // Full atmospheric DnB in Em, walking Reese, panned square + reverse delay flourishes
  [24, stack(
    s("bd ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.86),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.7),
    s("hh*16").gain(0.5),
    s("~ ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.42),
    s("~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim").gain(0.34),
    note("<[e2 b2 e3 b2 e2 ~ b2 e3] [a2 e3 a3 e3 a2 ~ e3 a3] [c3 g3 c4 g3 c3 ~ g3 c4] [b2 f#3 b3 f#3 b2 ~ f#3 b3]>")
      .s("sawtooth").detune(0.4).lpf(1900).gain(0.65),
    note("<[e3,g3,b3,d4,f#4] [a3,c4,e4,g4,b4] [c3,e3,g3,b3,d4] [b2,d#3,f#3,a3,c#4]>")
      .s("triangle").attack(0.15).release(0.8).gain(0.36).room(0.55).pan(sine.range(0.2,0.8).slow(8)),
    note("<[e3 g3 b3 e4 g4 b4 e4 g3 e3 g3 b3 e4 g4 b4 e4 g3] [a3 c4 e4 a4 c5 e5 a4 c4 a3 c4 e4 a4 c5 e5 a4 c4] [c4 e4 g4 c5 e5 g5 c5 e4 c4 e4 g4 c5 e5 g5 c5 e4] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4 b3 d#4 f#4 b4 d#5 f#5 b4 d#4]>")
      .s("triangle").attack(0.001).release(0.08).delay(0.5).delaytime(0.375).room(0.6).gain(0.42),
    note("<[e4 ~ g4 ~ b4 ~ g4 ~] [c5 ~ e5 ~ a4 ~ e5 ~] [g4 ~ c5 ~ e5 ~ c5 ~] [f#5 ~ b4 ~ d#5 ~ b4 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.5).delaytime(0.25).room(0.6).gain(0.28).pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ VIII. RETURN TRANSFORMATION ============
  // Modulate Em → Bm via deceptive cadence (B7 expected to land Em, but goes to Bm).
  [16, stack(
    s("bd ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").gain(0.82),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.66),
    s("hh*16").gain(0.46).degradeBy(0.18),
    s("~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~").gain(0.32),
    note("<[a2 e3 a3 e3] [c3 g3 c4 g3] [b2 f#3 b3 f#3] [b1 f#2 b2 f#2]>")
      .s("sawtooth").detune(0.4).lpf(1700).gain(0.62),
    note("<[a3,c4,e4,g4] [c3,e3,g3,b3] [b2,d#3,f#3,a3] [b3,d4,f#4,a4]>")
      .s("triangle").attack(0.2).release(0.8).gain(0.34).room(0.6).pan(sine.range(0.25,0.75).slow(4)),
    note("<[a3 c4 e4 a4 c5 e5 a4 c4] [c4 e4 g4 c5 e5 g5 c5 e4] [b3 d#4 f#4 b4 d#5 f#5 b4 d#4] [b3 d4 f#4 b4 d5 f#5 b4 d4]>")
      .s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.42),
    note("<[c5 ~ e5 ~ a4 ~ e5 ~] [g4 ~ c5 ~ e5 ~ c5 ~] [f#5 ~ b4 ~ d#5 ~ b4 ~] [d5 ~ b4 ~ f#5 ~ d5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.5).delaytime(0.25).room(0.6).gain(0.3)
  )],

  // ============ IX. FINAL PLATEAU ============
  // Home in Bm — full break + Reese + dual square leads + extended pluck
  [16, stack(
    s("bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.88),
    s("~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~").gain(0.72),
    s("hh*16").gain(0.5),
    s("~ ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.42),
    s("~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim").gain(0.34),
    note("<[b1 f#2 b2 f#2 b1 ~ f#2 b2] [e2 b2 e3 b2 e2 ~ b2 e3] [g2 d3 g3 d3 g2 ~ d3 g3] [f#2 c#3 f#3 c#3 a#2 ~ c#3 f#3]>")
      .s("sawtooth").detune(0.4).lpf(2000).gain(0.65),
    note("<[b3,d4,f#4,a4,c#5] [e3,g3,b3,d4,f#4] [g3,b3,d4,f#4,a4] [f#3,a#3,c#4,e4,g#4]>")
      .s("triangle").attack(0.15).release(0.8).gain(0.36).room(0.55).pan(sine.range(0.2,0.8).slow(8)),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4 b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3 e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3 g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3 f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.08).delay(0.5).delaytime(0.375).room(0.6).gain(0.44),
    note("<[b4 ~ d5 ~ f#5 ~ d5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [d5 ~ g5 ~ b5 ~ g5 ~] [c#5 ~ f#5 ~ a#5 ~ f#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.32),
    note("<[d6 ~ f#6 ~ b5 ~ f#6 ~] [b5 ~ d6 ~ g5 ~ d6 ~] [g5 ~ b5 ~ d6 ~ b5 ~] [f#5 ~ a#5 ~ c#6 ~ a#5 ~]>")
      .s("square").attack(0.005).release(0.2).delay(0.5).delaytime(0.25).room(0.6).gain(0.26).pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ X. ECHO + SILENCE ============
  // Pluck only with long dub delay, fading to a single sustained pad
  [8, stack(
    s("white").hpf(1800).gain(0.04),
    note("b1").s("sine").gain(0.3).vib(0.2,0.03),
    note("<[b3 d4 f#4 b4 d5 f#5 b4 d4] [e3 g3 b3 e4 g4 b4 e4 g3] [g3 b3 d4 g4 b4 d5 g4 b3] [f#3 a#3 c#4 f#4 a#4 c#5 f#4 a#3]>")
      .s("triangle").attack(0.001).release(0.2).delay(0.85).delaytime(0.5).delayfeedback(0.7).room(0.95).gain(0.4)
  )],
  [4, stack(
    note("b1").s("sine").gain(0.25).vib(0.2,0.03),
    note("[b3,d4,f#4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
