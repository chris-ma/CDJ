import type { ContentAsset } from '@/types/content'

// Panel A — Content Stall vs Accelerator
export const contentData: ContentAsset[] = [

  // ── ICP A · adviser-performance ───────────────────────────────────────────────
  { id: 'c1',  name: 'Due Diligence Questionnaire (DDQ)',              stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  4.1, signal: 'stall',       ragStatus: 'red',   leadCount: 48 },
  { id: 'c2',  name: 'Interactive Returns Calculator',                 stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -5.3, signal: 'accelerator', ragStatus: 'green', leadCount: 41 },
  { id: 'c4',  name: 'Portfolio Manager Video Interview',              stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -4.0, signal: 'accelerator', ragStatus: 'green', leadCount: 29 },
  { id: 'c5',  name: 'Performance Attribution Report',                 stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -2.1, signal: 'accelerator', ragStatus: 'green', leadCount: 33 },
  { id: 'c6',  name: 'Fund Fact Sheet — Flagship Strategy',            stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  1.2, signal: 'neutral',     ragStatus: 'green', leadCount: 74 },
  { id: 'c10', name: 'Blog: 5 Signs Your Fund Manager Is Underperforming', stage: 'trigger',  icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: -2.4, signal: 'accelerator', ragStatus: 'green', leadCount: 102 },
  { id: 'c12', name: 'Fee Schedule & Mandate Terms (PDF)',              stage: 'purchase',      icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays:  3.7, signal: 'stall',       ragStatus: 'red',   leadCount: 22 },
  { id: 'c13', name: 'Quarterly Portfolio Review Webinar',              stage: 'post-purchase', icp: 'icp-a', subSegment: 'adviser-performance', velocityDeltaDays: null, signal: 'blind-spot',  ragStatus: 'grey',  leadCount: 0 },

  // ── ICP A · adviser-bespoke ───────────────────────────────────────────────────
  { id: 'c3',  name: 'Investment Process Presentation (PDF)',           stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-bespoke', velocityDeltaDays:  2.6, signal: 'stall',       ragStatus: 'amber', leadCount: 35 },
  { id: 'c7',  name: 'Adviser Guide: Selecting a Fund Manager',         stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-bespoke', velocityDeltaDays: -3.2, signal: 'accelerator', ragStatus: 'green', leadCount: 56 },
  { id: 'c11', name: 'Onboarding Checklist for Advisers',               stage: 'purchase',      icp: 'icp-a', subSegment: 'adviser-bespoke', velocityDeltaDays: -3.9, signal: 'accelerator', ragStatus: 'green', leadCount: 27 },
  { id: 'c21', name: 'SMA Structure & Portfolio Construction Guide',    stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-bespoke', velocityDeltaDays:  2.8, signal: 'stall',       ragStatus: 'amber', leadCount: 31 },
  { id: 'c22', name: 'Bespoke Mandate Proposal Template',               stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-bespoke', velocityDeltaDays: -1.5, signal: 'accelerator', ragStatus: 'green', leadCount: 19 },

  // ── ICP A · adviser-passive ───────────────────────────────────────────────────
  { id: 'c8',  name: 'Benchmark vs Peer Comparison Tool',               stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-passive', velocityDeltaDays: -1.8, signal: 'accelerator', ragStatus: 'green', leadCount: 44 },
  { id: 'c9',  name: 'Whitepaper: Active vs Passive in 2026',           stage: 'trigger',       icp: 'icp-a', subSegment: 'adviser-passive', velocityDeltaDays:  0.5, signal: 'neutral',     ragStatus: 'green', leadCount: 88 },
  { id: 'c23', name: 'Index Fund Fact Sheet — Core Strategy',           stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-passive', velocityDeltaDays:  3.1, signal: 'stall',       ragStatus: 'red',   leadCount: 37 },
  { id: 'c24', name: 'ETF vs Managed Fund: Adviser Decision Guide',     stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-passive', velocityDeltaDays: -2.6, signal: 'accelerator', ragStatus: 'green', leadCount: 28 },
  { id: 'c25', name: 'Tracking Error & Cost Analysis Report',           stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-passive', velocityDeltaDays:  1.8, signal: 'stall',       ragStatus: 'amber', leadCount: 22 },

  // ── ICP A · adviser-responsible ───────────────────────────────────────────────
  { id: 'c14', name: 'Adviser Referral Program Overview',               stage: 'loyalty-loop',  icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays: null, signal: 'blind-spot', ragStatus: 'grey', leadCount: 4 },
  { id: 'c26', name: 'ESG Integration Framework Whitepaper',            stage: 'trigger',       icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays: -3.4, signal: 'accelerator', ragStatus: 'green', leadCount: 67 },
  { id: 'c27', name: 'Responsible Investment Fact Sheet',               stage: 'consideration', icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays:  0.8, signal: 'neutral',    ragStatus: 'green', leadCount: 53 },
  { id: 'c28', name: 'Carbon Footprint & Climate Risk Report',          stage: 'evaluation',    icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays: -4.7, signal: 'accelerator', ragStatus: 'green', leadCount: 41 },
  { id: 'c29', name: 'Sustainable Mandate Terms & UNPRI Alignment',     stage: 'purchase',      icp: 'icp-a', subSegment: 'adviser-responsible', velocityDeltaDays:  2.2, signal: 'stall',      ragStatus: 'amber', leadCount: 18 },

  // ── ICP B · institutional-super-fund ──────────────────────────────────────────
  { id: 'c15', name: 'Institutional Information Memorandum (IM)',        stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-super-fund', velocityDeltaDays:  2.0, signal: 'stall',       ragStatus: 'amber', leadCount: 21 },
  { id: 'c18', name: 'Case Study: Super Fund Mandate Outcome',           stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-super-fund', velocityDeltaDays: -3.1, signal: 'accelerator', ragStatus: 'green', leadCount: 31 },
  { id: 'c20', name: 'ISDA / AFSL Compliance Pack',                      stage: 'purchase',      icp: 'icp-b', subSegment: 'institutional-super-fund', velocityDeltaDays:  5.2, signal: 'stall',       ragStatus: 'red',   leadCount: 11 },
  { id: 'c30', name: 'Super Fund Investment Manager Capabilities Deck',  stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-super-fund', velocityDeltaDays:  1.4, signal: 'stall',       ragStatus: 'amber', leadCount: 26 },
  { id: 'c31', name: 'Trustee Due Diligence Guide',                      stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-super-fund', velocityDeltaDays: -2.3, signal: 'accelerator', ragStatus: 'green', leadCount: 19 },

  // ── ICP B · institutional-family-office ───────────────────────────────────────
  { id: 'c16', name: 'Risk Management Framework Document',               stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-family-office', velocityDeltaDays: -4.5, signal: 'accelerator', ragStatus: 'green', leadCount: 18 },
  { id: 'c32', name: 'Family Office Investment Manager Overview',        stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-family-office', velocityDeltaDays:  3.3, signal: 'stall',       ragStatus: 'red',   leadCount: 14 },
  { id: 'c33', name: 'Private Wealth Portfolio Construction Guide',      stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-family-office', velocityDeltaDays: -1.9, signal: 'accelerator', ragStatus: 'green', leadCount: 12 },
  { id: 'c34', name: 'Bespoke Mandate Proposal — Family Office',        stage: 'purchase',      icp: 'icp-b', subSegment: 'institutional-family-office', velocityDeltaDays:  4.1, signal: 'stall',       ragStatus: 'red',   leadCount: 8 },

  // ── ICP B · institutional-endowment ───────────────────────────────────────────
  { id: 'c17', name: 'ESG & Responsible Investment Policy',              stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-endowment', velocityDeltaDays: -2.8, signal: 'accelerator', ragStatus: 'green', leadCount: 24 },
  { id: 'c35', name: 'Impact Investing Capabilities Brochure',           stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-endowment', velocityDeltaDays:  1.6, signal: 'stall',       ragStatus: 'amber', leadCount: 17 },
  { id: 'c36', name: 'Endowment Portfolio Strategy Paper',               stage: 'trigger',       icp: 'icp-b', subSegment: 'institutional-endowment', velocityDeltaDays: -3.6, signal: 'accelerator', ragStatus: 'green', leadCount: 22 },
  { id: 'c37', name: 'Long-Term Return Objective Framework',             stage: 'evaluation',    icp: 'icp-b', subSegment: 'institutional-endowment', velocityDeltaDays:  2.4, signal: 'stall',       ragStatus: 'amber', leadCount: 15 },

  // ── ICP B · institutional-corporate ───────────────────────────────────────────
  { id: 'c19', name: 'Institutional Capabilities Deck',                  stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-corporate', velocityDeltaDays:  1.5, signal: 'stall',       ragStatus: 'amber', leadCount: 16 },
  { id: 'c38', name: 'Corporate Treasury Cash Management Guide',         stage: 'trigger',       icp: 'icp-b', subSegment: 'institutional-corporate', velocityDeltaDays:  3.9, signal: 'stall',       ragStatus: 'red',   leadCount: 13 },
  { id: 'c39', name: 'Short Duration Fixed Income Fact Sheet',           stage: 'consideration', icp: 'icp-b', subSegment: 'institutional-corporate', velocityDeltaDays: -2.1, signal: 'accelerator', ragStatus: 'green', leadCount: 20 },
  { id: 'c40', name: 'Capital Preservation Mandate Terms',               stage: 'purchase',      icp: 'icp-b', subSegment: 'institutional-corporate', velocityDeltaDays:  4.8, signal: 'stall',       ragStatus: 'red',   leadCount: 9 },
]
