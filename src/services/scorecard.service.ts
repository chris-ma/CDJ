import type { ScorecardCell } from '@/types/metrics'
import type { ICP } from '@/types/cdj'
import { scorecardData } from '@/data/scorecard.mock'

export function getScorecardData(icp: ICP): ScorecardCell[] {
  if (icp === 'all') return scorecardData
  return scorecardData.filter(cell => cell.icp === icp)
}
