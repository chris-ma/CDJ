import type { CDJStage, ICP, RAGStatus } from './cdj'

export interface ScorecardCell {
  icp: ICP
  stage: CDJStage
  status: RAGStatus
  conversionRate: number
  benchmark: number
  deltaPercent: number
}

export interface WaterfallStage {
  stage: CDJStage
  volume: number
  volumeLabel: string
  conversionRate: number | null  // null = not applicable (last stage)
  benchmark: number | null
  ragStatus: RAGStatus
  connected: boolean             // false = Phase 4 blind spot
}

export interface BenchmarkMap {
  [key: string]: number          // `${icp}:${stage}` → benchmark conv rate
}
