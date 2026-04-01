import type { WaterfallStage } from '@/types/metrics'
import type { ICP, SubSegment } from '@/types/cdj'
import { waterfallData } from '@/data/waterfall.mock'

function mergeWaterfallStages(a: WaterfallStage[], b: WaterfallStage[]): WaterfallStage[] {
  return a.map((stageA, i) => {
    const stageB = b[i]
    const combinedVolume = stageA.volume + stageB.volume
    const combinedConvRate = stageA.conversionRate !== null && stageB.conversionRate !== null
      ? (stageA.conversionRate + stageB.conversionRate) / 2
      : stageA.conversionRate ?? stageB.conversionRate
    const combinedBenchmark = stageA.benchmark !== null && stageB.benchmark !== null
      ? (stageA.benchmark + stageB.benchmark) / 2
      : stageA.benchmark ?? stageB.benchmark
    return {
      ...stageA,
      volume: combinedVolume,
      volumeLabel: combinedVolume.toLocaleString(),
      conversionRate: combinedConvRate,
      benchmark: combinedBenchmark,
      connected: stageA.connected && stageB.connected,
    }
  })
}

export function getWaterfallData(icp: ICP, subSegment?: SubSegment | null): Promise<WaterfallStage[]> {
  if (icp === 'all') {
    // Merge ICP A + B aggregates — never filtered by sub-segment
    return Promise.resolve(mergeWaterfallStages(waterfallData['icp-a']['all'], waterfallData['icp-b']['all']))
  }
  const key = subSegment ?? 'all'
  return Promise.resolve(waterfallData[icp][key] ?? waterfallData[icp]['all'])
}
