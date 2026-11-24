// One Emoji, One Dream Vacation — single emoji entry.
//
// The judge reads entries two at a time and picks the one that most makes
// a stranger want to book the flight. This program writes exactly one emoji
// to <output>/entry.txt.
//
// REVISION (thinking_revised): v1 was 🌋, a volcano at dawn. On reflection
// it loses to the judge's real test — "does this make a stranger want to
// book the flight?" A volcano is dramatic scenery, but it reads as danger
// watched from a distance; awe, not longing. The stronger pick is 🐋, a
// whale breaching beside your boat: a living, once-in-a-lifetime encounter
// you can only have by being there — Baja, Iceland, the Azores. It is a
// moment, not a postcard, and moments are what make people book flights.
// Specific, emotional, impossible to get at home: that is the dream trip.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🐋";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
