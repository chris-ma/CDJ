import type { RAGStatus } from '@/types/cdj'

/**
 * Computes RAG status by comparing current conversion rate to the 90-day benchmark.
 * Thresholds from spec §4 (Stage Drop-Off Flag):
 *   - Green: within 5% of benchmark
 *   - Amber: 5–15% below benchmark
 *   - Red:   > 15% below benchmark
 *   - Grey:  benchmark is 0 or current is 0 (no data)
 */
export function computeRAG(current: number, benchmark: number): RAGStatus {
  if (benchmark === 0 || current === 0) return 'grey'
  const delta = (current - benchmark) / benchmark
  if (delta >= -0.05) return 'green'
  if (delta >= -0.15) return 'amber'
  return 'red'
}

/**
 * Returns the delta as a percentage (current vs benchmark).
 * e.g. current=0.31, benchmark=0.29 → +6.9
 */
export function computeDeltaPercent(current: number, benchmark: number): number {
  if (benchmark === 0) return 0
  return ((current - benchmark) / benchmark) * 100
}
