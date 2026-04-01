import type { KeywordRow } from '@/types/seo'
import type { ICP, CDJStage, SubSegment } from '@/types/cdj'
import { seoData } from '@/data/seo.mock'

export function getSEOData(icp: ICP, stage?: CDJStage, subSegment?: SubSegment | null): Promise<KeywordRow[]> {
  let results = icp === 'all' ? seoData : seoData.filter(r => r.icp === icp)
  if (stage) results = results.filter(r => r.stage === stage)
  if (subSegment) results = results.filter(r => r.subSegment === subSegment)
  return Promise.resolve(results)
}
