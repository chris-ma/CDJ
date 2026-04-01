import { describe, it, expect } from 'vitest'
import { generateAlerts, getTopAlert } from './alerts'
import type { WaterfallStage } from '@/types/metrics'
import type { ContentAsset } from '@/types/content'
import type { KeywordRow } from '@/types/seo'
import type { ICPPipelineRow } from '@/types/pipeline'

const baseStage: WaterfallStage = {
  stage: 'evaluation', volume: 100, volumeLabel: '100 MQLs',
  conversionRate: 0.50, benchmark: 0.50, ragStatus: 'green', connected: true,
}

const baseContent: ContentAsset = {
  id: 'c1', name: 'Guide', stage: 'evaluation', icp: 'icp-a',
  velocityDeltaDays: 0, signal: 'neutral', ragStatus: 'green', leadCount: 20,
}

const baseKeyword: KeywordRow = {
  id: 'k1', stage: 'trigger', intentType: 'problem-aware',
  exampleQuery: 'why is X happening', rank: 5,
  gapStatus: 'strong', ragStatus: 'green', icp: 'icp-a',
  rankHistory: [5, 5, 5, 5, 5, 5],
}

const basePipeline: ICPPipelineRow = {
  icp: 'icp-a', triggerShare: 50, mqlShare: 50,
  closedWonShare: 50, revenueShare: 50,
  signal: 'balanced', ragStatus: 'green',
}

describe('generateAlerts — Stage Drop-Off Flag', () => {
  it('fires when conv rate is >15% below benchmark', () => {
    const stage: WaterfallStage = { ...baseStage, conversionRate: 0.41, benchmark: 0.53 }
    const alerts = generateAlerts({
      waterfallIcpA: [stage], waterfallIcpB: [],
      contentAssets: [], keywords: [], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'stage-drop-off')).toBe(true)
    expect(alerts.find(a => a.type === 'stage-drop-off')?.severity).toBe('red')
  })

  it('does not fire when conv rate is within 15% of benchmark', () => {
    const stage: WaterfallStage = { ...baseStage, conversionRate: 0.46, benchmark: 0.53 } // -13.2%
    const alerts = generateAlerts({
      waterfallIcpA: [stage], waterfallIcpB: [],
      contentAssets: [], keywords: [], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'stage-drop-off')).toBe(false)
  })

  it('does not fire for disconnected stages', () => {
    const stage: WaterfallStage = { ...baseStage, conversionRate: 0.10, benchmark: 0.50, connected: false }
    const alerts = generateAlerts({
      waterfallIcpA: [stage], waterfallIcpB: [],
      contentAssets: [], keywords: [], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'stage-drop-off')).toBe(false)
  })
})

describe('generateAlerts — Content Stall Alert', () => {
  it('fires when velocity delta is >2 days', () => {
    const asset: ContentAsset = { ...baseContent, velocityDeltaDays: 3.2 }
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [asset], keywords: [], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'content-stall')).toBe(true)
  })

  it('does not fire when velocity delta is ≤2 days', () => {
    const asset: ContentAsset = { ...baseContent, velocityDeltaDays: 1.8 }
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [asset], keywords: [], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'content-stall')).toBe(false)
  })
})

describe('generateAlerts — ICP Imbalance Signal', () => {
  it('fires when |closedWonShare − mqlShare| > 20pp', () => {
    const row: ICPPipelineRow = { ...basePipeline, mqlShare: 71, closedWonShare: 48 } // 23pp gap
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [], keywords: [], pipelineRows: [row],
    })
    expect(alerts.some(a => a.type === 'icp-imbalance')).toBe(true)
  })

  it('does not fire when gap is ≤20pp', () => {
    const row: ICPPipelineRow = { ...basePipeline, mqlShare: 60, closedWonShare: 50 } // 10pp
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [], keywords: [], pipelineRows: [row],
    })
    expect(alerts.some(a => a.type === 'icp-imbalance')).toBe(false)
  })
})

describe('generateAlerts — SEO Gap Flag', () => {
  it('fires when rank is null (not ranking)', () => {
    const kw: KeywordRow = { ...baseKeyword, rank: null, gapStatus: 'critical' }
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [], keywords: [kw], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'seo-gap')).toBe(true)
    expect(alerts.find(a => a.type === 'seo-gap')?.severity).toBe('red')
  })

  it('fires with amber severity when rank is 11+', () => {
    const kw: KeywordRow = { ...baseKeyword, rank: 14, gapStatus: 'weak' }
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [], keywords: [kw], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'seo-gap')).toBe(true)
    expect(alerts.find(a => a.type === 'seo-gap')?.severity).toBe('amber')
  })

  it('does not fire when rank is within top 10', () => {
    const kw: KeywordRow = { ...baseKeyword, rank: 4, gapStatus: 'strong' }
    const alerts = generateAlerts({
      waterfallIcpA: [], waterfallIcpB: [],
      contentAssets: [], keywords: [kw], pipelineRows: [],
    })
    expect(alerts.some(a => a.type === 'seo-gap')).toBe(false)
  })
})

describe('getTopAlert', () => {
  it('returns the first red alert', () => {
    const alerts = generateAlerts({
      waterfallIcpA: [{ ...baseStage, conversionRate: 0.3, benchmark: 0.53 }],
      waterfallIcpB: [],
      contentAssets: [{ ...baseContent, velocityDeltaDays: 4 }],
      keywords: [], pipelineRows: [],
    })
    const top = getTopAlert(alerts)
    expect(top?.severity).toBe('red')
  })

  it('returns null when no alerts', () => {
    expect(getTopAlert([])).toBeNull()
  })
})
