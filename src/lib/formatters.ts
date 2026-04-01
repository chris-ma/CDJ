/**
 * Formats a decimal as a percentage string.
 * e.g. 0.312 → "31%"
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`
}

/**
 * Formats a percentage delta with a ▲/▼ prefix.
 * e.g. 6.9 → "▲ +7%" | -22.6 → "▼ -23%"
 */
export function formatDelta(deltaPercent: number, decimals = 0): string {
  const sign = deltaPercent >= 0 ? '▲' : '▼'
  const formatted = Math.abs(deltaPercent).toFixed(decimals)
  return `${sign} ${deltaPercent >= 0 ? '+' : '-'}${formatted}%`
}

/**
 * Formats a large integer with locale commas.
 * e.g. 4200 → "4,200"
 */
export function formatVolume(value: number): string {
  return value.toLocaleString('en-US')
}

/**
 * Formats a velocity delta in days.
 * e.g. 3.2 → "+3.2 days slower" | -5.1 → "-5.1 days faster"
 */
export function formatVelocityDelta(days: number): string {
  if (days > 0) return `+${days.toFixed(1)} days slower`
  return `${days.toFixed(1)} days faster`
}
