import type { ICPPipelineRow } from '@/types/pipeline'

// Panel C — ICP Pipeline Balance
// Rows without subSegment = ICP-level aggregates
// Rows with subSegment = sub-segment drill-down
export const pipelineData: ICPPipelineRow[] = [

  // ── ICP A Aggregate ───────────────────────────────────────────────────────────
  { icp: 'icp-a', triggerShare: 73, mqlShare: 79, closedWonShare: 85, revenueShare: 61, signal: 'high-quality', ragStatus: 'green' },

  // ── ICP A Sub-segments ────────────────────────────────────────────────────────
  { icp: 'icp-a', subSegment: 'adviser-performance',  triggerShare: 40, mqlShare: 47, closedWonShare: 55, revenueShare: 38, signal: 'high-quality', ragStatus: 'green' },
  { icp: 'icp-a', subSegment: 'adviser-bespoke',       triggerShare: 25, mqlShare: 21, closedWonShare: 18, revenueShare: 14, signal: 'volume-gap',   ragStatus: 'red'   },
  { icp: 'icp-a', subSegment: 'adviser-passive',        triggerShare: 21, mqlShare: 18, closedWonShare: 16, revenueShare: 12, signal: 'volume-gap',   ragStatus: 'amber' },
  { icp: 'icp-a', subSegment: 'adviser-responsible',    triggerShare: 14, mqlShare: 14, closedWonShare: 11, revenueShare: 13, signal: 'balanced',     ragStatus: 'green' },

  // ── ICP B Aggregate ───────────────────────────────────────────────────────────
  { icp: 'icp-b', triggerShare: 27, mqlShare: 21, closedWonShare: 15, revenueShare: 39, signal: 'volume-gap', ragStatus: 'red' },

  // ── ICP B Sub-segments ────────────────────────────────────────────────────────
  { icp: 'icp-b', subSegment: 'institutional-super-fund',    triggerShare: 44, mqlShare: 38, closedWonShare: 32, revenueShare: 51, signal: 'high-quality', ragStatus: 'green' },
  { icp: 'icp-b', subSegment: 'institutional-family-office', triggerShare: 29, mqlShare: 22, closedWonShare: 18, revenueShare: 26, signal: 'volume-gap',   ragStatus: 'amber' },
  { icp: 'icp-b', subSegment: 'institutional-endowment',     triggerShare: 15, mqlShare: 24, closedWonShare: 29, revenueShare: 15, signal: 'balanced',     ragStatus: 'green' },
  { icp: 'icp-b', subSegment: 'institutional-corporate',     triggerShare: 12, mqlShare: 16, closedWonShare: 21, revenueShare: 8,  signal: 'volume-gap',   ragStatus: 'red'   },
]
