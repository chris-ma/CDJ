import type { ScorecardCell } from '@/types/metrics'
import type { ICP, SubSegment } from '@/types/cdj'
import { scorecardData } from '@/data/scorecard.mock'

export function getScorecardData(icp: ICP, subSegment?: SubSegment | null): Promise<ScorecardCell[]> {
  let results = icp === 'all' ? scorecardData : scorecardData.filter(c => c.icp === icp)
  if (subSegment) {
    results = results.filter(c => c.subSegment === subSegment)
  } else {
    // null sub-segment = aggregate rows only (no subSegment field)
    results = results.filter(c => !c.subSegment)
  }
  return Promise.resolve(results)
}
