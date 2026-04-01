import type { KeywordRow } from '@/types/seo'

// Panel B — SEO & Keyword Gap Map
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)
export const seoData: KeywordRow[] = [

  // ── ICP A ─────────────────────────────────────────

  // Trigger — problem-aware (adviser recognises they need to review their manager)
  {
    id: 's1',
    stage: 'trigger',
    intentType: 'problem-aware',
    exampleQuery: 'signs fund manager is underperforming',
    rank: null,
    gapStatus: 'critical',
    ragStatus: 'red',
    icp: 'icp-a',
    rankHistory: [null, null, null, null, null, null],
  },
  {
    id: 's2',
    stage: 'trigger',
    intentType: 'problem-aware',
    exampleQuery: 'when to switch fund managers',
    rank: null,
    gapStatus: 'critical',
    ragStatus: 'red',
    icp: 'icp-a',
    rankHistory: [null, null, null, null, null, null],
  },
  {
    id: 's3',
    stage: 'trigger',
    intentType: 'problem-aware',
    exampleQuery: 'active fund manager underperforming benchmark',
    rank: null,
    gapStatus: 'critical',
    ragStatus: 'red',
    icp: 'icp-a',
    rankHistory: [null, null, null, 31, null, null],
  },

  // Consideration — category-aware (adviser shortlisting managers)
  {
    id: 's4',
    stage: 'consideration',
    intentType: 'category-aware',
    exampleQuery: 'best Australian equity fund managers',
    rank: 12,
    gapStatus: 'weak',
    ragStatus: 'amber',
    icp: 'icp-a',
    rankHistory: [17, 15, 14, 13, 12, 12],
  },
  {
    id: 's5',
    stage: 'consideration',
    intentType: 'category-aware',
    exampleQuery: 'top performing fund managers 2026',
    rank: 16,
    gapStatus: 'weak',
    ragStatus: 'amber',
    icp: 'icp-a',
    rankHistory: [21, 20, 18, 17, 16, 16],
  },
  {
    id: 's6',
    stage: 'consideration',
    intentType: 'category-aware',
    exampleQuery: 'active fund manager for adviser platform',
    rank: 8,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-a',
    rankHistory: [11, 10, 9, 9, 8, 8],
  },

  // Evaluation — solution-aware (adviser in due diligence)
  {
    id: 's7',
    stage: 'evaluation',
    intentType: 'solution-aware',
    exampleQuery: 'fund manager due diligence checklist',
    rank: 4,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-a',
    rankHistory: [7, 6, 5, 5, 4, 4],
  },
  {
    id: 's8',
    stage: 'evaluation',
    intentType: 'solution-aware',
    exampleQuery: 'how to evaluate a fund manager investment process',
    rank: 6,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-a',
    rankHistory: [10, 9, 8, 7, 6, 6],
  },
  {
    id: 's9',
    stage: 'evaluation',
    intentType: 'solution-aware',
    exampleQuery: 'compare fund manager performance vs peers',
    rank: 11,
    gapStatus: 'weak',
    ragStatus: 'amber',
    icp: 'icp-a',
    rankHistory: [15, 14, 13, 12, 11, 11],
  },

  // Purchase — decision intent (adviser ready to allocate)
  {
    id: 's10',
    stage: 'purchase',
    intentType: 'decision',
    exampleQuery: 'fund manager mandate application',
    rank: 2,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-a',
    rankHistory: [3, 3, 2, 2, 2, 2],
  },
  {
    id: 's11',
    stage: 'purchase',
    intentType: 'decision',
    exampleQuery: 'adviser access to managed accounts',
    rank: 3,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-a',
    rankHistory: [5, 4, 4, 3, 3, 3],
  },

  // Loyalty Loop — retention (not tracked)
  {
    id: 's12',
    stage: 'loyalty-loop',
    intentType: 'retention',
    exampleQuery: 'how to get quarterly reporting from fund manager',
    rank: null,
    gapStatus: 'blind-spot',
    ragStatus: 'grey',
    icp: 'icp-a',
    rankHistory: [null, null, null, null, null, null],
  },
  {
    id: 's13',
    stage: 'loyalty-loop',
    intentType: 'retention',
    exampleQuery: 'increase allocation to existing fund manager',
    rank: null,
    gapStatus: 'blind-spot',
    ragStatus: 'grey',
    icp: 'icp-a',
    rankHistory: [null, null, null, null, null, null],
  },

  // ── ICP B ─────────────────────────────────────────

  // Trigger — institutional problem-aware
  {
    id: 's14',
    stage: 'trigger',
    intentType: 'problem-aware',
    exampleQuery: 'reviewing external fund manager performance super fund',
    rank: null,
    gapStatus: 'critical',
    ragStatus: 'red',
    icp: 'icp-b',
    rankHistory: [null, null, null, null, null, null],
  },
  {
    id: 's15',
    stage: 'trigger',
    intentType: 'problem-aware',
    exampleQuery: 'fund manager selection criteria institutional',
    rank: null,
    gapStatus: 'critical',
    ragStatus: 'red',
    icp: 'icp-b',
    rankHistory: [null, null, null, 24, null, null],
  },

  // Consideration — institutional shortlisting
  {
    id: 's16',
    stage: 'consideration',
    intentType: 'category-aware',
    exampleQuery: 'institutional fund managers Australia',
    rank: 9,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-b',
    rankHistory: [13, 12, 11, 10, 9, 9],
  },
  {
    id: 's17',
    stage: 'consideration',
    intentType: 'category-aware',
    exampleQuery: 'RFP process for fund manager selection',
    rank: 14,
    gapStatus: 'weak',
    ragStatus: 'amber',
    icp: 'icp-b',
    rankHistory: [18, 17, 16, 15, 14, 14],
  },

  // Evaluation — institutional due diligence
  {
    id: 's18',
    stage: 'evaluation',
    intentType: 'solution-aware',
    exampleQuery: 'fund manager ESG credentials institutional',
    rank: 5,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-b',
    rankHistory: [8, 7, 6, 6, 5, 5],
  },
  {
    id: 's19',
    stage: 'evaluation',
    intentType: 'solution-aware',
    exampleQuery: 'information memorandum fund manager review',
    rank: 7,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-b',
    rankHistory: [11, 10, 9, 8, 7, 7],
  },

  // Purchase — institutional decision
  {
    id: 's20',
    stage: 'purchase',
    intentType: 'decision',
    exampleQuery: 'fund manager mandate terms institutional investor',
    rank: 4,
    gapStatus: 'strong',
    ragStatus: 'green',
    icp: 'icp-b',
    rankHistory: [6, 5, 5, 4, 4, 4],
  },

  // Post-Purchase — blind spot
  {
    id: 's21',
    stage: 'post-purchase',
    intentType: 'retention',
    exampleQuery: 'portfolio reporting standards institutional mandates',
    rank: null,
    gapStatus: 'blind-spot',
    ragStatus: 'grey',
    icp: 'icp-b',
    rankHistory: [null, null, null, null, null, null],
  },
]
