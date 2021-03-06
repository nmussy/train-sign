# [v0.6.0](https://github.com/nmussy/train-sign/releases/tag/v0.6.0)

## Features

- New lines:
  - Saikyō Line

# [v0.5.1](https://github.com/nmussy/train-sign/releases/tag/v0.5.1)

## Bug fixes

- Add missing Tokyo metro area notations

# [v0.5.0](https://github.com/nmussy/train-sign/releases/tag/v0.5.0)

## Features

- New lines:
  - Keihin–Tōhoku Line

## Bug fixes

- Clicking on the left side of the train properly goes to the previous station

# [v0.4.0](https://github.com/nmussy/train-sign/releases/tag/v0.4.0)

## Features

- New lines:
  - Tōkaidō Main Line (JR West)
  - Tōkaidō Main Line (JR West) pre-2008

## Bug fixes

- Restore Chuo rapid translations

# [v0.3.1](https://github.com/nmussy/train-sign/releases/tag/v0.3.1)

## Bug fixes

- Firefox monospace font for JR West arrow

# [v0.3.0](https://github.com/nmussy/train-sign/releases/tag/v0.3.0)

## Features

- JR West sign support
- New lines:
  - Osaka Loop Line
- Dark JR West signs

## Chores

- Some light sign refactoring to support multiple companies

# [v0.2.1](https://github.com/nmussy/train-sign/releases/tag/v0.2.1)

## Bug fixes

- Direction mirrored the sign, instead of just changing the arrow
- Hyphenate some romaji

# [v0.2.0](https://github.com/nmussy/train-sign/releases/tag/v0.2.0)

## Features

- New lines:
  - Chūō Line (Rapid)
  - Pre-2020 Yamanote Line (without Takanawa Gateway)
- Station melodies support, thanks to [@morgansleeper](https://github.com/morgansleeper)
- Remove stations from route
- Standalone map and sign modes, meant for OBS Browser capture
- Option serialization
- Color current station in list
- Backlit sign effect

## Bug fixes

- Long kanji sign display (i.e. Takanawa Gateway)
- Various sign layout issues
- Some incorrect hiragana (thanks to wststreet on the [DdG Discord](https://discord.gg/qwns6crVHf))

# [v0.1.0](https://github.com/nmussy/train-sign/releases/tag/v0.1.0)

- Initial release

---

# Future release(s)

## Features

- Larger signs (standard used by Sigene?)
  - Fully responsive signs might be better
- Add options to hide various parts of the sign
- Electron binaries
  - Local network, remote web page
  - Watch Densha de Go! PC games memory for automatic line/station update

## Bug Fixes

- `@font-face` workaround for OBS Browser ([CEF #2858](https://bitbucket.org/chromiumembedded/cef/issues/2858))
- `scale()` slightly messes with the CSS arrows

## Chores

- Custom favicon
- Versionning automation
- Minor refactors, component splitting
- Testing
- GH Actions CI/CD
- Dependabot
