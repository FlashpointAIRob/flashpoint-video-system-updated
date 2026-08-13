// ============================================================================
// Flashpoint.AI — "Triangulation" · CLIENT VARIANTS
// One video, many prospects. Change ACTIVE, render, done.
// All client-specific copy lives here; everything else is in constants.ts.
// ============================================================================

// ─────────────────────────────  EDIT THIS LINE  ─────────────────────────────
export const ACTIVE: VariantKey = 'generic';
// ────────────────────────────────────────────────────────────────────────────

export type VariantKey = 'generic';

export type Variant = {
  // S1 — the typed client question (≤160 chars, their voice)
  typed: string;
  // S3 — the Research Plan document
  planTitle: string;
  planSections: {h: string; b: string}[];
  // S4 — SOW line items
  sowRows: {item: string; price: string; weeks: [number, number]}[];
  sowTotal: string;
  sowTimeline: string;
  // S5 — live survey preview question
  previewQ: string;
  // S6 — fielding
  panelName: string;
  panelNote: string;
  buyLabel: string;
  // S7 — Phase 1 findings that shape the qual
  findings: string[];
  expert: string;
  // S8 — the Market Experiments matrix (what you test × who you target)
  gridCols: string[];
  gridRows: string[];
  // S10 — the private-LLM conversation
  chatQ: string;
  chatA: string;
  // S11 — synthetic panels (exactly one fit < 50 to trigger the gap beat)
  synthQ: string;
  synths: {name: string; fit: number}[];
  gapTitle: string;
  gapRec: string;
};

const VARIANTS: Record<VariantKey, Variant> = {
  // ── The spine: plant-based cookie (from the real Research Plan) ──────────
  generic: {
    typed:
      'Plant-based cookies feel like white space. Which occasions should we build for — and which concept actually wins?',
    planTitle: 'Plant-Based Cookie Occasions & Concept Prioritization',
    planSections: [
      {h: '1 · What we heard', b: 'White space with mass-market snackers — if the product leads with indulgence, not ideology.'},
      {h: '2 · Objectives', b: 'Identify priority occasions · rank concepts · isolate attribute drivers · validate behaviorally.'},
      {h: '3 · Methodology', b: 'Phase 1 Occasion survey (n=500) → Phase 2 Concept eval + MaxDiff (n=400) → Phase 3 Market Experiments.'},
      {h: '4 · Deliverables', b: 'Demand-space map · concept scorecard · proposition pull chart · exec deck.'},
    ],
    sowRows: [
      {item: 'Phase 1 · Occasion mapping survey (n=500)', price: '$24,500', weeks: [1, 3]},
      {item: 'Phase 2 · Concept eval + MaxDiff (n=400)', price: '$21,000', weeks: [3, 6]},
      {item: 'Phase 2b · Moderated qual (12 IDIs)', price: '$18,500', weeks: [4, 7]},
      {item: 'Phase 3 · Market Experiments (3 propositions)', price: '$28,000', weeks: [7, 9]},
    ],
    sowTotal: '$92,000',
    sowTimeline: '9 weeks · field to boardroom',
    previewQ: 'Q14 · Allocate 100 points across the cookie occasions you experienced this month.',
    panelName: 'Recommended panel · US grocery shoppers 18–55',
    panelNote: 'Incidence ≈ 55% · no feasibility risk',
    buyLabel: 'Purchase panel · $4,850',
    findings: ['Afternoon reset over-indexes 2.1×', '“Indulgence parity” beats clean-label', 'Soft-baked drives appeal'],
    expert: 'Expert network · Better-for-you snacking · 15 yrs',
    gridCols: ['Indulgence', 'Clean label', 'Combo', 'Control'],
    gridRows: ['Afternoon reset', 'Post-dinner treat', 'On-the-go'],
    chatQ: 'Which occasion should we lead with?',
    chatA: 'Afternoon energy reset — highest volume, weakest incumbent, strongest plant-based openness.',
    synthQ: 'Would a fruit-forward crispy format work for you?',
    synths: [
      {name: 'Busy Parents', fit: 86},
      {name: 'Fitness-first', fit: 81},
      {name: 'Flexitarian curious', fit: 78},
      {name: 'Value shoppers', fit: 34},
    ],
    gapTitle: 'Gap detected · Value shoppers',
    gapRec: 'Recommended: 300-n occasion survey + 1-week Market Experiment',
  },

};

export const V: Variant = VARIANTS[ACTIVE];
