# Flashpoint.AI Video System

Code-drawn, silent, brand-native marketing videos built with
[Remotion](https://remotion.dev) — the system behind the Market Experiments,
Brain, and Triangulation pillar videos.

## The approach in one paragraph

Every video is a React project rendered to MP4. No stock footage, no audio, no
editing suite — every element is drawn with code, so every word is editable.
Two conventions make it scale: **`constants.ts`** holds all copy, colors, and
frame timing (the only file a non-engineer touches), and **`variants.ts`**
holds per-client copy blocks behind a single `ACTIVE` switch — flip one line,
re-render, and the same spine becomes a bespoke asset for any sales call.

## What's here

- **`triangulation/`** — a complete, render-ready example: 85 seconds,
  2550 frames @ 30fps, 12 scenes, split-screen (narrative left, artifacts
  right), with the variant system wired in. Its README documents every scene
  and every editable field.
- **`skill/`** — a Claude skill that automates the customization workflow:
  research a prospect → fill a variant block against a checklist → compliance
  check → render. Drop it into Claude to summon the whole process on demand.

## Quick start

```bash
cd triangulation
npm install
npm start                 # preview in Remotion Studio
npx remotion render Triangulation out/triangulation.mp4 --codec h264
```

## Design system (the short version)

1920×1080 @ 30fps · exact frame math (30 frames = 1s) · 8–12 scenes ·
crossfades · film grain overlay · one accent color re-skins everything ·
persistent brand mark · story arc: typed client question → the machine
visibly thinking → options narrowing → observed behavior → a priced
deliverable. Confidence comes from numbers and motion, never adjectives.

## Rendering in constrained environments

If the default Chrome download is blocked or the machine is small:
`--browser-executable <path-to-chrome-headless-shell> --concurrency 1`, and
render in chunks (`--frames=0-424`, `--frames=425-849`, …) then stitch:
`ffmpeg -f concat -safe 0 -i list.txt -c copy final.mp4`. Pin `remotion`,
`react`, and `react-dom` versions exactly to avoid bundler mismatches.
