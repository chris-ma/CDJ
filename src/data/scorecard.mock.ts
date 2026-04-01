import type { ScorecardCell } from '@/types/metrics'

// Layer 1 — Exec Scorecard
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)
// Rows without subSegment = ICP-level aggregates (shown when no sub-segment is selected)
// Rows with subSegment = sub-segment drill-down views
export const scorecardData: ScorecardCell[] = [

  // ── ICP A Aggregate ──────────────────────────────────────────────────────────
  { icp: 'icp-a', stage: 'trigger',       status: 'green', conversionRate: 0.31, benchmark: 0.27, deltaPercent:  14.8 },
  { icp: 'icp-a', stage: 'consideration', status: 'amber', conversionRate: 0.19, benchmark: 0.22, deltaPercent: -13.6 },
  { icp: 'icp-a', stage: 'evaluation',    status: 'red',   conversionRate: 0.37, benchmark: 0.48, deltaPercent: -22.9 },
  { icp: 'icp-a', stage: 'purchase',      status: 'green', conversionRate: 0.40, benchmark: 0.38, deltaPercent:   5.3 },
  { icp: 'icp-a', stage: 'post-purchase', status: 'amber', conversionRate: 0.63, benchmark: 0.74, deltaPercent: -14.9 },
  { icp: 'icp-a', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ── ICP A · Performance ───────────────────────────────────────────────────────
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'trigger',       status: 'green', conversionRate: 0.38, benchmark: 0.27, deltaPercent:  40.7 },
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'consideration', status: 'green', conversionRate: 0.23, benchmark: 0.22, deltaPercent:   4.5 },
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'evaluation',    status: 'red',   conversionRate: 0.29, benchmark: 0.48, deltaPercent: -39.6 },
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'purchase',      status: 'green', conversionRate: 0.43, benchmark: 0.38, deltaPercent:  13.2 },
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'post-purchase', status: 'amber', conversionRate: 0.68, benchmark: 0.74, deltaPercent:  -8.1 },
  { icp: 'icp-a', subSegment: 'adviser-performance', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ── ICP A · Bespoke Solution ──────────────────────────────────────────────────
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'trigger',       status: 'green', conversionRate: 0.28, benchmark: 0.27, deltaPercent:   3.7 },
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'consideration', status: 'amber', conversionRate: 0.17, benchmark: 0.22, deltaPercent: -22.7 },
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'evaluation',    status: 'amber', conversionRate: 0.44, benchmark: 0.48, deltaPercent:  -8.3 },
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'purchase',      status: 'green', conversionRate: 0.38, benchmark: 0.38, deltaPercent:   0   },
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.74, deltaPercent:   0   },
  { icp: 'icp-a', subSegment: 'adviser-bespoke', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ── ICP A · Passive / Index ───────────────────────────────────────────────────
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'trigger',       status: 'amber', conversionRate: 0.25, benchmark: 0.27, deltaPercent:  -7.4 },
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'consideration', status: 'red',   conversionRate: 0.14, benchmark: 0.22, deltaPercent: -36.4 },
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'evaluation',    status: 'green', conversionRate: 0.48, benchmark: 0.48, deltaPercent:   0   },
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'purchase',      status: 'amber', conversionRate: 0.36, benchmark: 0.38, deltaPercent:  -5.3 },
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.74, deltaPercent:   0   },
  { icp: 'icp-a', subSegment: 'adviser-passive', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ── ICP A · Responsible Investment ───────────────────────────────────────────
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'trigger',       status: 'green', conversionRate: 0.33, benchmark: 0.27, deltaPercent:  22.2 },
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'consideration', status: 'green', conversionRate: 0.22, benchmark: 0.22, deltaPercent:   0   },
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'evaluation',    status: 'green', conversionRate: 0.53, benchmark: 0.48, deltaPercent:  10.4 },
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'purchase',      status: 'green', conversionRate: 0.47, benchmark: 0.38, deltaPercent:  23.7 },
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'post-purchase', status: 'amber', conversionRate: 0.63, benchmark: 0.74, deltaPercent: -14.9 },
  { icp: 'icp-a', subSegment: 'adviser-responsible', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ── ICP B Aggregate ──────────────────────────────────────────────────────────
  { icp: 'icp-b', stage: 'trigger',       status: 'amber', conversionRate: 0.21, benchmark: 0.24, deltaPercent: -12.5 },
  { icp: 'icp-b', stage: 'consideration', status: 'green', conversionRate: 0.20, benchmark: 0.18, deltaPercent:  11.1 },
  { icp: 'icp-b', stage: 'evaluation',    status: 'amber', conversionRate: 0.36, benchmark: 0.41, deltaPercent: -12.2 },
  { icp: 'icp-b', stage: 'purchase',      status: 'red',   conversionRate: 0.24, benchmark: 0.35, deltaPercent: -31.4 },
  { icp: 'icp-b', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },

  // ── ICP B · Super Fund ────────────────────────────────────────────────────────
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'trigger',       status: 'green', conversionRate: 0.24, benchmark: 0.24, deltaPercent:   0   },
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'consideration', status: 'green', conversionRate: 0.22, benchmark: 0.18, deltaPercent:  22.2 },
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'evaluation',    status: 'red',   conversionRate: 0.30, benchmark: 0.41, deltaPercent: -26.8 },
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'purchase',      status: 'amber', conversionRate: 0.31, benchmark: 0.35, deltaPercent: -11.4 },
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', subSegment: 'institutional-super-fund', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },

  // ── ICP B · Family Office ────────────────────────────────────────────────────
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'trigger',       status: 'amber', conversionRate: 0.19, benchmark: 0.24, deltaPercent: -20.8 },
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'consideration', status: 'amber', conversionRate: 0.17, benchmark: 0.18, deltaPercent:  -5.6 },
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'evaluation',    status: 'green', conversionRate: 0.46, benchmark: 0.41, deltaPercent:  12.2 },
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'purchase',      status: 'red',   conversionRate: 0.19, benchmark: 0.35, deltaPercent: -45.7 },
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', subSegment: 'institutional-family-office', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },

  // ── ICP B · Endowment ────────────────────────────────────────────────────────
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'trigger',       status: 'amber', conversionRate: 0.22, benchmark: 0.24, deltaPercent:  -8.3 },
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'consideration', status: 'green', conversionRate: 0.23, benchmark: 0.18, deltaPercent:  27.8 },
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'evaluation',    status: 'amber', conversionRate: 0.37, benchmark: 0.41, deltaPercent:  -9.8 },
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'purchase',      status: 'red',   conversionRate: 0.24, benchmark: 0.35, deltaPercent: -31.4 },
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', subSegment: 'institutional-endowment', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },

  // ── ICP B · Corporate Treasury ───────────────────────────────────────────────
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'trigger',       status: 'amber', conversionRate: 0.20, benchmark: 0.24, deltaPercent: -16.7 },
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'consideration', status: 'amber', conversionRate: 0.17, benchmark: 0.18, deltaPercent:  -5.6 },
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'evaluation',    status: 'amber', conversionRate: 0.38, benchmark: 0.41, deltaPercent:  -7.3 },
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'purchase',      status: 'red',   conversionRate: 0.22, benchmark: 0.35, deltaPercent: -37.1 },
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', subSegment: 'institutional-corporate', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },
]
