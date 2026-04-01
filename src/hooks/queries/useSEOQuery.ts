import { useQuery } from '@tanstack/react-query'
import { getSEOData } from '@/services/seo.service'
import type { ICP, CDJStage } from '@/types/cdj'

export function useSEOQuery(icp: ICP, stage?: CDJStage) {
  return useQuery({
    queryKey: ['seo', icp, stage ?? null],
    queryFn: () => getSEOData(icp, stage),
  })
}
