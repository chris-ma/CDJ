import type { ScorecardCell } from '@/types/metrics'
import type { ICP } from '@/types/cdj'
import { scorecardData } from '@/data/scorecard.mock'

export function getScorecardData(icp: ICP): Promise<ScorecardCell[]> {
  if (icp === 'all') return Promise.resolve(scorecardData)
  return Promise.resolve(scorecardData.filter(cell => cell.icp === icp))
}
