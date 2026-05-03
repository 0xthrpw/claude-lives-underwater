// kelp-light-gm
// G minor descending progression (Gm - Eb - F - D) at 120 bpm.
// Saw bass, mid square chord arp, high square counter-melody.
// Same DNA as the Cm dub and Dm garage pieces, new key + new motion.

setcpm(120/4)

arrange(
  // A — establish: drums + saw bass walking root-fifth on each chord
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.55),
    note("<[g2 g2 d3 g2] [eb2 eb2 bb2 eb2] [f2 f2 c3 f2] [d2 d2 a2 d2]>")
      .s("sawtooth").lpf(sine.range(400,1200).slow(8)).gain(0.7)
  )],
  // B — mid square chord arpeggio enters (3rd-root-5th-3rd per chord)
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.55),
    note("<[g2 g2 d3 g2] [eb2 eb2 bb2 eb2] [f2 f2 c3 f2] [d2 d2 a2 d2]>")
      .s("sawtooth").lpf(sine.range(500,1500).slow(8)).gain(0.7),
    note("<[bb4 g4 d5 bb4] [g4 eb4 bb4 g4] [a4 f4 c5 a4] [f#4 d4 a4 f#4]>")
      .s("square").delay(0.5).delaytime(0.375).room(0.4).gain(0.32)
  )],
  // C — high square counter-melody joins
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.55),
    s("~ ~ oh ~").gain(0.3),
    note("<[g2 g2 d3 g2] [eb2 eb2 bb2 eb2] [f2 f2 c3 f2] [d2 d2 a2 d2]>")
      .s("sawtooth").lpf(1500).gain(0.7),
    note("<[bb4 g4 d5 bb4] [g4 eb4 bb4 g4] [a4 f4 c5 a4] [f#4 d4 a4 f#4]>")
      .s("square").delay(0.5).delaytime(0.375).room(0.4).gain(0.32),
    note("<[g5 d6 bb5 g5] [bb5 g5 eb6 bb5] [c6 a5 f5 c6] [a5 d6 f#5 a5]>")
      .s("square").delay(0.6).delaytime(0.25).room(0.55).gain(0.3)
  )],
  // D — breakdown: bass and lead drown in dub delay
  [2, stack(
    s("~ ~ sd ~").gain(0.5),
    note("g2 ~ ~ ~ d2 ~ ~ ~").s("sawtooth").lpf(400).gain(0.65),
    note("d6 c6 bb5 a5 g5 a5 bb5 d6")
      .s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.7).room(0.85).gain(0.3)
  )],
  // E — release: filter wide open, snare doubles, high lead doubles up
  [4, stack(
    s("bd ~ [bd bd] ~"),
    s("~ sd ~ [sd ~ sd]"),
    s("hh*16").gain(0.4),
    s("oh ~ ~ oh").gain(0.4),
    note("<[g2 g2 d3 g2] [eb2 eb2 bb2 eb2] [f2 f2 c3 f2] [d2 d2 a2 d2]>")
      .s("sawtooth").lpf(2500).gain(0.7),
    note("<[bb4 g4 d5 bb4] [g4 eb4 bb4 g4] [a4 f4 c5 a4] [f#4 d4 a4 f#4]>")
      .s("square").delay(0.4).delaytime(0.375).room(0.4).gain(0.35),
    note("<[g5 d6 bb5 g5] [bb5 g5 eb6 bb5] [c6 a5 f5 c6] [a5 d6 f#5 a5]>*2")
      .s("square").delay(0.6).delaytime(0.25).room(0.55).gain(0.3)
  )]
)
