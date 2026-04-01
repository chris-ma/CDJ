import type { ICPPipelineRow } from '@/types/pipeline'
import { pipelineData } from '@/data/pipeline.mock'

export function getPipelineData(): Promise<ICPPipelineRow[]> {
  return Promise.resolve(pipelineData)
}
