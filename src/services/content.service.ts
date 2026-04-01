import type { ContentAsset } from '@/types/content'
import type { ICP, CDJStage, SubSegment } from '@/types/cdj'
import { contentData } from '@/data/content.mock'

export function getContentData(icp: ICP, stage?: CDJStage, subSegment?: SubSegment | null): Promise<ContentAsset[]> {
  let results = icp === 'all' ? contentData : contentData.filter(a => a.icp === icp)
  if (stage) results = results.filter(a => a.stage === stage)
  if (subSegment) results = results.filter(a => a.subSegment === subSegment)
  return Promise.resolve(results)
}
