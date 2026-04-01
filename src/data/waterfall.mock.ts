import type { WaterfallStage } from '@/types/metrics'
import type { ICP, SubSegment } from '@/types/cdj'

// ── ICP A Aggregate (Advisers — all sub-segments) ────────────────────────────
const waterfallIcpA: WaterfallStage[] = [
  { stage: 'trigger',       volume: 3840, volumeLabel: '3,840 adviser website sessions',           conversionRate: 0.31, benchmark: 0.27, ragStatus: 'green', connected: true },
  { stage: 'consideration', volume: 1190, volumeLabel: '1,190 engaged visits (fact sheets, PDS)',  conversionRate: 0.19, benchmark: 0.22, ragStatus: 'amber', connected: true },
  { stage: 'evaluation',    volume: 226,  volumeLabel: '226 DDQ requests / due diligence enquiries', conversionRate: 0.37, benchmark: 0.48, ragStatus: 'red',   connected: true },
  { stage: 'purchase',      volume: 84,   volumeLabel: '84 mandates / 33 allocations confirmed',   conversionRate: 0.40, benchmark: 0.38, ragStatus: 'green', connected: true },
  { stage: 'post-purchase', volume: 33,   volumeLabel: '33 onboarding sequences',                  conversionRate: null, benchmark: null, ragStatus: 'amber', connected: false },
  { stage: 'loyalty-loop',  volume: 9,    volumeLabel: '9 additional allocations / referrals',     conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

// ── ICP A Sub-segments ────────────────────────────────────────────────────────
const waterfallIcpAPerformance: WaterfallStage[] = [
  { stage: 'trigger',       volume: 1540, volumeLabel: '1,540 performance-focused adviser sessions', conversionRate: 0.38, benchmark: 0.27, ragStatus: 'green', connected: true },
  { stage: 'consideration', volume: 585,  volumeLabel: '585 engaged visits (performance fact sheets)', conversionRate: 0.23, benchmark: 0.22, ragStatus: 'green', connected: true },
  { stage: 'evaluation',    volume: 134,  volumeLabel: '134 DDQ requests',                           conversionRate: 0.29, benchmark: 0.48, ragStatus: 'red',   connected: true },
  { stage: 'purchase',      volume: 39,   volumeLabel: '39 mandates confirmed',                      conversionRate: 0.43, benchmark: 0.38, ragStatus: 'green', connected: true },
  { stage: 'post-purchase', volume: 17,   volumeLabel: '17 onboarding sequences',                    conversionRate: null, benchmark: null, ragStatus: 'amber', connected: false },
  { stage: 'loyalty-loop',  volume: 5,    volumeLabel: '5 additional allocations',                   conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpABespoke: WaterfallStage[] = [
  { stage: 'trigger',       volume: 980,  volumeLabel: '980 bespoke solution adviser sessions',      conversionRate: 0.28, benchmark: 0.27, ragStatus: 'green', connected: true },
  { stage: 'consideration', volume: 274,  volumeLabel: '274 engaged visits (SMA / bespoke guides)',  conversionRate: 0.17, benchmark: 0.22, ragStatus: 'amber', connected: true },
  { stage: 'evaluation',    volume: 47,   volumeLabel: '47 DDQ / portfolio construction requests',   conversionRate: 0.44, benchmark: 0.48, ragStatus: 'amber', connected: true },
  { stage: 'purchase',      volume: 21,   volumeLabel: '21 bespoke mandates',                        conversionRate: 0.38, benchmark: 0.38, ragStatus: 'green', connected: true },
  { stage: 'post-purchase', volume: 8,    volumeLabel: '8 onboarding sequences',                     conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 2,    volumeLabel: '2 referrals',                                conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpAPassive: WaterfallStage[] = [
  { stage: 'trigger',       volume: 820,  volumeLabel: '820 passive strategy adviser sessions',      conversionRate: 0.25, benchmark: 0.27, ragStatus: 'amber', connected: true },
  { stage: 'consideration', volume: 205,  volumeLabel: '205 engaged visits (index fact sheets)',     conversionRate: 0.14, benchmark: 0.22, ragStatus: 'red',   connected: true },
  { stage: 'evaluation',    volume: 29,   volumeLabel: '29 due diligence enquiries',                 conversionRate: 0.48, benchmark: 0.48, ragStatus: 'green', connected: true },
  { stage: 'purchase',      volume: 14,   volumeLabel: '14 mandates confirmed',                      conversionRate: 0.36, benchmark: 0.38, ragStatus: 'amber', connected: true },
  { stage: 'post-purchase', volume: 5,    volumeLabel: '5 onboarding sequences',                     conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 1,    volumeLabel: '1 additional allocation',                    conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpAResponsible: WaterfallStage[] = [
  { stage: 'trigger',       volume: 500,  volumeLabel: '500 RI-focused adviser sessions',            conversionRate: 0.33, benchmark: 0.27, ragStatus: 'green', connected: true },
  { stage: 'consideration', volume: 165,  volumeLabel: '165 engaged visits (ESG materials)',         conversionRate: 0.22, benchmark: 0.22, ragStatus: 'green', connected: true },
  { stage: 'evaluation',    volume: 36,   volumeLabel: '36 RI due diligence enquiries',              conversionRate: 0.53, benchmark: 0.48, ragStatus: 'green', connected: true },
  { stage: 'purchase',      volume: 19,   volumeLabel: '19 RI mandates confirmed',                   conversionRate: 0.47, benchmark: 0.38, ragStatus: 'green', connected: true },
  { stage: 'post-purchase', volume: 9,    volumeLabel: '9 RI onboarding sequences',                  conversionRate: null, benchmark: null, ragStatus: 'amber', connected: false },
  { stage: 'loyalty-loop',  volume: 2,    volumeLabel: '2 RI referrals',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

// ── ICP B Aggregate (Institutional — all sub-segments) ───────────────────────
const waterfallIcpB: WaterfallStage[] = [
  { stage: 'trigger',       volume: 1420, volumeLabel: '1,420 institutional website sessions',       conversionRate: 0.21, benchmark: 0.24, ragStatus: 'amber', connected: true },
  { stage: 'consideration', volume: 298,  volumeLabel: '298 engaged visits (IM downloads, webinars)', conversionRate: 0.20, benchmark: 0.18, ragStatus: 'green', connected: true },
  { stage: 'evaluation',    volume: 60,   volumeLabel: '60 RFP / formal due diligence processes',   conversionRate: 0.36, benchmark: 0.41, ragStatus: 'amber', connected: true },
  { stage: 'purchase',      volume: 22,   volumeLabel: '22 mandates / 6 confirmed allocations',     conversionRate: 0.24, benchmark: 0.35, ragStatus: 'red',   connected: true },
  { stage: 'post-purchase', volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

// ── ICP B Sub-segments ────────────────────────────────────────────────────────
const waterfallIcpBSuperFund: WaterfallStage[] = [
  { stage: 'trigger',       volume: 620,  volumeLabel: '620 super fund website sessions',            conversionRate: 0.24, benchmark: 0.24, ragStatus: 'green', connected: true },
  { stage: 'consideration', volume: 149,  volumeLabel: '149 engaged visits (IM, webinars)',          conversionRate: 0.22, benchmark: 0.18, ragStatus: 'green', connected: true },
  { stage: 'evaluation',    volume: 33,   volumeLabel: '33 RFP processes initiated',                 conversionRate: 0.30, benchmark: 0.41, ragStatus: 'red',   connected: true },
  { stage: 'purchase',      volume: 10,   volumeLabel: '10 mandates confirmed',                      conversionRate: 0.31, benchmark: 0.35, ragStatus: 'amber', connected: true },
  { stage: 'post-purchase', volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpBFamilyOffice: WaterfallStage[] = [
  { stage: 'trigger',       volume: 410,  volumeLabel: '410 family office website sessions',         conversionRate: 0.19, benchmark: 0.24, ragStatus: 'amber', connected: true },
  { stage: 'consideration', volume: 78,   volumeLabel: '78 engaged visits (bespoke IM)',             conversionRate: 0.17, benchmark: 0.18, ragStatus: 'amber', connected: true },
  { stage: 'evaluation',    volume: 13,   volumeLabel: '13 formal due diligence processes',          conversionRate: 0.46, benchmark: 0.41, ragStatus: 'green', connected: true },
  { stage: 'purchase',      volume: 6,    volumeLabel: '6 mandates confirmed',                       conversionRate: 0.19, benchmark: 0.35, ragStatus: 'red',   connected: true },
  { stage: 'post-purchase', volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpBEndowment: WaterfallStage[] = [
  { stage: 'trigger',       volume: 215,  volumeLabel: '215 endowment/foundation website sessions',  conversionRate: 0.22, benchmark: 0.24, ragStatus: 'amber', connected: true },
  { stage: 'consideration', volume: 47,   volumeLabel: '47 engaged visits (ESG, impact content)',    conversionRate: 0.23, benchmark: 0.18, ragStatus: 'green', connected: true },
  { stage: 'evaluation',    volume: 11,   volumeLabel: '11 RFP / due diligence processes',           conversionRate: 0.37, benchmark: 0.41, ragStatus: 'amber', connected: true },
  { stage: 'purchase',      volume: 4,    volumeLabel: '4 mandates confirmed',                       conversionRate: 0.24, benchmark: 0.35, ragStatus: 'red',   connected: true },
  { stage: 'post-purchase', volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

const waterfallIcpBCorporate: WaterfallStage[] = [
  { stage: 'trigger',       volume: 175,  volumeLabel: '175 corporate treasury website sessions',    conversionRate: 0.20, benchmark: 0.24, ragStatus: 'amber', connected: true },
  { stage: 'consideration', volume: 35,   volumeLabel: '35 engaged visits (liquidity strategies)',   conversionRate: 0.17, benchmark: 0.18, ragStatus: 'amber', connected: true },
  { stage: 'evaluation',    volume: 6,    volumeLabel: '6 RFP processes',                           conversionRate: 0.38, benchmark: 0.41, ragStatus: 'amber', connected: true },
  { stage: 'purchase',      volume: 2,    volumeLabel: '2 mandates confirmed',                       conversionRate: 0.22, benchmark: 0.35, ragStatus: 'red',   connected: true },
  { stage: 'post-purchase', volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
  { stage: 'loyalty-loop',  volume: 0,    volumeLabel: 'Not connected',                             conversionRate: null, benchmark: null, ragStatus: 'grey',  connected: false },
]

export const waterfallData: Record<Exclude<ICP, 'all'>, Record<SubSegment | 'all', WaterfallStage[]>> = {
  'icp-a': {
    'all':                    waterfallIcpA,
    'adviser-performance':    waterfallIcpAPerformance,
    'adviser-bespoke':        waterfallIcpABespoke,
    'adviser-passive':        waterfallIcpAPassive,
    'adviser-responsible':    waterfallIcpAResponsible,
    // ICP B sub-segments not applicable here but required by type — fall back to aggregate
    'institutional-super-fund':    waterfallIcpA,
    'institutional-family-office': waterfallIcpA,
    'institutional-endowment':     waterfallIcpA,
    'institutional-corporate':     waterfallIcpA,
  },
  'icp-b': {
    'all':                         waterfallIcpB,
    'institutional-super-fund':    waterfallIcpBSuperFund,
    'institutional-family-office': waterfallIcpBFamilyOffice,
    'institutional-endowment':     waterfallIcpBEndowment,
    'institutional-corporate':     waterfallIcpBCorporate,
    // ICP A sub-segments not applicable here
    'adviser-performance':    waterfallIcpB,
    'adviser-bespoke':        waterfallIcpB,
    'adviser-passive':        waterfallIcpB,
    'adviser-responsible':    waterfallIcpB,
  },
}
