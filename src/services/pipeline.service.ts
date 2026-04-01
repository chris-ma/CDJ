import type { ICPPipelineRow } from '@/types/pipeline'
import type { ICP, SubSegment } from '@/types/cdj'
import { pipelineData } from '@/data/pipeline.mock'

export function getPipelineData(icp?: ICP, subSegment?: SubSegment | null): Promise<ICPPipelineRow[]> {
  let results = pipelineData
  if (icp && icp !== 'all') results = results.filter(r => r.icp === icp)
  if (subSegment) {
    results = results.filter(r => r.subSegment === subSegment)
  } else {
    // null sub-segment = aggregate rows only (no subSegment field)
    results = results.filter(r => !r.subSegment)
  }
  return Promise.resolve(results)
}
