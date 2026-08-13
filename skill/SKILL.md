---
name: build-custom-market-experiment-video
description: Build a client-customized Flashpoint.AI "Market Experiments" marketing video (Remotion, code-drawn, silent, 60-90s) from the gold-standard spine — the workflow used for the Expana, Capital One, and Bridgestone videos. Use this skill whenever the user asks to create, customize, spin up, or personalize a Market Experiment video (or "behavioral testing video," the pre-rebrand name) for a prospect, client, vertical, or sales call — including phrases like "make an MX video for [company]", "customize the video for [prospect]", "video for my call with [company]", "new vertical variant", or "spin the spine for [client]". Also trigger when the user wants a new variant block, a re-render for a different audience, or a Triangulation-style pillar video customized per client.
---

# Build a Custom Market Experiment Video

Turn Flashpoint.AI's gold-standard video spine into a prospect-specific sales
asset in one session. The output is an edited `variants.ts` (or `constants.ts`)
block + a rendered MP4, in the established visual system.

## The source projects (OneDrive → `Cowork with Claude/`)

| Project | What it is | Customization surface |
|---|---|---|
| `behavioral-testing/` | "Market Experiments: Conjoint in the Wild" — 63s, the flagship | `src/variants.ts` (ACTIVE switch) |
| `the-brain/` | "The Brain Behind Flashpoint.AI" — 60s | `src/constants.ts` |
| `triangulation/` | "Triangulation" pillar video — 85s, split-screen | `src/variants.ts` (ACTIVE switch) |

If working locally, the user may also have these folders on disk. Never edit
`node_modules`. All copy/timing lives in `constants.ts`; all client-specific
copy lives in `variants.ts`.

## Workflow

### 1 · Research the prospect (10 min max)
- Web-search the company: what they sell, who their customer is, one live
  strategic tension (launch, repositioning, pricing, market entry).
- From their world, draft: **one client question** (the typed opener, in their
  voice), **the audience** (who they need to understand), **the test matrix**
  (3-4 things-to-test × 3 audiences/occasions), and **a fictional-but-adjacent
  brand name** for any mock ad (never mock up the prospect's real ad without
  being asked — adjacent fiction reads as smart, real logos read as presumptuous).
- Nearest existing variant is the starting block: `hnw` (premium financial /
  luxury — the Capital One pattern), `cpg` (consumer product / considered
  purchase — the Bridgestone pattern), `b2b` (data/services sold to firms —
  the Expana pattern), `em` (market entry).

### 2 · Write the variant block
Copy the nearest block in `variants.ts`, rename the key to the client
(lowercase, e.g. `expana`), and fill every field using
`references/variant-checklist.md`. Rules:
- The typed question must sound like *their* insights lead wrote it — concrete
  category nouns, a real decision at stake, ≤ 160 characters.
- Grid columns = what they'd test (claims, formats, price frames). Grid rows =
  who they'd target. Use their vocabulary.
- Numbers stay plausible and internally consistent (n sizes, incidence,
  percentages that sum sensibly).
- Voice: short, declarative, enemy-aware (the enemy is slow/stated-preference
  research). No hype adjectives — numbers and motion carry confidence.

### 3 · Rebrand + compliance check (every render, no exceptions)
- Product name is **Market Experiments** — "behavioral" only when describing
  data/behavior ("behavioral CTR", "behavioral vs. stated").
- **PATENTED** badge on the experiment matrix. Engine steps: "Market
  Experiments · MX01–08".
- Rob = **Head of Partnerships**.
- Proof points only from the approved list (see
  `references/approved-proof-points.md`) — never invent stats.
- No competitor names on screen unless the user asks.
- Positioning line available if needed: augmenting researchers, never
  replacing them.

### 4 · Flip the switch & render
```bash
# in the project folder
# 1. set ACTIVE = '<clientkey>' at the marked EDIT THIS LINE in src/variants.ts
npm install          # first time only
npm start            # preview in Remotion Studio
npx remotion render <CompositionId> "out/Market_Experiments_<Client>_v1.mp4" --codec h264
```
Filename convention: `Market_Experiments_<Client>_<vN>.mp4`. Keep the generic
spine variant untouched so the base asset never drifts.

### 5 · Deliver
- Present the MP4 (or the edited variant block if rendering happens on the
  user's machine).
- Offer the companion one-liner for the outreach email in the daily-taglines
  voice (short, declarative, one number).
- If a new persistent variant was created, note it should be committed back to
  the project folder on OneDrive.

## Building a NEW pillar video from scratch (not just a variant)
Follow the spine: 1920×1080 @ 30fps, exact frame math, 8-12 scenes, silent,
100% code-drawn, ƒ. mark + film grain + crossfades + one orange accent word
per overlay. Story arc: typed client question → the machine visibly thinking →
options narrowing → behavior observed → a priced deliverable ("Approve &
launch"). Split-screen where possible: narrative left, artifacts right.
Everything editable from `constants.ts`; anything client-specific in
`variants.ts`. Write a README in house style.

## References
- `references/variant-checklist.md` — every field to fill, with the quality
  bar for each. Read before writing any variant block.
- `references/approved-proof-points.md` — the only stats/claims allowed on
  screen.
