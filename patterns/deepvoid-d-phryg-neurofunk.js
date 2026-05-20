// deepvoid-d-phryg-neurofunk
// Neurofunk DnB at 174 bpm in D Phrygian dominant (D Eb F# G A Bb C).
// 5th mode of G harmonic minor — has the b2 (Eb) and major 3rd (F#) creating
// a Spanish/exotic dark tension that's perfect for neurofunk.
//
// 8-chord progression (one chord per cycle, full progression takes 8 cycles):
//   D maj  → Eb maj → F#dim → G min → C min → Bb maj → A dim → D7 → (loops)
//   I       bII      iii°    iv      bVII    bVI      v°      I7
//
// Chord motion analysis:
//   D → Eb       chromatic ascent (the Phrygian b2, classic flamenco)
//   Eb → F#dim   third leap up
//   F#dim → Gm   half-step up (resolution of dim to minor)
//   Gm → Cm      down a fifth (cadential)
//   Cm → Bb      whole step down
//   Bb → Adim    half-step down (descending tension)
//   Adim → D7    v° → I7 (strong tritone resolution)
//
// Breaking the 4-chord lock means the harmonic horizon stretches to 8 cycles
// before repeating — the pluck arp traces all 8 chord arpeggios sequentially.
//
// Structure (132 cycles ≈ 3:02): NOT verse/chorus.
// Designed as "machine system" arc — boot → calibrate → run → glitch → override → fail → reboot → climax → shutdown
//   I    Booting up         (8)   sub drone + chord pad emerging
//   II   Calibration        (8)   bass + drums creep in
//   III  First system cycle (16)  full break, two progression cycles
//   IV   Acceleration       (16)  square stab lead enters, bass distorts harder
//   V    Glitch break       (8)   different kick, atonal cluster stabs
//   VI   Override           (16)  pluck doubles density, dual square leads
//   VII  System failure     (8)   drums cut, dissonant tone clusters
//   VIII Reboot             (16)  drums return with new kick pattern (1, 5, 11)
//   IX   Climax             (24)  peak chaos: 4-kick break, all elements firing
//   X    Shutdown           (8)   elements drop one by one
//   XI   Final pulse        (4)   residual hum

setcpm(174/4);

let pluck = "<[d3 f#3 a3 d4 f#4 d4 a3 f#3] [eb3 g3 bb3 eb4 g4 eb4 bb3 g3] [f#3 a3 c4 f#4 a4 f#4 c4 a3] [g3 bb3 d4 g4 bb4 g4 d4 bb3] [c3 eb3 g3 c4 eb4 c4 g3 eb3] [bb2 d3 f3 bb3 d4 bb3 f3 d3] [a2 c3 eb3 a3 c4 a3 eb3 c3] [d3 f#3 a3 c4 d4 c4 a3 f#3]>",
pluckD = "<[d3 f#3 a3 d4 f#4 d4 a3 f#3 d3 f#3 a3 d4 f#4 d4 a3 f#3] [eb3 g3 bb3 eb4 g4 eb4 bb3 g3 eb3 g3 bb3 eb4 g4 eb4 bb3 g3] [f#3 a3 c4 f#4 a4 f#4 c4 a3 f#3 a3 c4 f#4 a4 f#4 c4 a3] [g3 bb3 d4 g4 bb4 g4 d4 bb3 g3 bb3 d4 g4 bb4 g4 d4 bb3] [c3 eb3 g3 c4 eb4 c4 g3 eb3 c3 eb3 g3 c4 eb4 c4 g3 eb3] [bb2 d3 f3 bb3 d4 bb3 f3 d3 bb2 d3 f3 bb3 d4 bb3 f3 d3] [a2 c3 eb3 a3 c4 a3 eb3 c3 a2 c3 eb3 a3 c4 a3 eb3 c3] [d3 f#3 a3 c4 d4 c4 a3 f#3 d3 f#3 a3 c4 d4 c4 a3 f#3]>",
chord = "<[d3,f#3,a3,c4] [eb3,g3,bb3,d4] [f#3,a3,c4] [g3,bb3,d4,f4] [c3,eb3,g3,bb3] [bb2,d3,f3,a3] [a2,c3,eb3,g3] [d3,f#3,a3,c4]>",
bass = "<[d2 f#2 a2 c3 d3 c3 a2 f#2] [eb2 g2 bb2 d3 eb3 d3 bb2 g2] [f#2 a2 c3 eb3 f#3 eb3 c3 a2] [g2 bb2 d3 f3 g3 f3 d3 bb2] [c2 eb2 g2 bb2 c3 bb2 g2 eb2] [bb1 d2 f2 a2 bb2 a2 f2 d2] [a1 c2 eb2 g2 a2 g2 eb2 c2] [d2 f#2 a2 c3 d3 c3 a2 f#2]>",
sqLow = "<[d4 ~ f#4 ~ a4 ~ f#4 ~] [eb4 ~ g4 ~ bb4 ~ g4 ~] [f#4 ~ a4 ~ c5 ~ a4 ~] [g4 ~ bb4 ~ d5 ~ bb4 ~] [c4 ~ eb4 ~ g4 ~ eb4 ~] [d4 ~ f4 ~ a4 ~ f4 ~] [c4 ~ eb4 ~ a4 ~ eb4 ~] [a4 ~ c5 ~ d5 ~ c5 ~]>",
sqHi = "<[a5 ~ c6 ~ d6 ~ c6 ~] [bb5 ~ d6 ~ eb6 ~ d6 ~] [c6 ~ eb6 ~ f#6 ~ eb6 ~] [d6 ~ f6 ~ g6 ~ f6 ~] [eb6 ~ g6 ~ c7 ~ g6 ~] [f6 ~ a6 ~ bb6 ~ a6 ~] [eb6 ~ g6 ~ a6 ~ g6 ~] [d6 ~ f#6 ~ a6 ~ f#6 ~]>",
clusters = "<[d4,eb4,f#4] [eb4,f#4,g4] [f#4,g4,a4] [g4,bb4,c5] [c4,eb4,f4] [bb3,d4,f4] [a3,c4,eb4] [c4,d4,f#4]>",
diss = "<[d3,eb3,f#3,a3] [eb3,f#3,g3,bb3] [f#3,g3,a3,c4] [g3,a3,bb3,d4] [c3,d3,eb3,g3] [bb2,c3,d3,f3] [a2,c3,eb3,f#3] [d3,f#3,a3,c4]>",
dB = "bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~",
dB2 = "bd ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~",
dB3 = "bd ~ ~ ~ bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~",
dB4 = "bd ~ ~ ~ ~ ~ ~ bd ~ ~ bd ~ ~ ~ bd ~",
sn = "~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~",
rm = "~ rim ~ ~ ~ rim ~ ~ rim ~ ~ rim ~ ~ rim ~",
rmD = "~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim ~ rim";

arrange(
  // ============ I. BOOTING UP ============
  // Sub drone + chord pad cycling through all 8 chords. No drums.
  [8, stack(
    s("white").hpf(2000).gain(0.06).pan(sine.range(0.2,0.8).slow(8)),
    note("d1").s("sine").gain(0.4).vib(0.3,0.04),
    note(chord).s("triangle").attack(2).release(2).gain(0.32).room(0.85)
  )],

  // ============ II. CALIBRATION ============
  // Bass + faint drums creep in
  [8, stack(
    s("white").hpf(2000).gain(0.05),
    note("d1").s("sine").gain(0.4),
    note(bass).s("sawtooth").detune(0.4).lpf(sine.range(300,800).slow(8)).gain(0.55),
    note(chord).s("triangle").attack(0.5).release(1.5).gain(0.3).room(0.75),
    s("hh*16").gain(0.35).degradeBy(0.4),
    s(rm).gain(0.28)
  )],

  // ============ III. FIRST SYSTEM CYCLE ============
  // Full break locks in, pluck enters tracing all 8 chord arpeggios
  [16, stack(
    s(dB).gain(0.82),
    s(sn).gain(0.65),
    s("hh*16").gain(0.45).degradeBy(0.2),
    s(rm).gain(0.32),
    note(bass).s("sawtooth").detune(0.5).lpf(sine.range(500,1400).slow(8)).gain(0.62),
    note(chord).s("triangle").attack(0.3).release(0.8).gain(0.3).room(0.65),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.4)
  )],

  // ============ IV. ACCELERATION ============
  // Square stab lead enters, bass detune pushes toward growl
  [16, stack(
    s(dB).gain(0.85),
    s(sn).gain(0.68),
    s("hh*16").gain(0.48).degradeBy(0.18),
    s(rm).gain(0.34),
    s("~ ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.4),
    note(bass).s("sawtooth").detune(0.6).lpf(1500).gain(0.65),
    note(chord).s("triangle").attack(0.2).release(0.8).gain(0.32).room(0.6).pan(sine.range(0.3,0.7).slow(8)),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.42),
    note(sqLow).s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.3)
  )],

  // ============ V. GLITCH BREAK ============
  // Kick switches to (1, 4, 11), atonal cluster stabs replace tonal lead
  [8, stack(
    s(dB2).gain(0.85),
    s(sn).gain(0.7),
    s("hh ~ hh*3 ~ hh hh ~ hh*2 ~ hh ~ hh ~ ~ hh").gain(0.5),
    s("~ ~ ~ ~ ~ rim ~ rim ~ rim ~ rim ~ ~ rim ~").gain(0.4),
    note(bass).s("sawtooth").detune(0.7).lpf(sine.range(800,2200).slow(2)).gain(0.65),
    note(chord).s("triangle").attack(0.05).release(0.4).gain(0.32).room(0.5),
    note(clusters).s("square").attack(0.001).release(0.08).gain(0.32).delay(0.3).delaytime(0.375).room(0.5)
  )],

  // ============ VI. OVERRIDE ============
  // All systems firing — pluck doubles density, dual square leads stack
  [16, stack(
    s(dB).gain(0.88),
    s(sn).gain(0.7),
    s("hh*16").gain(0.5),
    s(rm).gain(0.36),
    s("oh ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.42),
    note(bass).s("sawtooth").detune(0.7).lpf(1900).gain(0.68),
    note(chord).s("triangle").attack(0.15).release(0.8).gain(0.34).room(0.55).pan(sine.range(0.2,0.8).slow(8)),
    note(pluckD).s("triangle").attack(0.001).release(0.06).delay(0.4).delaytime(0.375).room(0.55).gain(0.42),
    note(sqLow).s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.32),
    note(sqHi).s("square").attack(0.005).release(0.15).delay(0.5).delaytime(0.25).room(0.6).gain(0.26).pan(sine.range(0.15,0.85).slow(4))
  )],

  // ============ VII. SYSTEM FAILURE ============
  // Drums cut. Dissonant 4-note tone clusters replace the chord pad
  [8, stack(
    s("white").hpf(1500).gain(0.1).pan(sine.range(0.1,0.9).slow(2)),
    note("d1").s("sine").gain(0.4).vib(0.5,0.06),
    note(diss).s("triangle").attack(1.5).release(2).gain(0.4).room(0.85),
    note("<f#5 ~ ~ ~ a5 ~ ~ ~ c6 ~ ~ ~ a5 ~ ~ ~>").s("triangle").attack(0.5).release(2).delay(0.85).delaytime(0.5).delayfeedback(0.7).room(0.9).gain(0.3)
  )],

  // ============ VIII. REBOOT ============
  // Drums return with yet another kick pattern (1, 5, 11) — the system rebooting wrong
  [16, stack(
    s(dB3).gain(0.78),
    s(sn).gain(0.66),
    s("hh*16").gain(0.46).degradeBy(0.2),
    s(rm).gain(0.34),
    note(bass).s("sawtooth").detune(0.6).lpf(sine.range(700,1700).slow(8)).gain(0.65),
    note(chord).s("triangle").attack(0.3).release(0.8).gain(0.32).room(0.6),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.4)
  )],

  // ============ IX. CLIMAX ============
  // Peak: 4-kick break (1, 8, 11, 15), all elements, doubled pluck
  [24, stack(
    s(dB4).gain(0.92),
    s(sn).gain(0.74),
    s("hh*16").gain(0.55),
    s("oh ~ ~ ~ ~ ~ ~ oh ~ ~ ~ ~ ~ ~ ~ oh").gain(0.45),
    s(rmD).gain(0.36),
    note(bass).s("sawtooth").detune(0.75).lpf(2200).gain(0.7),
    note(chord).s("triangle").attack(0.1).release(0.7).gain(0.36).room(0.55).pan(sine.range(0.15,0.85).slow(8)),
    note(pluckD).s("triangle").attack(0.001).release(0.06).delay(0.4).delaytime(0.375).room(0.55).gain(0.45),
    note(sqLow).s("square").attack(0.005).release(0.2).delay(0.4).delaytime(0.375).room(0.55).gain(0.34),
    note(sqHi).s("square").attack(0.005).release(0.15).delay(0.5).delaytime(0.25).room(0.6).gain(0.3).pan(sine.range(0.1,0.9).slow(4))
  )],

  // ============ X. SHUTDOWN ============
  // Elements drop one by one
  [8, stack(
    s(dB).gain(0.78),
    s(sn).gain(0.6),
    s("hh*16").gain(0.4).degradeBy(0.3),
    note(bass).s("sawtooth").detune(0.4).lpf(1100).gain(0.55),
    note(chord).s("triangle").attack(0.4).release(1).gain(0.3).room(0.7),
    note(pluck).s("triangle").attack(0.001).release(0.1).delay(0.5).delaytime(0.375).room(0.6).gain(0.36)
  )],

  // ============ XI. FINAL PULSE ============
  // Residual hum, single sustained D7 ringing into silence
  [4, stack(
    s("white").hpf(2000).gain(0.04),
    note("d1").s("sine").gain(0.3).vib(0.2,0.03),
    note("[d3,f#3,a3,c4]").s("triangle").attack(2).release(4).gain(0.35).room(0.95)
  )]
)
