// sunlit-shoals-d-major
// Bright major-key piece in D major at 112 bpm.
// Progression: D - Bm - G - A (I - vi - IV - V), the classic uplift cycle.
// Same skeleton as the minor pieces — saw bass, mid square arp, high square counter — just in major.

setcpm(112/4)

arrange(
  // A — sunlit drums + saw bass swelling on each chord
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("hh*8").gain(0.5),
    note("<[d2 d2 a2 d2] [b1 b1 f#2 b1] [g2 g2 d3 g2] [a2 a2 e3 a2]>")
      .s("sawtooth").lpf(sine.range(500,1400).slow(8)).gain(0.65)
  )],
  // B — triangle pad enters with the chord motion
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("hh*8").gain(0.5),
    note("<[d2 d2 a2 d2] [b1 b1 f#2 b1] [g2 g2 d3 g2] [a2 a2 e3 a2]>")
      .s("sawtooth").lpf(sine.range(600,1500).slow(8)).gain(0.65),
    note("<[d4,f#4,a4] [b3,d4,f#4] [g3,b3,d4] [a3,c#4,e4]>")
      .s("triangle").attack(0.05).release(0.5).gain(0.32).room(0.5)
  )],
  // C — mid square chord arp + soaring high square
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("hh*8").gain(0.5),
    s("~ ~ ~ oh").gain(0.3),
    note("<[d2 d2 a2 d2] [b1 b1 f#2 b1] [g2 g2 d3 g2] [a2 a2 e3 a2]>")
      .s("sawtooth").lpf(1500).gain(0.65),
    note("<[d4,f#4,a4] [b3,d4,f#4] [g3,b3,d4] [a3,c#4,e4]>")
      .s("triangle").attack(0.05).release(0.5).gain(0.3).room(0.5),
    note("<[f#4 d4 a4 f#4] [d5 b4 f#5 d5] [b4 g4 d5 b4] [c#5 a4 e5 c#5]>")
      .s("square").delay(0.45).delaytime(0.375).room(0.45).gain(0.3),
    note("<[a5 d6 f#6 a6] [f#5 b5 d6 f#6] [d5 g5 b5 d6] [e5 a5 c#6 e6]>")
      .s("square").delay(0.55).delaytime(0.25).room(0.55).gain(0.27)
  )],
  // D — breakdown
  [2, stack(
    s("~ ~ sd ~").gain(0.5),
    note("d2 ~ ~ ~ a1 ~ ~ ~").s("sawtooth").lpf(500).gain(0.6),
    note("a5 d6 f#6 a6 g6 f#6 d6 a5")
      .s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.65).room(0.85).gain(0.28)
  )],
  // E — release: full kit, brighter
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("hh*16").gain(0.4),
    s("oh ~ ~ ~ ~ ~ oh ~").gain(0.35),
    note("<[d2 d2 a2 d2] [b1 b1 f#2 b1] [g2 g2 d3 g2] [a2 a2 e3 a2]>")
      .s("sawtooth").lpf(2200).gain(0.65),
    note("<[d4,f#4,a4] [b3,d4,f#4] [g3,b3,d4] [a3,c#4,e4]>")
      .s("triangle").attack(0.02).release(0.45).gain(0.32).room(0.45),
    note("<[f#4 d4 a4 f#4] [d5 b4 f#5 d5] [b4 g4 d5 b4] [c#5 a4 e5 c#5]>")
      .s("square").delay(0.4).delaytime(0.375).room(0.45).gain(0.32),
    note("<[a5 d6 f#6 a6] [f#5 b5 d6 f#6] [d5 g5 b5 d6] [e5 a5 c#6 e6]>*2")
      .s("square").delay(0.5).delaytime(0.25).room(0.55).gain(0.3)
  )]
)
