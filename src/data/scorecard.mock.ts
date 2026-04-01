import type { ScorecardCell } from '@/types/metrics'

// Layer 1 — Exec Scorecard
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)
export const scorecardData: ScorecardCell[] = [
  // ICP A — Advisers
  { icp: 'icp-a', stage: 'trigger',       status: 'green', conversionRate: 0.31, benchmark: 0.27, deltaPercent:  14.8 },
  { icp: 'icp-a', stage: 'consideration', status: 'amber', conversionRate: 0.19, benchmark: 0.22, deltaPercent: -13.6 },
  { icp: 'icp-a', stage: 'evaluation',    status: 'red',   conversionRate: 0.37, benchmark: 0.48, deltaPercent: -22.9 },
  { icp: 'icp-a', stage: 'purchase',      status: 'green', conversionRate: 0.40, benchmark: 0.38, deltaPercent:   5.3 },
  { icp: 'icp-a', stage: 'post-purchase', status: 'amber', conversionRate: 0.63, benchmark: 0.74, deltaPercent: -14.9 },
  { icp: 'icp-a', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.33, deltaPercent:   0   },

  // ICP B — Institutional
  { icp: 'icp-b', stage: 'trigger',       status: 'amber', conversionRate: 0.21, benchmark: 0.24, deltaPercent: -12.5 },
  { icp: 'icp-b', stage: 'consideration', status: 'green', conversionRate: 0.20, benchmark: 0.18, deltaPercent:  11.1 },
  { icp: 'icp-b', stage: 'evaluation',    status: 'amber', conversionRate: 0.36, benchmark: 0.41, deltaPercent: -12.2 },
  { icp: 'icp-b', stage: 'purchase',      status: 'red',   conversionRate: 0.24, benchmark: 0.35, deltaPercent: -31.4 },
  { icp: 'icp-b', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.70, deltaPercent:   0   },
  { icp: 'icp-b', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.28, deltaPercent:   0   },
]
