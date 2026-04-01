import type { ContentAsset } from '@/types/content'
import type { ICP, CDJStage } from '@/types/cdj'
import { contentData } from '@/data/content.mock'

export function getContentData(icp: ICP, stage?: CDJStage): ContentAsset[] {
  let results = icp === 'all' ? contentData : contentData.filter(a => a.icp === icp)
  if (stage) results = results.filter(a => a.stage === stage)
  return results
}
