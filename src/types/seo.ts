import type { CDJStage, ICP, RAGStatus } from './cdj'

export type GapStatus = 'critical' | 'weak' | 'strong' | 'blind-spot'
export type IntentType = 'problem-aware' | 'category-aware' | 'solution-aware' | 'decision' | 'retention'

export interface KeywordRow {
  id: string
  stage: CDJStage
  intentType: IntentType
  exampleQuery: string
  rank: number | null          // null = not ranking
  gapStatus: GapStatus
  ragStatus: RAGStatus
  icp: ICP
  rankHistory: (number | null)[] // 6-week rank history (most recent last)
}
