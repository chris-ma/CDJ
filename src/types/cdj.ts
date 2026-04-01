export type CDJStage =
  | 'trigger'
  | 'consideration'
  | 'evaluation'
  | 'purchase'
  | 'post-purchase'
  | 'loyalty-loop'

export type RAGStatus = 'green' | 'amber' | 'red' | 'grey'

export type ICP = 'icp-a' | 'icp-b' | 'all'

export const CDJ_STAGE_LABELS: Record<CDJStage, string> = {
  trigger: 'Trigger',
  consideration: 'Consideration',
  evaluation: 'Evaluation',
  purchase: 'Purchase',
  'post-purchase': 'Post-Purchase',
  'loyalty-loop': 'Loyalty Loop',
}

export const ICP_LABELS: Record<ICP, string> = {
  'icp-a': 'ICP A',
  'icp-b': 'ICP B',
  all: 'All',
}

export const ALL_STAGES: CDJStage[] = [
  'trigger',
  'consideration',
  'evaluation',
  'purchase',
  'post-purchase',
  'loyalty-loop',
]

export const RAG_STATUS_LABELS: Record<RAGStatus, string> = {
  green: 'GREEN',
  amber: 'AMBER',
  red: 'RED',
  grey: 'N/A',
}

export interface Alert {
  id: string
  type: 'stage-drop-off' | 'content-stall' | 'icp-imbalance' | 'seo-gap'
  severity: 'red' | 'amber'
  icp: ICP
  stage?: CDJStage
  headline: string
  diagnosis: string
  drillDownPath: string
}
