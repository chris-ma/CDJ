import { useQuery } from '@tanstack/react-query'
import { getPipelineData } from '@/services/pipeline.service'
import type { ICP, SubSegment } from '@/types/cdj'

export function usePipelineQuery(icp?: ICP, subSegment?: SubSegment | null) {
  return useQuery({
    queryKey: ['pipeline', icp ?? 'all', subSegment ?? null],
    queryFn: () => getPipelineData(icp, subSegment),
  })
}
