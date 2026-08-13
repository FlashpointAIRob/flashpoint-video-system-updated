# Flashpoint.AI — "Triangulation"

An 85-second (exactly 2550 frames @ 30fps, 1920×1080), silent marketing video
built with [Remotion](https://remotion.dev), in the same visual system as the
Market Experiments and Brain videos (same palette, type, ƒ. mark, film grain,
and crossfade language). No images or audio files — every element is drawn
with code, so everything is editable.

**Story arc:** a client types a real question (plant-based cookie occasions &
concept prioritization) → the Brain dissects it into component concepts and
selects the right tools in the right sequence (Quant → Qual → Market
Experiments) → the Research Plan assembles (real content from the Plant-Based
Cookie plan) → one click builds the priced, staged SOW → a Flashpoint expert
researcher sets the team up and the platform writes a world-class survey
(conjoint, Van Westendorp, MaxDiff, block rotation, hidden variables, routing)
→ fielding: bring your list or use built-in panel APIs, purchase in one click,
launch natively with quota control, live n-counter, instant results → the
quant shapes the qual (guide v2, 12 IDIs from panel, expert network,
person-to-person interviews run off-platform, transcripts flow back into the
Brain) → Market Experiments, fast: the color-coded ad matrix + PATENTED badge
→ the fibered network: every method correlating with every other, live →
the deliverable: a private custom-calibrated LLM with charts, crosstabs,
one-click PPT, a chat interface, and a fit-score radar on every answer →
synthetic panels per segment; three confident answers, one low-fit gap that
generates a "Launch next project →" recommendation, fed back to the insights
team / agency partner → end card: "Augmenting researchers. Never replacing
them."

**Split-screen delivery throughout:** narrative text on the left, riding a
continuous orange thread (the connective-tissue motif that pays off in the
network scene); artifacts, updates, and graphics on the right.

## Commands

Run these from this folder (`triangulation`). You need Node.js —
https://nodejs.org if `npm` isn't found.

Install dependencies (first time only):

```bash
npm install
```

Preview in Remotion Studio (scrub the timeline, live-reloads as you edit):

```bash
npm start
```

Render the final MP4 (lands in `out/triangulation.mp4`):

```bash
npx remotion render Triangulation out/triangulation.mp4 --codec h264
```

## Editing the video — one file: `src/constants.ts`

Every word, color, number, and timing lives in **`src/constants.ts`**:

- **`COLORS`** — brand palette. `accent` is Flashpoint orange and re-colors
  every accent at once. `adA…adD` are the color-coded Market Experiment ads.
- **`SCENES`** — scene start frames and durations (30 frames = 1 second).
- **`S1`** — hero headline, the typed client question, typing/submit timing,
  ghost questions.
- **`S2`** — the dissection: component-concept chips, the full toolbox (flip
  `on` per tool), the method sequence pills.
- **`S3`** — the Research Plan document: title + four sections (swap in any
  client's plan here to customize before a sales call).
- **`S4`** — SOW line items, prices, week ranges (the Gantt bars), total,
  timeline caption, CTA label.
- **`S5`** — the human-in-the-loop chip, the advanced question-type chips,
  and the live survey preview question.
- **`S6`** — fielding options, the recommended panel + incidence note, the
  purchase button price, target n, and the quota rows.
- **`S7`** — Phase 1 findings that feed the guide, IDI count, expert-network
  card, off-platform caption, and the "back into the Brain" label.
- **`S8`** — Market Experiments grid: column claims × row occasions, the
  winner cell, the PATENTED badge, the speed line.
- **`S9`** — the fibered-network node labels and center label.
- **`S10`** — the private-LLM chat (question + answer), artifact chips, and
  the fit radar: `radarAxes` (matches the reference graphic), `radarA` →
  `radarB` (the shaded area animates between them), plus `fourthCriterion`.
- **`S11`** — the synthetic-panel question, the four segments + fit scores
  (one intentionally low), the gap recommendation + CTA, and the
  feeds-your-insights-team line.
- **`S12`** — end-card wordmark, title, subtitle, taglines, footer.

Save the file and the Studio preview updates instantly; re-run the render
command to produce a new MP4.

## Customizing per sales call — one switch: `src/variants.ts`

All client-specific copy lives in **`src/variants.ts`**, one block per
prospect (same pattern as the flagship Market Experiments video). Open the
file, find the marked **EDIT THIS LINE** near the top, change `ACTIVE` to the
client key, and render. Ships with:

- **`generic`** — the plant-based cookie spine (the base asset; don't edit)
- **`nfcu`** — starter block for the NFCU conversation (card-benefit
  prioritization by member segment) — refine before use

To add a client: copy the nearest block, rename the key, fill every field
(the `Variant` type enforces completeness), keep exactly one synth fit-score
below 50 so the gap→next-project beat fires. Filename convention:
`Market_Experiments_<Client>_v1.mp4` — or for this pillar,
`Triangulation_<Client>_v1.mp4`.

The companion skill **build-custom-market-experiment-video** walks the whole
research → variant → render workflow.

## Project layout

- `src/Triangulation.tsx` — stacks the 12 scenes on the timeline.
- `src/variants.ts` — the per-client switch (ACTIVE) + one block per prospect.
- `src/scenes/S1…S12` — one component per scene.
- `src/components/Scene.tsx` — crossfade wrapper, ƒ. mark, film grain, kicker.
- `src/components/Split.tsx` — the split-screen + connective-thread rail.
- `src/components/FitRadar.tsx` — the animated 3-axis fit-score radar.
- `src/components/ui.tsx` — cards, chips, badges, bars, buttons.
- `src/helpers.ts` — springs, easing, typing, counters.

## Post-rebrand naming (permanent, Aug 2026)

Product name is **Market Experiments** ("behavioral" only when describing
data/behavior). PATENTED badge on the matrix. Rob = Head of Partnerships.
