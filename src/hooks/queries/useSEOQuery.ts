import { useQuery } from '@tanstack/react-query'
import { getSEOData } from '@/services/seo.service'
import type { ICP, CDJStage, SubSegment } from '@/types/cdj'

export function useSEOQuery(icp: ICP, stage?: CDJStage, subSegment?: SubSegment | null) {
  return useQuery({
    queryKey: ['seo', icp, stage ?? null, subSegment ?? null],
    queryFn: () => getSEOData(icp, stage, subSegment),
  })
}
