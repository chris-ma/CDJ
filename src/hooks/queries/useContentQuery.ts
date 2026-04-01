import { useQuery } from '@tanstack/react-query'
import { getContentData } from '@/services/content.service'
import type { ICP, CDJStage, SubSegment } from '@/types/cdj'

export function useContentQuery(icp: ICP, stage?: CDJStage, subSegment?: SubSegment | null) {
  return useQuery({
    queryKey: ['content', icp, stage ?? null, subSegment ?? null],
    queryFn: () => getContentData(icp, stage, subSegment),
  })
}
