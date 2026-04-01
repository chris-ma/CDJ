import { describe, it, expect } from 'vitest'
import { formatPercent, formatDelta, formatVolume, formatVelocityDelta } from './formatters'

describe('formatPercent', () => {
  it('formats a decimal as percentage', () => {
    expect(formatPercent(0.312)).toBe('31%')
    expect(formatPercent(0.31, 1)).toBe('31.0%')
    expect(formatPercent(1.0)).toBe('100%')
    expect(formatPercent(0)).toBe('0%')
  })
})

describe('formatDelta', () => {
  it('formats a positive delta with ▲', () => {
    expect(formatDelta(6.9)).toBe('▲ +7%')
  })
  it('formats a negative delta with ▼', () => {
    expect(formatDelta(-22.6)).toBe('▼ -23%')
  })
  it('formats zero as ▲ +0%', () => {
    expect(formatDelta(0)).toBe('▲ +0%')
  })
})

describe('formatVolume', () => {
  it('adds locale commas', () => {
    expect(formatVolume(4200)).toBe('4,200')
    expect(formatVolume(1000000)).toBe('1,000,000')
    expect(formatVolume(99)).toBe('99')
  })
})

describe('formatVelocityDelta', () => {
  it('formats positive (stall)', () => {
    expect(formatVelocityDelta(3.2)).toBe('+3.2 days slower')
  })
  it('formats negative (accelerator)', () => {
    expect(formatVelocityDelta(-5.1)).toBe('-5.1 days faster')
  })
})
