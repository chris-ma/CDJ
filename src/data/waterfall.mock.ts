import type { WaterfallStage } from '@/types/metrics'
import type { ICP } from '@/types/cdj'

// Layer 2 — CDJ Waterfall
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)

const waterfallIcpA: WaterfallStage[] = [
  {
    stage: 'trigger',
    volume: 3840, volumeLabel: '3,840 adviser website sessions',
    conversionRate: 0.31, benchmark: 0.27,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'consideration',
    volume: 1190, volumeLabel: '1,190 engaged visits (fact sheets, PDS)',
    conversionRate: 0.19, benchmark: 0.22,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'evaluation',
    volume: 226, volumeLabel: '226 DDQ requests / due diligence enquiries',
    conversionRate: 0.37, benchmark: 0.48,
    ragStatus: 'red', connected: true,
  },
  {
    stage: 'purchase',
    volume: 84, volumeLabel: '84 mandates / 33 allocations confirmed',
    conversionRate: 0.40, benchmark: 0.38,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'post-purchase',
    volume: 33, volumeLabel: '33 onboarding sequences',
    conversionRate: null, benchmark: null,
    ragStatus: 'amber', connected: false,
  },
  {
    stage: 'loyalty-loop',
    volume: 9, volumeLabel: '9 additional allocations / referrals',
    conversionRate: null, benchmark: null,
    ragStatus: 'grey', connected: false,
  },
]

const waterfallIcpB: WaterfallStage[] = [
  {
    stage: 'trigger',
    volume: 1420, volumeLabel: '1,420 institutional website sessions',
    conversionRate: 0.21, benchmark: 0.24,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'consideration',
    volume: 298, volumeLabel: '298 engaged visits (IM downloads, webinars)',
    conversionRate: 0.20, benchmark: 0.18,
    ragStatus: 'green', connected: true,
  },
  {
    stage: 'evaluation',
    volume: 60, volumeLabel: '60 RFP / formal due diligence processes',
    conversionRate: 0.36, benchmark: 0.41,
    ragStatus: 'amber', connected: true,
  },
  {
    stage: 'purchase',
    volume: 22, volumeLabel: '22 mandates / 6 confirmed allocations',
    conversionRate: 0.24, benchmark: 0.35,
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
