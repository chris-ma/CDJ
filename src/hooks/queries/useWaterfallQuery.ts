import { useQuery } from '@tanstack/react-query'
import { getWaterfallData } from '@/services/waterfall.service'
import type { ICP, SubSegment } from '@/types/cdj'

export function useWaterfallQuery(icp: ICP, subSegment?: SubSegment | null) {
  return useQuery({
    queryKey: ['waterfall', icp, subSegment ?? null],
    queryFn: () => getWaterfallData(icp, subSegment),
  })
}
