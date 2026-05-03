// mariana-deep-dm-trance
// Deep trance in D minor at 122 bpm — slower, dubbier, more atmospheric than the open-water trance.
// Off-beat bass, lush triangle pads, glassy bell pluck, sub sine drone in the breakdown.

setcpm(122/4)

arrange(
  // A — sub kick on 1 and 3, slow swimming bass drifting beneath
  [4, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.75),
    s("[~ hh]*4").gain(0.4),
    note("d2 ~ ~ a1 ~ ~ d2 ~").s("sawtooth").lpf(sine.range(300,900).slow(11)).gain(0.6)
  )],
  // B — 4/4 kick locks in, off-beat bass, triangle pad enters
  [4, stack(
    s("bd*4").gain(0.75),
    s("~ ~ sd ~").gain(0.5),
    s("[~ hh]*4").gain(0.45),
    note("[~ d2]*4").s("sawtooth").detune(0.1).lpf(sine.range(400,1200).slow(8)).gain(0.55),
    note("<[d3,f3,a3] [bb2,d3,f3] [c3,e3,g3] [a2,c3,e3]>")
      .s("triangle").attack(0.4).release(1.2).gain(0.3).room(0.7)
  )],
  // C — bell pluck arpeggio joins, filter peaks rising
  [4, stack(
    s("bd*4").gain(0.75),
    s("~ ~ sd ~").gain(0.5),
    s("hh*8").gain(0.4),
    s("~ ~ ~ oh").gain(0.3),
    note("[~ d2]*4").s("sawtooth").detune(0.1).lpf(sine.range(500,1500).slow(8)).gain(0.55),
    note("<[d3,f3,a3] [bb2,d3,f3] [c3,e3,g3] [a2,c3,e3]>")
      .s("triangle").attack(0.3).release(1).gain(0.32).room(0.7),
    note("<[d5 a5 f5 a5] [bb4 f5 d5 f5] [c5 g5 e5 g5] [a4 e5 c5 e5]>")
      .s("triangle").attack(0.005).release(0.4).delay(0.65).delaytime(0.375).room(0.7).gain(0.28)
  )],
  // D — breakdown: drums fall away, sub sine drone, long pad swells
  [4, stack(
    note("d1").s("sine").gain(0.4).vib(0.3,0.04),
    note("<[d3,f3,a3,c4] [bb2,d3,f3,a3] [c3,e3,g3,bb3] [a2,c3,e3,g3]>")
      .s("triangle").attack(2).release(2.5).gain(0.35).room(0.85),
    note("<a5 ~ f5 ~ d5 ~ c5 ~>").s("triangle").attack(0.5).release(2).delay(0.85).delaytime(0.5).delayfeedback(0.65).room(0.9).gain(0.25)
  )],
  // E — return, full bloom: 4-voice chords, square top line
  [4, stack(
    s("bd*4").gain(0.8),
    s("~ ~ sd ~").gain(0.5),
    s("hh*16").gain(0.4),
    s("oh ~ oh ~").gain(0.35),
    note("[~ d2]*4").s("sawtooth").detune(0.15).lpf(2000).gain(0.6),
    note("<[d3,f3,a3,c4] [bb2,d3,f3,a3] [c3,e3,g3,bb3] [a2,c3,e3,g3]>")
      .s("triangle").attack(0.2).release(0.8).gain(0.32).room(0.65),
    note("<[d5 a5 f5 a5] [bb4 f5 d5 f5] [c5 g5 e5 g5] [a4 e5 c5 e5]>")
      .s("triangle").attack(0.005).release(0.4).delay(0.5).delaytime(0.375).room(0.6).gain(0.3),
    note("<[a5 d6 f6 a6] [f5 bb5 d6 f6] [g5 c6 e6 g6] [e5 a5 c6 e6]>")
      .s("square").delay(0.55).delaytime(0.25).room(0.6).gain(0.25)
  )]
)
