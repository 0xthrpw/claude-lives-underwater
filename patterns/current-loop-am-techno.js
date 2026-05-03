// current-loop-am-techno
// Driving minimal techno in A minor at 128 bpm.
// 4/4 kick, off-beat hats, acid-style resonant saw bassline that filter-sweeps over 8 cycles.

setcpm(128/4)

arrange(
  // A — hypnotic kick + acid bass with slow filter sweep
  [4, stack(
    s("bd*4"),
    s("[~ hh]*4").gain(0.6),
    note("a1 ~ a1 a2 ~ a1 e2 a1")
      .s("sawtooth").lpf(sine.range(300,1500).slow(8)).lpq(15).gain(0.65)
  )],
  // B — clap on 2 and 4
  [4, stack(
    s("bd*4"),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.6),
    note("a1 ~ a1 a2 ~ a1 e2 a1")
      .s("sawtooth").lpf(sine.range(400,1800).slow(6)).lpq(18).gain(0.65)
  )],
  // C — chord stabs + counter-line + open hats
  [4, stack(
    s("bd*4"),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.6),
    s("oh*2").gain(0.35),
    note("a1 ~ a1 a2 ~ a1 e2 a1")
      .s("sawtooth").lpf(sine.range(500,2400).slow(4)).lpq(20).gain(0.65),
    note("[a3,c4,e4]*4").s("square").attack(0.005).release(0.05).gain(0.25).delay(0.3).delaytime(0.375).room(0.5),
    note("<e5 g5 a5 c6>*2").s("square").delay(0.5).delaytime(0.375).room(0.6).gain(0.25)
  )],
  // D — filter dive breakdown, dub delay on counter-line
  [2, stack(
    s("bd*4"),
    s("[~ hh]*4").gain(0.5),
    note("a1 ~ a1 a2 ~ a1 e2 a1")
      .s("sawtooth").lpf(sine.range(200,500).slow(2)).lpq(22).gain(0.6),
    note("e5 g5 a5 c6 e5 c6 a5 g5").s("square").delay(0.8).delaytime(0.1875).delayfeedback(0.7).room(0.85).gain(0.25)
  )],
  // E — peak: filter blown wide
  [4, stack(
    s("bd*4"),
    s("~ cp ~ cp"),
    s("hh*8").gain(0.5),
    s("oh*4").gain(0.35),
    note("a1 ~ a1 a2 ~ a1 e2 a1").s("sawtooth").lpf(2500).lpq(15).gain(0.65),
    note("[a3,c4,e4]*4").s("square").attack(0.005).release(0.05).gain(0.28).delay(0.3).delaytime(0.375).room(0.5),
    note("<e5 g5 a5 c6 e6 c6 a5 g5>*2").s("square").delay(0.4).delaytime(0.375).room(0.55).gain(0.28)
  )]
)
