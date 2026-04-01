import type { WaterfallStage } from '@/types/metrics'
import type { ICP } from '@/types/cdj'
import { waterfallData } from '@/data/waterfall.mock'

export function getWaterfallData(icp: ICP): Promise<WaterfallStage[]> {
  if (icp === 'all') {
    // Merge ICP A + B by summing volumes and averaging conversion rates
    const a = waterfallData['icp-a']
    const b = waterfallData['icp-b']
    return Promise.resolve(a.map((stageA, i) => {
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
    }))
  }
  return Promise.resolve(waterfallData[icp])
}
