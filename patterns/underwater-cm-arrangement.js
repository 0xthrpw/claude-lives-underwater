// underwater-cm-arrangement
// Cm -> Ab major journey: A theme, B lift, C breakdown, D release.
// Reload in Strudel by pasting this whole expression into the editor.

arrange(
  // A — home in Cm, slow filter sweep on the bass
  [4, stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*8").gain(0.6),
    note("c2 c2 eb2 g2").s("sawtooth").lpf(sine.range(400,1200).slow(8)).gain(0.7),
    note("<eb4 g4 bb4 c5>").s("square").delay(0.5).delaytime(0.375).room(0.3).gain(0.35),
    note("<g5 bb5 c6 eb6>*2").s("square").delay(0.6).delaytime(0.25).room(0.4).gain(0.25)
  )],
  // B — lifts to Ab major, syncopated drums, sometimes-reversed top line
  [4, stack(
    s("bd*2 ~ bd ~"),
    s("~ sd ~ [sd sd]"),
    s("hh ~ hh*2 hh").gain(0.55),
    note("ab1 ~ f2 eb2").s("sawtooth").lpf(sine.range(500,1500).slow(4)).gain(0.7),
    note("<ab4 c5 eb5 bb4>").s("square").delay(0.7).delaytime(0.5).room(0.6).gain(0.4),
    note("<eb6 c6 ab5 g5>*2").s("square").delay(0.8).delaytime(0.375).room(0.7).gain(0.3).sometimes(rev)
  )],
  // C — breakdown, dub-delay arpeggio drowning in feedback
  [2, stack(
    s("~ ~ sd ~").gain(0.5),
    note("c2 ~ ~ ~ eb2 ~ ~ ~").s("sawtooth").lpf(300).gain(0.6),
    note("c5 eb5 g5 bb5 c6 bb5 g5 eb5").s("square").delay(0.85).delaytime(0.1875).delayfeedback(0.7).room(0.85).gain(0.3)
  )],
  // D — release, four-on-floor with double-time snare and 16th hats
  [2, stack(
    s("bd*4"),
    s("~ ~ ~ sd").fast(2),
    s("hh*16").gain(0.4),
    note("c2").s("sawtooth").lpf(2000).gain(0.5),
    note("c4 eb4 g4 bb4 c5 bb4 g4 eb4").s("square").delay(0.5).room(0.5).gain(0.4)
  )]
)
