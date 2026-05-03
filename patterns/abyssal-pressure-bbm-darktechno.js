// abyssal-pressure-bbm-darktechno
// Cold, industrial dark techno in B♭ minor at 132 bpm.
// Pounding kick, sub drone, dissonant stabs, atonal lead with heavy reverb.

setcpm(132/4)

arrange(
  // A — pounding kick + sub drone
  [4, stack(
    s("bd*4").gain(0.85),
    s("[~ hh]*4").gain(0.45),
    note("bb1").s("sawtooth").lpf(150).gain(0.45),
    note("bb2 ~ f2 ~ bb2 ~ ab2 ~").s("sawtooth").lpf(400).lpq(8).gain(0.55)
  )],
  // B — clap and rim bring industrial percussion
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("[~ hh]*4").gain(0.45),
    s("~ ~ ~ ~ ~ ~ ~ rim").gain(0.5),
    note("bb1").s("sawtooth").lpf(150).gain(0.45),
    note("bb2 ~ f2 ~ bb2 ~ ab2 ~").s("sawtooth").lpf(500).lpq(10).gain(0.6),
    note("[bb3,db4,f4]").s("square").attack(0.001).release(0.08).gain(0.22).room(0.3)
  )],
  // C — stab doubles + atonal lead with delay
  [4, stack(
    s("bd*4").gain(0.85),
    s("~ cp ~ cp"),
    s("hh*8").gain(0.45),
    s("~ ~ ~ ~ ~ ~ ~ rim").gain(0.5),
    note("bb1").s("sawtooth").lpf(150).gain(0.45),
    note("bb2 ~ f2 ~ bb2 ~ ab2 ~").s("sawtooth").lpf(700).lpq(12).gain(0.6),
    note("[bb3,db4,f4]*2").s("square").attack(0.001).release(0.05).gain(0.25),
    note("<f5 ~ db5 ~ bb4 ~ ab4 ~>").s("square").delay(0.6).delaytime(0.375).delayfeedback(0.55).room(0.7).gain(0.3)
  )],
  // D — filter close, lead drowns in dub delay
  [2, stack(
    s("bd ~ ~ ~ bd ~ ~ ~").gain(0.85),
    note("bb1").s("sawtooth").lpf(120).gain(0.45),
    note("f5 db5 bb4 ab4 f4 ab4 bb4 db5").s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.78).room(0.9).gain(0.28)
  )],
  // E — hammer release: faster hats, more rims, all elements
  [4, stack(
    s("bd*4").gain(0.9),
    s("~ cp ~ cp"),
    s("hh*16").gain(0.5),
    s("~ ~ ~ rim ~ rim ~ rim").gain(0.5),
    note("bb1").s("sawtooth").lpf(180).gain(0.5),
    note("bb2 ~ f2 ~ bb2 ~ ab2 ~").s("sawtooth").lpf(1200).lpq(8).gain(0.6),
    note("[bb3,db4,f4]*4").s("square").attack(0.001).release(0.04).gain(0.27),
    note("<f5 db5 bb4 ab4 f5 ab5 bb5 db6>*2").s("square").delay(0.5).delaytime(0.375).room(0.6).gain(0.3)
  )]
)
