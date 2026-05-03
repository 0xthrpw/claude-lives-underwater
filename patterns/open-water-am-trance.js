// open-water-am-trance
// Driving trance in A minor at 138 bpm.
// Pumping 4/4 kick, off-beat saw bass, supersaw chord stabs, pluck arpeggio, square lead.
// Five sections with a proper breakdown and drop.

setcpm(138/4)

arrange(
  // A — pumping kick + off-beat saw bass (the trance signature)
  [4, stack(
    s("bd*4").gain(0.85),
    s("[~ hh]*4").gain(0.5),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(900).gain(0.6)
  )],
  // B — clap, hats, supersaw chord stabs
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("hh*8").gain(0.45),
    s("oh*2").gain(0.4),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(1100).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [g3,b3,d4] [e3,g#3,b3]>")
      .s("sawtooth").detune(0.25).attack(0.05).release(0.4).gain(0.32).room(0.4)
  )],
  // C — plucked arpeggio + euphoric high lead
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.45),
    s("oh*4").gain(0.4),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(1400).gain(0.6),
    note("<[a3,c4,e4] [f3,a3,c4] [g3,b3,d4] [e3,g#3,b3]>")
      .s("sawtooth").detune(0.25).attack(0.05).release(0.4).gain(0.32).room(0.4),
    note("<a4 c5 e5 a5 e5 c5 a4 e4>*2").s("triangle").attack(0.005).release(0.15).delay(0.5).delaytime(0.375).room(0.55).gain(0.32),
    note("<[a5 e5 c6 a5] [c6 a5 f5 c5] [d6 b5 g5 d5] [b5 g#5 e5 b4]>")
      .s("square").delay(0.55).delaytime(0.25).room(0.6).gain(0.3)
  )],
  // D — breakdown: drums drop, filter sweeps build tension
  [4, stack(
    note("a1*4").s("sawtooth").detune(0.15).lpf(sine.range(300,2500).slow(4)).gain(0.55),
    note("<[a3,c4,e4] [f3,a3,c4] [g3,b3,d4] [e3,g#3,b3]>")
      .s("sawtooth").detune(0.3).attack(0.5).release(1.5).gain(0.35).room(0.7),
    note("<a4 c5 e5 a5 e5 c5 a4 e4>*4").s("triangle").attack(0.005).release(0.2).delay(0.7).delaytime(0.375).delayfeedback(0.65).room(0.8).gain(0.3)
  )],
  // E — peak drop: full fire, everything firing
  [4, stack(
    s("bd*4").gain(0.9),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.5),
    s("oh*4").gain(0.45),
    note("[~ a1]*4").s("sawtooth").detune(0.15).lpf(2200).gain(0.65),
    note("<[a3,c4,e4] [f3,a3,c4] [g3,b3,d4] [e3,g#3,b3]>")
      .s("sawtooth").detune(0.3).attack(0.02).release(0.4).gain(0.35).room(0.4),
    note("<a4 c5 e5 a5 e5 c5 a4 e4>*4").s("triangle").attack(0.005).release(0.18).delay(0.4).delaytime(0.375).room(0.55).gain(0.32),
    note("<[a5 e5 c6 a5] [c6 a5 f5 c5] [d6 b5 g5 d5] [b5 g#5 e5 b4]>*2")
      .s("square").delay(0.5).delaytime(0.25).room(0.6).gain(0.3)
  )]
)
