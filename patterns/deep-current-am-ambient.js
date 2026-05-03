// deep-current-am-ambient
// A minor ambient piece in five movements. No drums.
// Each cycle is 4 seconds; eight cycles per movement (~32s each).
// Total length ~2:40.

setcpm(60/4)

arrange(
  // I — Emerging: drone + filtered noise wash
  [8, stack(
    note("a1").s("sine").gain(0.45).vib(0.25,0.04),
    note("a2").s("triangle").attack(2).release(3).gain(0.3).room(0.7),
    s("white").lpf(sine.range(200,600).slow(11)).gain(0.06)
  )],
  // II — Triangle pad and detuned saw subharmonic enter
  [8, stack(
    note("a1").s("sine").gain(0.4).vib(0.25,0.04),
    note("<[a3,c#4,e4] [f#3,a3,c#4]>")
      .s("triangle").attack(3).release(4).gain(0.3).room(0.85),
    note("<a2 f#2>").s("sawtooth").detune(0.15).attack(2).release(3)
      .lpf(sine.range(300,1000).slow(7)).gain(0.22).room(0.6),
    s("white").lpf(sine.range(200,600).slow(11)).gain(0.06)
  )],
  // III — Shimmer melody emerges, full chord cycle (Am - F#m - D - E)
  [8, stack(
    note("a1").s("sine").gain(0.4).vib(0.25,0.04),
    note("<[a3,c#4,e4] [f#3,a3,c#4] [d3,f#3,a3] [e3,g#3,b3]>")
      .s("triangle").attack(3).release(4).gain(0.3).room(0.85),
    note("<a2 f#2 d2 e2>").s("sawtooth").detune(0.15).attack(2).release(3)
      .lpf(sine.range(300,1200).slow(7)).gain(0.22).room(0.6),
    note("<e6 c#6 a5 b5 e6 g#6 a6 e6>")
      .s("triangle").attack(0.3).release(1.5)
      .delay(0.7).delaytime(0.75).delayfeedback(0.55).room(0.9).gain(0.18),
    s("white").lpf(sine.range(200,800).slow(11)).gain(0.06)
  )],
  // IV — Full bloom: 4-voice chords, filter peaks open, shimmer doubles
  //      degradeBy randomizes which shimmer notes sound, so it sparkles unpredictably
  [8, stack(
    note("a1").s("sine").gain(0.4),
    note("<[a3,c#4,e4,g#4] [f#3,a3,c#4,e4] [d3,f#3,a3,c#4] [e3,g#3,b3,d4]>")
      .s("triangle").attack(2).release(3).gain(0.32).room(0.85),
    note("<a2 f#2 d2 e2>").s("sawtooth").detune(0.2).attack(1).release(2)
      .lpf(sine.range(400,2200).slow(5)).gain(0.25).room(0.6),
    note("<e6 c#6 a5 b5 e6 g#6 a6 e6>*2")
      .s("triangle").attack(0.2).release(1).degradeBy(0.3)
      .delay(0.8).delaytime(0.5).delayfeedback(0.65).room(0.9).gain(0.2),
    s("white").lpf(sine.range(300,1200).slow(7)).gain(0.07)
  )],
  // V — Resolve: layers thin out, single sustained Am chord rings out
  [8, stack(
    note("a1").s("sine").gain(0.35).vib(0.2,0.03),
    note("[a3,c#4,e4]")
      .s("triangle").attack(4).release(5).gain(0.3).room(0.9),
    s("white").lpf(400).gain(0.05)
  )]
)
