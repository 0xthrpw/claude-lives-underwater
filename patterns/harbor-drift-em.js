// harbor-drift-em
// E minor at 124 bpm, half-time feel.
// Progression: Em - Am - C - B (i - iv - VI - V from harmonic minor).
// New element: triangle chord stabs on the offbeats acting like a ghostly skank.
// High square lead pans across the stereo field.

setcpm(124/4)

arrange(
  // A — half-time drums (snare on beat 3) + saw bass with vibrato
  [4, stack(
    s("bd ~ ~ ~ ~ ~ bd ~"),
    s("~ ~ ~ ~ sd ~ ~ ~"),
    s("hh*8").gain(0.5),
    note("<[e2 e2 b2 e2] [a2 a2 e3 a2] [c2 c2 g2 c2] [b1 b1 f#2 b1]>")
      .s("sawtooth").lpf(sine.range(400,1200).slow(8)).gain(0.7).vib(2,0.04)
  )],
  // B — triangle chord stabs arrive on the offbeats
  [4, stack(
    s("bd ~ ~ ~ ~ ~ bd ~"),
    s("~ ~ ~ ~ sd ~ ~ ~"),
    s("hh*8").gain(0.5),
    note("<[e2 e2 b2 e2] [a2 a2 e3 a2] [c2 c2 g2 c2] [b1 b1 f#2 b1]>")
      .s("sawtooth").lpf(sine.range(500,1400).slow(8)).gain(0.7).vib(2,0.04),
    note("<[~ [e4,g4,b4]]*4 [~ [a3,c4,e4]]*4 [~ [c4,e4,g4]]*4 [~ [b3,d#4,f#4]]*4>")
      .s("triangle").attack(0.01).release(0.18).gain(0.32).room(0.4)
  )],
  // C — mid square chord arp + high square counter (panned wide)
  [4, stack(
    s("bd ~ ~ ~ ~ ~ bd ~"),
    s("~ ~ ~ ~ sd ~ ~ ~"),
    s("hh*8").gain(0.5),
    s("~ ~ ~ oh").gain(0.3),
    note("<[e2 e2 b2 e2] [a2 a2 e3 a2] [c2 c2 g2 c2] [b1 b1 f#2 b1]>")
      .s("sawtooth").lpf(1500).gain(0.7).vib(2,0.04),
    note("<[~ [e4,g4,b4]]*4 [~ [a3,c4,e4]]*4 [~ [c4,e4,g4]]*4 [~ [b3,d#4,f#4]]*4>")
      .s("triangle").attack(0.01).release(0.2).gain(0.3).room(0.4),
    note("<[g4 e4 b4 g4] [c5 a4 e5 c5] [e5 c5 g5 e5] [d#5 b4 f#5 d#5]>")
      .s("square").delay(0.5).delaytime(0.375).room(0.5).gain(0.3),
    note("<[e6 b5 g5 b5] [e6 c6 a5 c6] [g6 e6 c6 e6] [f#6 d#6 b5 d#6]>")
      .s("square").delay(0.6).delaytime(0.25).room(0.55).gain(0.28)
      .pan(sine.range(0.25,0.75).slow(4))
  )],
  // D — breakdown: bass + high lead drown in dub delay, stabs ghost in
  [2, stack(
    s("~ ~ ~ ~ sd ~ ~ ~").gain(0.5),
    note("e2 ~ ~ ~ b1 ~ ~ ~").s("sawtooth").lpf(400).gain(0.6).vib(1,0.08),
    note("<[~ [e4,g4,b4]]*4 [~ [b3,d#4,f#4]]*4>")
      .s("triangle").attack(0.01).release(0.4).gain(0.22).room(0.7),
    note("e6 d#6 b5 g5 a5 b5 d#6 e6")
      .s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.72).room(0.9).gain(0.3)
  )],
  // E — release: full kit, filter wide open, high lead doubles
  [4, stack(
    s("bd ~ ~ bd ~ ~ bd ~"),
    s("~ ~ ~ ~ sd ~ ~ [sd sd]"),
    s("hh*16").gain(0.4),
    s("oh ~ ~ oh ~ ~ oh ~").gain(0.4),
    note("<[e2 e2 b2 e2] [a2 a2 e3 a2] [c2 c2 g2 c2] [b1 b1 f#2 b1]>")
      .s("sawtooth").lpf(2400).gain(0.7).vib(2,0.04),
    note("<[~ [e4,g4,b4]]*4 [~ [a3,c4,e4]]*4 [~ [c4,e4,g4]]*4 [~ [b3,d#4,f#4]]*4>")
      .s("triangle").attack(0.01).release(0.2).gain(0.32).room(0.4),
    note("<[g4 e4 b4 g4] [c5 a4 e5 c5] [e5 c5 g5 e5] [d#5 b4 f#5 d#5]>")
      .s("square").delay(0.4).delaytime(0.375).room(0.5).gain(0.32),
    note("<[e6 b5 g5 b5] [e6 c6 a5 c6] [g6 e6 c6 e6] [f#6 d#6 b5 d#6]>*2")
      .s("square").delay(0.55).delaytime(0.25).room(0.55).gain(0.3)
      .pan(sine.range(0.2,0.8).slow(2))
  )]
)
