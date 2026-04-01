import type { ICPPipelineRow } from '@/types/pipeline'

// Panel C — ICP Pipeline Balance
// Matches spec §2.3 Panel C example
export const pipelineData: ICPPipelineRow[] = [
  {
    icp: 'icp-a',
    triggerShare: 68,
    mqlShare: 71,
    closedWonShare: 52,
    revenueShare: 74,
    signal: 'high-quality',
    ragStatus: 'green',
  },
  {
    icp: 'icp-b',
    triggerShare: 32,
    mqlShare: 29,
    closedWonShare: 48,
    revenueShare: 26,
    signal: 'volume-gap',
    ragStatus: 'red',
  },
]
