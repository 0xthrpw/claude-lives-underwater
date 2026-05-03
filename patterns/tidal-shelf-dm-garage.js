// tidal-shelf-dm-garage
// Future-garage piece in D minor with a six-part arrangement.
// 132 bpm. Triangle pad warmth, sawtooth bass with vibrato, square lead with delay.

setcpm(132/4)

arrange(
  // A — sparse intro: just bass and ghost hats settling in
  [4, stack(
    s("bd ~ ~ ~ ~ ~ bd ~"),
    s("[~ hh]*4").gain(0.4),
    note("d2 ~ ~ ~ a1 ~ ~ c2").s("sawtooth").lpf(sine.range(300,900).slow(8)).gain(0.65).vib(2,0.05)
  )],
  // B — pad arrives, garage drum pattern locks in
  [4, stack(
    s("bd ~ ~ bd ~ ~ bd ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("[~ hh]*4").gain(0.55),
    s("~ ~ ~ oh").gain(0.35),
    note("d2 ~ c2 a1").s("sawtooth").lpf(sine.range(400,1300).slow(4)).gain(0.7),
    note("<[d4,f4,a4] [c4,e4,g4] [a3,c4,e4] [bb3,d4,f4]>")
      .s("triangle").attack(0.08).release(0.6).gain(0.32).room(0.5)
  )],
  // C — melody enters, panned wide via jux(rev)
  [4, stack(
    s("bd ~ ~ bd ~ bd sd ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("[~ hh]*4").gain(0.55),
    s("~ ~ ~ oh").gain(0.35),
    note("d2 ~ c2 a1").s("sawtooth").lpf(1400).gain(0.7),
    note("<[d4,f4,a4] [c4,e4,g4] [a3,c4,e4] [bb3,d4,f4]>")
      .s("triangle").attack(0.05).release(0.5).gain(0.3).room(0.5),
    note("a4 d5 f5 e5 d5 c5 a4 ~")
      .s("square").delay(0.45).delaytime(0.375).room(0.55).gain(0.35).jux(rev)
  )],
  // D — breakdown: bass washes out, lead echoes through dub delay
  [2, stack(
    note("d1 ~ ~ ~ a1 ~ ~ ~").s("sawtooth").lpf(350).gain(0.55).vib(1,0.1),
    note("d5 f5 a5 g5 f5 e5 d5 a4")
      .s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.7).room(0.9).gain(0.3)
  )],
  // E — full return: snare pushes harder, melody resolves
  [4, stack(
    s("bd ~ bd ~ ~ bd sd bd"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("hh*8").gain(0.5),
    s("oh ~ ~ oh").gain(0.4),
    note("d2 a1 c2 a1").s("sawtooth").lpf(2200).gain(0.7),
    note("<[d4,f4,a4] [c4,e4,g4] [a3,c4,e4] [bb3,d4,f4]>")
      .s("triangle").attack(0.02).release(0.45).gain(0.32).room(0.4),
    note("d5 f5 a5 g5 f5 e5 d5 c5")
      .s("square").delay(0.4).delaytime(0.25).room(0.5).gain(0.35)
  )],
  // F — outro: drums fall away, pad rings out
  [2, stack(
    s("bd ~ ~ ~ ~ ~ ~ ~"),
    note("d2 ~ ~ ~").s("sawtooth").lpf(500).gain(0.5),
    note("<[d4,f4,a4] [a3,c4,e4]>")
      .s("triangle").attack(0.3).release(1.5).gain(0.4).room(0.85)
  )]
)
