import type { ScorecardCell } from '@/types/metrics'

// Layer 1 — Exec Scorecard data
// Matches spec §2.1 example: ICP A Red at Evaluation, ICP B Red at Purchase
export const scorecardData: ScorecardCell[] = [
  // ICP A
  { icp: 'icp-a', stage: 'trigger',       status: 'green', conversionRate: 0.31, benchmark: 0.29, deltaPercent:  6.9  },
  { icp: 'icp-a', stage: 'consideration', status: 'amber', conversionRate: 0.18, benchmark: 0.21, deltaPercent: -14.3 },
  { icp: 'icp-a', stage: 'evaluation',    status: 'red',   conversionRate: 0.41, benchmark: 0.53, deltaPercent: -22.6 },
  { icp: 'icp-a', stage: 'purchase',      status: 'green', conversionRate: 0.41, benchmark: 0.40, deltaPercent:  2.5  },
  { icp: 'icp-a', stage: 'post-purchase', status: 'amber', conversionRate: 0.61, benchmark: 0.72, deltaPercent: -15.3 },
  { icp: 'icp-a', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.35, deltaPercent:  0    },

  // ICP B
  { icp: 'icp-b', stage: 'trigger',       status: 'amber', conversionRate: 0.23, benchmark: 0.27, deltaPercent: -14.8 },
  { icp: 'icp-b', stage: 'consideration', status: 'green', conversionRate: 0.20, benchmark: 0.19, deltaPercent:  5.3  },
  { icp: 'icp-b', stage: 'evaluation',    status: 'amber', conversionRate: 0.38, benchmark: 0.44, deltaPercent: -13.6 },
  { icp: 'icp-b', stage: 'purchase',      status: 'red',   conversionRate: 0.28, benchmark: 0.38, deltaPercent: -26.3 },
  { icp: 'icp-b', stage: 'post-purchase', status: 'grey',  conversionRate: 0.00, benchmark: 0.68, deltaPercent:  0    },
  { icp: 'icp-b', stage: 'loyalty-loop',  status: 'grey',  conversionRate: 0.00, benchmark: 0.30, deltaPercent:  0    },
]
