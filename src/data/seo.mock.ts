import type { KeywordRow } from '@/types/seo'

// Panel B — SEO & Keyword Gap Map
export const seoData: KeywordRow[] = [

  // ── ICP A ─────────────────────────────────────────────────────────────────────

  { id: 's1',  stage: 'trigger',       intentType: 'problem-aware',   icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'signs fund manager is underperforming',         rank: null, gapStatus: 'critical', ragStatus: 'red',   rankHistory: [null,null,null,null,null,null] },
  { id: 's2',  stage: 'trigger',       intentType: 'problem-aware',   icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'when to switch fund managers',                   rank: null, gapStatus: 'critical', ragStatus: 'red',   rankHistory: [null,null,null,null,null,null] },
  { id: 's3',  stage: 'trigger',       intentType: 'problem-aware',   icp: 'icp-a', subSegment: 'adviser-passive',     exampleQuery: 'active fund manager underperforming benchmark',  rank: null, gapStatus: 'critical', ragStatus: 'red',   rankHistory: [null,null,null,31,null,null] },

  { id: 's4',  stage: 'consideration', intentType: 'category-aware',  icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'best Australian equity fund managers',            rank: 12,   gapStatus: 'weak',     ragStatus: 'amber', rankHistory: [17,15,14,13,12,12] },
  { id: 's5',  stage: 'consideration', intentType: 'category-aware',  icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'top performing fund managers 2026',              rank: 16,   gapStatus: 'weak',     ragStatus: 'amber', rankHistory: [21,20,18,17,16,16] },
  { id: 's6',  stage: 'consideration', intentType: 'category-aware',  icp: 'icp-a', subSegment: 'adviser-bespoke',     exampleQuery: 'active fund manager for adviser platform',        rank: 8,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [11,10,9,9,8,8] },

  { id: 's7',  stage: 'evaluation',    intentType: 'solution-aware',  icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'fund manager due diligence checklist',            rank: 4,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [7,6,5,5,4,4] },
  { id: 's8',  stage: 'evaluation',    intentType: 'solution-aware',  icp: 'icp-a', subSegment: 'adviser-bespoke',     exampleQuery: 'how to evaluate a fund manager investment process', rank: 6,   gapStatus: 'strong',   ragStatus: 'green', rankHistory: [10,9,8,7,6,6] },
  { id: 's9',  stage: 'evaluation',    intentType: 'solution-aware',  icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'compare fund manager performance vs peers',       rank: 11,   gapStatus: 'weak',     ragStatus: 'amber', rankHistory: [15,14,13,12,11,11] },

  { id: 's10', stage: 'purchase',      intentType: 'decision',        icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'fund manager mandate application',                rank: 2,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [3,3,2,2,2,2] },
  { id: 's11', stage: 'purchase',      intentType: 'decision',        icp: 'icp-a', subSegment: 'adviser-bespoke',     exampleQuery: 'adviser access to managed accounts',              rank: 3,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [5,4,4,3,3,3] },

  { id: 's12', stage: 'loyalty-loop',  intentType: 'retention',       icp: 'icp-a', subSegment: 'adviser-performance', exampleQuery: 'how to get quarterly reporting from fund manager', rank: null, gapStatus: 'blind-spot', ragStatus: 'grey', rankHistory: [null,null,null,null,null,null] },
  { id: 's13', stage: 'loyalty-loop',  intentType: 'retention',       icp: 'icp-a', subSegment: 'adviser-responsible', exampleQuery: 'increase allocation to existing fund manager',    rank: null, gapStatus: 'blind-spot', ragStatus: 'grey', rankHistory: [null,null,null,null,null,null] },

  // ── ICP B ─────────────────────────────────────────────────────────────────────

  { id: 's14', stage: 'trigger',       intentType: 'problem-aware',   icp: 'icp-b', subSegment: 'institutional-super-fund',    exampleQuery: 'reviewing external fund manager performance super fund', rank: null, gapStatus: 'critical', ragStatus: 'red',   rankHistory: [null,null,null,null,null,null] },
  { id: 's15', stage: 'trigger',       intentType: 'problem-aware',   icp: 'icp-b', subSegment: 'institutional-family-office', exampleQuery: 'fund manager selection criteria institutional',          rank: null, gapStatus: 'critical', ragStatus: 'red',   rankHistory: [null,null,null,24,null,null] },

  { id: 's16', stage: 'consideration', intentType: 'category-aware',  icp: 'icp-b', subSegment: 'institutional-super-fund',    exampleQuery: 'institutional fund managers Australia',                 rank: 9,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [13,12,11,10,9,9] },
  { id: 's17', stage: 'consideration', intentType: 'category-aware',  icp: 'icp-b', subSegment: 'institutional-corporate',     exampleQuery: 'RFP process for fund manager selection',                rank: 14,   gapStatus: 'weak',     ragStatus: 'amber', rankHistory: [18,17,16,15,14,14] },

  { id: 's18', stage: 'evaluation',    intentType: 'solution-aware',  icp: 'icp-b', subSegment: 'institutional-endowment',     exampleQuery: 'fund manager ESG credentials institutional',            rank: 5,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [8,7,6,6,5,5] },
  { id: 's19', stage: 'evaluation',    intentType: 'solution-aware',  icp: 'icp-b', subSegment: 'institutional-super-fund',    exampleQuery: 'information memorandum fund manager review',            rank: 7,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [11,10,9,8,7,7] },

  { id: 's20', stage: 'purchase',      intentType: 'decision',        icp: 'icp-b', subSegment: 'institutional-super-fund',    exampleQuery: 'fund manager mandate terms institutional investor',      rank: 4,    gapStatus: 'strong',   ragStatus: 'green', rankHistory: [6,5,5,4,4,4] },

  { id: 's21', stage: 'post-purchase', intentType: 'retention',       icp: 'icp-b', subSegment: 'institutional-super-fund',    exampleQuery: 'portfolio reporting standards institutional mandates',   rank: null, gapStatus: 'blind-spot', ragStatus: 'grey', rankHistory: [null,null,null,null,null,null] },
]
