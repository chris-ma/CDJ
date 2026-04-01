import { describe, it, expect } from 'vitest'
import { computeRAG, computeDeltaPercent } from './rag'

describe('computeRAG', () => {
  it('returns green when current is within 5% of benchmark', () => {
    expect(computeRAG(0.31, 0.29)).toBe('green')  // +6.9% — green
    expect(computeRAG(0.29, 0.29)).toBe('green')  // 0% delta
    expect(computeRAG(0.276, 0.29)).toBe('green') // -4.8% — just inside green
  })

  it('returns amber when current is 5–15% below benchmark', () => {
    expect(computeRAG(0.18, 0.21)).toBe('amber')  // -14.3%
    expect(computeRAG(0.247, 0.29)).toBe('amber') // -14.8%
    expect(computeRAG(0.2465, 0.29)).toBe('amber') // -15.0% boundary
  })

  it('returns red when current is more than 15% below benchmark', () => {
    expect(computeRAG(0.41, 0.53)).toBe('red')    // -22.6%
    expect(computeRAG(0.28, 0.38)).toBe('red')    // -26.3%
  })

  it('returns grey when benchmark is 0', () => {
    expect(computeRAG(0.31, 0)).toBe('grey')
  })

  it('returns grey when current is 0', () => {
    expect(computeRAG(0, 0.35)).toBe('grey')
  })
})

describe('computeDeltaPercent', () => {
  it('computes positive delta correctly', () => {
    const delta = computeDeltaPercent(0.31, 0.29)
    expect(delta).toBeCloseTo(6.9, 0)
  })

  it('computes negative delta correctly', () => {
    const delta = computeDeltaPercent(0.41, 0.53)
    expect(delta).toBeCloseTo(-22.6, 0)
  })

  it('returns 0 when benchmark is 0', () => {
    expect(computeDeltaPercent(0.5, 0)).toBe(0)
  })
})
