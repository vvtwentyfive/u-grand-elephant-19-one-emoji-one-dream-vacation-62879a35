# One Emoji, One Dream Vacation 🐋

[![make.fun bounty](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/badge)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🐋

One emoji, nothing else — standing in for the trip of a lifetime. A whale
breaching beside your boat: a living, once-in-a-lifetime encounter you can
only have by being there. Not a postcard, a moment — and moments are what
make people book flights.

## How it works

`main.ts` (Node 22, stdlib only, no network, fully deterministic) writes
exactly one emoji to `entry.txt` in the output directory
(`$MAKEFUN_OUTPUT_DIR`, default `/output`):

```sh
node main.ts
```

The entry is a single character (U+1F40B, 4 bytes UTF-8), within the
1–8 character gate. Running it twice produces byte-identical output
(sha256 `1ff5fda97989fd35ae31820d4fb2a1ad43e5df0b8228a7ed07e16c75bfb3cfa2`).
