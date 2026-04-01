import type { Alert, CDJStage, ICP } from '@/types/cdj'
import type { WaterfallStage } from '@/types/metrics'
import type { ContentAsset } from '@/types/content'
import type { KeywordRow } from '@/types/seo'
import type { ICPPipelineRow } from '@/types/pipeline'
import { CDJ_STAGE_LABELS } from '@/types/cdj'

/** Stage Drop-Off Flag — conv rate > 15% below benchmark (spec §4) */
function stageDropOffAlerts(
  stages: WaterfallStage[],
  icp: Exclude<ICP, 'all'>,
): Alert[] {
  return stages
    .filter(s => s.conversionRate !== null && s.benchmark !== null && s.connected)
    .filter(s => {
      const delta = (s.conversionRate! - s.benchmark!) / s.benchmark!
      return delta < -0.15
    })
    .map(s => {
      const deltaPercent = Math.round(((s.conversionRate! - s.benchmark!) / s.benchmark!) * 100)
      return {
        id: `drop-off:${icp}:${s.stage}`,
        type: 'stage-drop-off' as const,
        severity: 'red' as const,
        icp,
        stage: s.stage as CDJStage,
        headline: `${CDJ_STAGE_LABELS[s.stage as CDJStage]} stage is underperforming`,
        diagnosis: `${icp === 'icp-a' ? 'ICP A' : 'ICP B'} conversion at ${CDJ_STAGE_LABELS[s.stage as CDJStage]} is ${Math.abs(deltaPercent)}% below the 90-day benchmark.`,
        drillDownPath: `/diagnostics/content?icp=${icp}&stage=${s.stage}`,
      }
    })
}

/** Content Stall Alert — asset leads >2 days slower than baseline (spec §4) */
function contentStallAlerts(assets: ContentAsset[]): Alert[] {
  return assets
    .filter(a => a.velocityDeltaDays !== null && a.velocityDeltaDays > 2)
    .map(a => ({
      id: `content-stall:${a.id}`,
      type: 'content-stall' as const,
      severity: a.velocityDeltaDays! > 3 ? ('red' as const) : ('amber' as const),
      icp: a.icp,
      stage: a.stage,
      headline: `"${a.name}" is stalling leads`,
      diagnosis: `Leads engaging with "${a.name}" are progressing ${a.velocityDeltaDays!.toFixed(1)} days slower than the baseline average.`,
      drillDownPath: `/diagnostics/content?icp=${a.icp}&stage=${a.stage}`,
    }))
}

/** ICP Imbalance Signal — |closedWonShare − mqlShare| > 20pp (spec §4) */
function icpImbalanceAlerts(rows: ICPPipelineRow[]): Alert[] {
  return rows
    .filter(r => Math.abs(r.closedWonShare - r.mqlShare) > 20)
    .map(r => {
      const gap = r.closedWonShare - r.mqlShare
      const isQualityStrong = gap > 0
      return {
        id: `imbalance:${r.icp}`,
        type: 'icp-imbalance' as const,
        severity: 'amber' as const,
        icp: r.icp,
        headline: `${r.icp === 'icp-a' ? 'ICP A' : 'ICP B'} pipeline imbalance detected`,
        diagnosis: isQualityStrong
          ? `${r.icp === 'icp-a' ? 'ICP A' : 'ICP B'} quality is strong — revenue share exceeds MQL share by ${Math.abs(gap)}pp. Invest in top-of-funnel volume.`
          : `${r.icp === 'icp-a' ? 'ICP A' : 'ICP B'} revenue share is ${Math.abs(gap)}pp below MQL share. Review qualification criteria or sales handoff.`,
        drillDownPath: `/diagnostics/pipeline?icp=${r.icp}`,
      }
    })
}

/** SEO Gap Flag — rank > 10 or null for any CDJ intent tier (spec §4) */
function seoGapAlerts(keywords: KeywordRow[]): Alert[] {
  return keywords
    .filter(k => k.rank === null || k.rank > 10)
    .filter(k => k.gapStatus !== 'blind-spot') // blind-spots are expected gaps, not fired alerts
    .map(k => ({
      id: `seo-gap:${k.id}`,
      type: 'seo-gap' as const,
      severity: k.rank === null ? ('red' as const) : ('amber' as const),
      icp: k.icp,
      stage: k.stage,
      headline: `SEO gap at ${CDJ_STAGE_LABELS[k.stage]} stage`,
      diagnosis: k.rank === null
        ? `Not ranking for "${k.exampleQuery}" — no visibility at the ${CDJ_STAGE_LABELS[k.stage]} intent tier for ${k.icp === 'icp-a' ? 'ICP A' : 'ICP B'}.`
        : `Ranking #${k.rank} for "${k.exampleQuery}" — outside top 10 at the ${CDJ_STAGE_LABELS[k.stage]} intent tier.`,
      drillDownPath: `/diagnostics/seo?icp=${k.icp}&stage=${k.stage}`,
    }))
}

export interface AlertGeneratorInput {
  waterfallIcpA: WaterfallStage[]
  waterfallIcpB: WaterfallStage[]
  contentAssets: ContentAsset[]
  keywords: KeywordRow[]
  pipelineRows: ICPPipelineRow[]
}

export function generateAlerts(input: AlertGeneratorInput): Alert[] {
  const alerts: Alert[] = [
    ...stageDropOffAlerts(input.waterfallIcpA, 'icp-a'),
    ...stageDropOffAlerts(input.waterfallIcpB, 'icp-b'),
    ...contentStallAlerts(input.contentAssets),
    ...icpImbalanceAlerts(input.pipelineRows),
    ...seoGapAlerts(input.keywords),
  ]

  // Deduplicate and sort: red first, then amber
  const seen = new Set<string>()
  return alerts
    .filter(a => {
      if (seen.has(a.id)) return false
      seen.add(a.id)
      return true
    })
    .sort((a, b) => (a.severity === 'red' ? -1 : 1) - (b.severity === 'red' ? -1 : 1))
}

/** Returns the single highest-severity alert for the Layer 1 auto-callout */
export function getTopAlert(alerts: Alert[]): Alert | null {
  return alerts.find(a => a.severity === 'red') ?? alerts[0] ?? null
}
