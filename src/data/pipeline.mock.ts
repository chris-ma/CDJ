import type { ICPPipelineRow } from '@/types/pipeline'

// Panel C — ICP Pipeline Balance
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)
export const pipelineData: ICPPipelineRow[] = [
  {
    icp: 'icp-a',
    triggerShare: 73,
    mqlShare: 79,
    closedWonShare: 85,
    revenueShare: 61,
    signal: 'high-quality',
    ragStatus: 'green',
  },
  {
    icp: 'icp-b',
    triggerShare: 27,
    mqlShare: 21,
    closedWonShare: 15,
    revenueShare: 39,
    signal: 'volume-gap',
    ragStatus: 'red',
  },
]
