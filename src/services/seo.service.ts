import type { KeywordRow } from '@/types/seo'
import type { ICP, CDJStage } from '@/types/cdj'
import { seoData } from '@/data/seo.mock'

export function getSEOData(icp: ICP, stage?: CDJStage): Promise<KeywordRow[]> {
  let results = icp === 'all' ? seoData : seoData.filter(r => r.icp === icp)
  if (stage) results = results.filter(r => r.stage === stage)
  return Promise.resolve(results)
}
