export type CDJStage =
  | 'trigger'
  | 'consideration'
  | 'evaluation'
  | 'purchase'
  | 'post-purchase'
  | 'loyalty-loop'

export type RAGStatus = 'green' | 'amber' | 'red' | 'grey'

export type ICP = 'icp-a' | 'icp-b' | 'all'

export type SubSegment =
  | 'adviser-performance'
  | 'adviser-bespoke'
  | 'adviser-passive'
  | 'adviser-responsible'
  | 'institutional-super-fund'
  | 'institutional-family-office'
  | 'institutional-endowment'
  | 'institutional-corporate'

export const ICP_SUB_SEGMENTS: Record<Exclude<ICP, 'all'>, SubSegment[]> = {
  'icp-a': ['adviser-performance', 'adviser-bespoke', 'adviser-passive', 'adviser-responsible'],
  'icp-b': ['institutional-super-fund', 'institutional-family-office', 'institutional-endowment', 'institutional-corporate'],
}

export const SUB_SEGMENT_LABELS: Record<SubSegment, string> = {
  'adviser-performance':         'Performance',
  'adviser-bespoke':             'Bespoke Solution',
  'adviser-passive':             'Passive / Index',
  'adviser-responsible':         'Responsible Investment',
  'institutional-super-fund':    'Super Fund',
  'institutional-family-office': 'Family Office',
  'institutional-endowment':     'Endowment',
  'institutional-corporate':     'Corporate Treasury',
}

export const CDJ_STAGE_LABELS: Record<CDJStage, string> = {
  trigger: 'Trigger',
  consideration: 'Shortlisting',
  evaluation: 'Due Diligence',
  purchase: 'Mandate',
  'post-purchase': 'Onboarding',
  'loyalty-loop': 'Growth & Advocacy',
}

export const ICP_LABELS: Record<ICP, string> = {
  'icp-a': 'Advisers',
  'icp-b': 'Institutional',
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
