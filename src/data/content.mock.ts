import type { ContentAsset } from '@/types/content'

// Panel A — Content Stall vs Accelerator
export const contentData: ContentAsset[] = [

  // ── ICP A · Evaluation ────────────────────────────────────────────────────────
  { id: 'c1',  name: 'Due Diligence Questionnaire (DDQ)',          stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  4.1, signal: 'stall',       ragStatus: 'red',   leadCount: 48 },
  { id: 'c2',  name: 'Interactive Returns Calculator',             stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -5.3, signal: 'accelerator', ragStatus: 'green', leadCount: 41 },
  { id: 'c3',  name: 'Investment Process Presentation (PDF)',      stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-bespoke',     velocityDeltaDays:  2.6, signal: 'stall',       ragStatus: 'amber', leadCount: 35 },
  { id: 'c4',  name: 'Portfolio Manager Video Interview',          stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -4.0, signal: 'accelerator', ragStatus: 'green', leadCount: 29 },
  { id: 'c5',  name: 'Performance Attribution Report',             stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -2.1, signal: 'accelerator', ragStatus: 'green', leadCount: 33 },

  // ── ICP A · Consideration ─────────────────────────────────────────────────────
  { id: 'c6',  name: 'Fund Fact Sheet — Flagship Strategy',        stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  1.2, signal: 'neutral',     ragStatus: 'green', leadCount: 74 },
  { id: 'c7',  name: 'Adviser Guide: Selecting a Fund Manager',    stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-bespoke',     velocityDeltaDays: -3.2, signal: 'accelerator', ragStatus: 'green', leadCount: 56 },
  { id: 'c8',  name: 'Benchmark vs Peer Comparison Tool',          stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-passive',     velocityDeltaDays: -1.8, signal: 'accelerator', ragStatus: 'green', leadCount: 44 },

  // ── ICP A · Trigger ───────────────────────────────────────────────────────────
  { id: 'c9',  name: 'Whitepaper: Active vs Passive in 2026',      stage: 'trigger',       icp: 'icp-a', subSegment: 'adviser-passive',     velocityDeltaDays:  0.5, signal: 'neutral',     ragStatus: 'green', leadCount: 88 },
  { id: 'c10', name: 'Blog: 5 Signs Your Fund Manager Is Underperforming', stage: 'trigger', icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -2.4, signal: 'accelerator', ragStatus: 'green', leadCount: 102 },

  // ── ICP A · Purchase ──────────────────────────────────────────────────────────
  { id: 'c11', name: 'Onboarding Checklist for Advisers',          stage: 'purchase',      icp: 'icp-a', subSegment: 'adviser-bespoke',     velocityDeltaDays: -3.9, signal: 'accelerator', ragStatus: 'green', leadCount: 27 },
  { id: 'c12', name: 'Fee Schedule & Mandate Terms (PDF)',          stage: 'purchase',      icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  3.7, signal: 'stall',       ragStatus: 'red',   leadCount: 22 },

  // ── ICP A · Post-Purchase ─────────────────────────────────────────────────────
  { id: 'c13', name: 'Quarterly Portfolio Review Webinar',          stage: 'post-purchase', icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: null, signal: 'blind-spot',  ragStatus: 'grey',  leadCount: 0 },

  // ── ICP A · Loyalty Loop ──────────────────────────────────────────────────────
  { id: 'c14', name: 'Adviser Referral Program Overview',           stage: 'loyalty-loop',  icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays: null, signal: 'blind-spot',  ragStatus: 'grey',  leadCount: 4 },

  // ── ICP B · Evaluation ────────────────────────────────────────────────────────
  { id: 'c15', name: 'Institutional Information Memorandum (IM)',   stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-super-fund',    velocityDeltaDays:  2.0, signal: 'stall',       ragStatus: 'amber', leadCount: 21 },
  { id: 'c16', name: 'Risk Management Framework Document',          stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-family-office', velocityDeltaDays: -4.5, signal: 'accelerator', ragStatus: 'green', leadCount: 18 },
  { id: 'c17', name: 'ESG & Responsible Investment Policy',         stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-endowment',     velocityDeltaDays: -2.8, signal: 'accelerator', ragStatus: 'green', leadCount: 24 },

  // ── ICP B · Consideration ─────────────────────────────────────────────────────
  { id: 'c18', name: 'Case Study: Super Fund Mandate Outcome',      stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-super-fund',    velocityDeltaDays: -3.1, signal: 'accelerator', ragStatus: 'green', leadCount: 31 },
  { id: 'c19', name: 'Institutional Capabilities Deck',             stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-corporate',     velocityDeltaDays:  1.5, signal: 'stall',       ragStatus: 'amber', leadCount: 16 },

  // ── ICP B · Purchase ──────────────────────────────────────────────────────────
  { id: 'c20', name: 'ISDA / AFSL Compliance Pack',                 stage: 'purchase',      icp: 'icp-b', subSegment: 'institutional-super-fund',    velocityDeltaDays:  5.2, signal: 'stall',       ragStatus: 'red',   leadCount: 11 },
]
