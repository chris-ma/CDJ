import type { CDJStage, ICP, RAGStatus, SubSegment } from './cdj'

export type VelocitySignal = 'stall' | 'accelerator' | 'blind-spot' | 'neutral'

export interface ContentAsset {
  id: string
  name: string
  stage: CDJStage
  icp: ICP
  velocityDeltaDays: number | null  // positive = slower (stall), negative = faster (accelerator)
  signal: VelocitySignal
  ragStatus: RAGStatus
  leadCount: number
  subSegment?: SubSegment
}
