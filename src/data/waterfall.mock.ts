import type { WaterfallStage } from '@/types/metrics'
import type { ICP } from '@/types/cdj'

// Layer 2 — CDJ Waterfall data, keyed by ICP
// Numbers match spec §2.2 example table
const waterfallIcpA: WaterfallStage[] = [
  {
    stage: 'trigger',
    volume: 4200, volumeLabel: '4,200 organic sessions',
    conversionRate: 0.31, benchmark: 0.29,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'consideration',
    volume: 1302, volumeLabel: '1,302 engaged visits',
    conversionRate: 0.18, benchmark: 0.21,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'evaluation',
    volume: 234, volumeLabel: '234 MQLs',
    conversionRate: 0.41, benchmark: 0.53,
    ragStatus: 'red', connected: true,
  },
  {
    stage: 'purchase',
    volume: 96, volumeLabel: '96 SQLs / 38 Closed-Won',
    conversionRate: 0.41, benchmark: 0.40,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'post-purchase',
    volume: 38, volumeLabel: '38 onboarding sequences',
    conversionRate: null, benchmark: null,
    ragStatus: 'amber', connected: false,
  },
  {
    stage: 'loyalty-loop',
    volume: 11, volumeLabel: '11 re-engaged',
    conversionRate: null, benchmark: null,
    ragStatus: 'grey', connected: false,
  },
]

const waterfallIcpB: WaterfallStage[] = [
  {
    stage: 'trigger',
    volume: 1960, volumeLabel: '1,960 organic sessions',
    conversionRate: 0.23, benchmark: 0.27,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'consideration',
    volume: 451, volumeLabel: '451 engaged visits',
    conversionRate: 0.20, benchmark: 0.19,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'evaluation',
    volume: 90, volumeLabel: '90 MQLs',
    conversionRate: 0.38, benchmark: 0.44,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'purchase',
    volume: 34, volumeLabel: '34 SQLs / 11 Closed-Won',
    conversionRate: 0.28, benchmark: 0.38,
    ragStatus: 'red', connected: true,
  },
  {
    stage: 'post-purchase',
    volume: 0, volumeLabel: 'Not connected',
    conversionRate: null, benchmark: null,
    ragStatus: 'grey', connected: false,
  },
  {
    stage: 'loyalty-loop',
    volume: 0, volumeLabel: 'Not connected',
    conversionRate: null, benchmark: null,
    ragStatus: 'grey', connected: false,
  },
]

export const waterfallData: Record<Exclude<ICP, 'all'>, WaterfallStage[]> = {
  'icp-a': waterfallIcpA,
  'icp-b': waterfallIcpB,
}
