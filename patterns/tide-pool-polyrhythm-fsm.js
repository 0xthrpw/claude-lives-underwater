// tide-pool-polyrhythm-fsm
// F# minor polyrhythmic study: drums in 4, bass in 5, chord pad in 3, lead in 7.
// All four cycles run inside a single bar, so the rhythms collide on different
// beats every cycle. 120 bpm.

setcpm(120/4)

arrange(
  // A — drums lock in, detuned saw bass plays 5-against-4
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.45),
    note("f#1 c#2 e2 a1 b1").s("sawtooth").detune(0.2).lpf(800).gain(0.55)
  )],
  // B — triangle chord pad enters playing 3-against-4
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.45),
    note("f#1 c#2 e2 a1 b1").s("sawtooth").detune(0.2).lpf(900).gain(0.55),
    note("[f#3,a3,c#4] [b3,d4,f#4] [c#4,e4,a4]")
      .s("triangle").attack(0.1).release(0.5).gain(0.32).room(0.5)
  )],
  // C — peak density: square lead joins at 7-against-4
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.45),
    note("f#1 c#2 e2 a1 b1").s("sawtooth").detune(0.2).lpf(1100).gain(0.55),
    note("[f#3,a3,c#4] [b3,d4,f#4] [c#4,e4,a4]")
      .s("triangle").attack(0.05).release(0.5).gain(0.3).room(0.5),
    note("f#4 a4 c#5 e5 d5 c#5 b4")
      .s("square").delay(0.5).delaytime(0.25).room(0.55).gain(0.3)
  )],
  // D — drums fall away, polyrhythm breathes through filter sweep and dub delay
  [4, stack(
    note("f#1 c#2 e2 a1 b1").s("sawtooth").detune(0.2)
      .lpf(sine.range(400,1500).slow(4)).gain(0.5),
    note("[f#3,a3,c#4] [b3,d4,f#4] [c#4,e4,a4]")
      .s("triangle").attack(0.2).release(1).gain(0.35).room(0.7),
    note("f#4 a4 c#5 e5 d5 c#5 b4")
      .s("square").delay(0.7).delaytime(0.25).delayfeedback(0.6).room(0.85).gain(0.3)
  )]
)
