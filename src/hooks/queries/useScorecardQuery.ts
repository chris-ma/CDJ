import { useQuery } from '@tanstack/react-query'
import { getScorecardData } from '@/services/scorecard.service'
import type { ICP, SubSegment } from '@/types/cdj'

export function useScorecardQuery(icp: ICP, subSegment?: SubSegment | null) {
  return useQuery({
    queryKey: ['scorecard', icp, subSegment ?? null],
    queryFn: () => getScorecardData(icp, subSegment),
  })
}
