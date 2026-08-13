// ============================================================================
// Flashpoint.AI — "Triangulation" · every word, color, number & timing lives
// here. 30 frames = 1 second. Edit this file; components just render it.
// ============================================================================

import {V} from './variants';

export const FPS = 30;
export const W = 1920;
export const H = 1080;

// 85 seconds exactly
export const TOTAL_FRAMES = 2550;

// ---------------------------------------------------------------- palette --
export const COLORS = {
  paper: '#FAF7F2',
  panel: '#FFFFFF',
  ink: '#1B1712',
  inkSoft: '#6B6259',
  line: '#E6DFD5',
  accent: '#F04E23', // Flashpoint orange — re-colors every accent at once
  accentSoft: 'rgba(240,78,35,0.13)',
  dark: '#131008', // "inside the Brain" background
  darkPanel: '#1E1A14',
  darkLine: 'rgba(255,255,255,0.10)',
  glyph: 'rgba(240,78,35,0.35)',
  good: '#1E9E6A',
  warn: '#D99000',
  bad: '#C43D3D',
  // color-coded Market Experiment ad variants
  adA: '#F04E23',
  adB: '#2D7FF9',
  adC: '#1E9E6A',
  adD: '#8B5CF6',
};

// ------------------------------------------------------------ scene clock --
// from = start frame · dur = length. Crossfades overlap by FADE frames.
export const FADE = 12;
export const SCENES = {
  s1: {from: 0, dur: 210}, //  0:00–0:07  the question
  s2: {from: 210, dur: 225}, //  0:07–0:14.5 the Brain dissects
  s3: {from: 435, dur: 210}, //  0:14.5–0:21.5 Research Plan
  s4: {from: 645, dur: 180}, //  0:21.5–0:27.5 SOW
  s5: {from: 825, dur: 240}, //  0:27.5–0:35.5 survey build
  s6: {from: 1065, dur: 240}, //  0:35.5–0:43.5 field it
  s7: {from: 1305, dur: 255}, //  0:43.5–0:52 qual
  s8: {from: 1560, dur: 180}, //  0:52–0:58  Market Experiments (fast)
  s9: {from: 1740, dur: 150}, //  0:58–1:03  the fibered network
  s10: {from: 1890, dur: 270}, //  1:03–1:12  private LLM + fit score
  s11: {from: 2160, dur: 270}, //  1:12–1:21  synthetic panels + next project
  s12: {from: 2430, dur: 120}, //  1:21–1:25  end card
} as const;

// ------------------------------------------------- split-screen left rail --
// The connective-tissue thread: a node per scene on one continuous line.
export const RAIL = {
  x: 96, // thread x-position inside the left column
  width: 700, // left column width; right column = artifact stage
};

// ================================================================= SCENE 1 =
export const S1 = {
  kicker: 'FLASHPOINT.AI · VALUE PILLAR 02',
  title: 'Triangulation',
  sub: 'One question. Every method. One brain.',
  typed: V.typed,
  typeStart: 40,
  typeEnd: 150,
  sendFlash: 162,
  ghosts: [
    'Will Gen Z pay a premium for repairable devices?',
    'Which claim should lead the redesign?',
    'Is our loyalty program worth what it costs?',
    'What does the mid-market really think of us?',
  ],
};

// ================================================================= SCENE 2 =
export const S2 = {
  kicker: '01 · DISSECT',
  left: [
    'The Brain reads your question the way a world-class researcher would —',
    'breaks it into its component concepts,',
    'and picks the right tool for every one of them.',
  ],
  footnote: 'Every module custom-built by researchers working with world-class engineers.',
  fragments: ['Occasions', 'Concepts', 'Attributes', 'Claims', 'Price', 'Behavior'],
  hotWords: ['occasions', 'concept', 'wins'],
  toolbox: [
    {label: 'Quant surveys', on: true},
    {label: 'Moderated qual', on: true},
    {label: 'Market Experiments', on: true},
    {label: 'Panel APIs', on: true},
    {label: 'Expert network', on: true},
    {label: 'Synthetic panels', on: true},
    {label: 'MaxDiff / Conjoint', on: true},
    {label: 'Media monitoring', on: false},
    {label: 'Segmentation', on: false},
  ],
  sequence: ['01 Quant survey', '02 Human-moderated qual', '03 Market Experiments'],
  seqCaption: 'Right method · right scale · right order',
};

// ================================================================= SCENE 3 =
// Content drawn from the real Plant-Based Cookie Research Plan
export const S3 = {
  kicker: '02 · PLAN',
  left: [
    'Step one of every engagement: the Research Plan.',
    'Problem statement. Methods. Deliverables.',
    'Written by the Brain — reviewed by a human researcher.',
  ],
  doc: {
    title: V.planTitle,
    sections: V.planSections,
  },
  stamp: 'DRAFTED IN ONE CONVERSATION',
};

// ================================================================= SCENE 4 =
export const S4 = {
  kicker: '03 · SOW',
  left: [
    'Approve the plan and the platform builds the SOW —',
    'priced, staged, timed, client-ready.',
  ],
  rows: V.sowRows,
  total: V.sowTotal,
  timeline: V.sowTimeline,
  cta: 'Approve & launch',
};

// ================================================================= SCENE 5 =
export const S5 = {
  kicker: '04 · BUILD',
  left: [
    'A Flashpoint expert researcher sets your team up —',
    'then the platform writes a world-class survey.',
    'Advanced instruments included, not bolted on.',
  ],
  humanChip: 'Flashpoint researcher · in the loop',
  qTypes: [
    'Conjoint',
    'Van Westendorp pricing',
    'MaxDiff',
    'Block rotation',
    'Hidden variables',
    'Question routing',
    'Quota logic',
    'Constant-sum allocation',
  ],
  preview: {
    q: V.previewQ,
    tag: 'CONSTANT-SUM · AUTO-PROGRAMMED',
  },
  badge: 'Enterprise-grade survey engine',
};

// ================================================================= SCENE 6 =
export const S6 = {
  kicker: '05 · FIELD',
  left: [
    'Bring your own list — or tap our built-in panel APIs.',
    'We recommend the best panel for the question.',
    'One click. Live in minutes, hosted natively. Already programmed.',
  ],
  options: ['Upload your list', 'Built-in panel APIs'],
  panelPick: {name: V.panelName, note: V.panelNote},
  buy: V.buyLabel,
  buyAlt: 'or we invoice you',
  live: 'LIVE',
  nTarget: 500,
  quotas: [
    {label: 'Age 18–34', pct: 96},
    {label: 'Age 35–55', pct: 88},
    {label: 'Primary shopper', pct: 92},
    {label: 'Region mix', pct: 84},
  ],
  instant: 'Results the moment fielding closes — no analyst queue, no deck-building wait.',
};

// ================================================================= SCENE 7 =
export const S7 = {
  kicker: '06 · GO DEEPER',
  left: [
    'The quant shapes the qual.',
    'Survey findings round out the interview guide;',
    'the panel sources the IDIs; our expert network adds category depth.',
    'Human conversations, human-run — insights flow back into the Brain.',
  ],
  findings: V.findings,
  guide: 'Discussion guide · v2 — informed by Phase 1',
  idis: '12 IDIs sourced from panel',
  expert: V.expert,
  offPlatform: 'Moderated person-to-person · vendor-run',
  back: 'Transcripts → the Brain',
};

// ================================================================= SCENE 8 =
export const S8 = {
  kicker: '07 · PROVE IT',
  left: ['Then the patented part.', 'Real ads. Real people. Observed, never asked.'],
  gridCols: V.gridCols,
  gridRows: V.gridRows,
  winner: {r: 0, c: 0},
  patent: 'PATENTED · MARKET EXPERIMENTS',
  fast: 'Live behavioral signal in under a week',
};

// ================================================================= SCENE 9 =
export const S9 = {
  kicker: '08 · CORRELATE',
  left: [
    'This is the part nobody else does:',
    'every method is correlating with every other, live.',
    'Not three studies stapled together — one fibered system.',
  ],
  nodes: ['Quant', 'Qual', 'Market Experiments', 'Panels', 'Experts', 'Synths'],
  center: 'THE BRAIN',
};

// ================================================================ SCENE 10 =
export const S10 = {
  kicker: '09 · DELIVER',
  left: [
    'Every project ships as a private LLM,',
    'custom-calibrated to your question set.',
    'Charts, crosstabs, one-click PPT — and a conversation.',
    'Every answer carries a fit score.',
  ],
  artifacts: ['Charts', 'Crosstabs', 'Export .PPTX', 'Share'],
  chatQ: V.chatQ,
  chatA: V.chatA,
  // The fit radar (matches the reference graphic; values animate axis-by-axis)
  radarAxes: ['Demographic Fit', 'Attribute Fit', 'Category Fit'],
  radarA: [78, 62, 90], // first answer
  radarB: [84, 88, 71], // second answer (shape visibly moves)
  fourthCriterion: 'Recency', // ← CONFIRM the 4th fit criterion; shown as a chip
  fourthValue: 92,
};

// ================================================================ SCENE 11 =
export const S11 = {
  kicker: '10 · MULTIPLY',
  left: [
    'Summon calibrated synthetic panels — one per segment —',
    'and ask them anything, through quant, qual, or Market Experiments.',
    'When the Brain isn’t confident, it says so —',
    'and hands you the next project, ready to launch.',
  ],
  synthQ: V.synthQ,
  synths: V.synths,
  gap: {
    title: V.gapTitle,
    rec: V.gapRec,
    cta: 'Launch next project →',
  },
  feed: 'Recommendation shared with your insights team & agency partner',
};

// ================================================================ SCENE 12 =
export const S12 = {
  word: 'ƒ. Flashpoint.AI',
  title: 'Triangulation',
  sub: 'Augmenting researchers. Never replacing them.',
  taglines: ['Purpose-built.', 'Patented.', 'Yours.'],
  footer: 'flashpoint.ai',
};
