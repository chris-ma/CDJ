import { useQuery } from '@tanstack/react-query'
import { getWaterfallData } from '@/services/waterfall.service'
import type { ICP } from '@/types/cdj'

export function useWaterfallQuery(icp: ICP) {
  return useQuery({
    queryKey: ['waterfall', icp],
    queryFn: () => getWaterfallData(icp),
  })
}
