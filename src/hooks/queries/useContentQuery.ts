import { useQuery } from '@tanstack/react-query'
import { getContentData } from '@/services/content.service'
import type { ICP, CDJStage } from '@/types/cdj'

export function useContentQuery(icp: ICP, stage?: CDJStage) {
  return useQuery({
    queryKey: ['content', icp, stage ?? null],
    queryFn: () => getContentData(icp, stage),
  })
}
