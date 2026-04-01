import type { ICP, RAGStatus, SubSegment } from './cdj'

export type ImbalanceSignal = 'high-quality' | 'volume-gap' | 'balanced'

export interface ICPPipelineRow {
  icp: Exclude<ICP, 'all'>
  triggerShare: number       // percentage 0–100
  mqlShare: number
  closedWonShare: number
  revenueShare: number
  signal: ImbalanceSignal
  ragStatus: RAGStatus
  subSegment?: SubSegment
}
