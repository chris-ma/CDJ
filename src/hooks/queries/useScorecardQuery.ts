import { useQuery } from '@tanstack/react-query'
import { getScorecardData } from '@/services/scorecard.service'
import type { ICP } from '@/types/cdj'

export function useScorecardQuery(icp: ICP) {
  return useQuery({
    queryKey: ['scorecard', icp],
    queryFn: () => getScorecardData(icp),
  })
}
