import type { BenchmarkMap } from '@/types/metrics'

// 90-day rolling benchmark conversion rates per ICP + stage
// Key format: `${icp}:${stage}`
export const benchmarks: BenchmarkMap = {
  // ICP A benchmarks
  'icp-a:trigger':        0.29,   // 29% → consideration
  'icp-a:consideration':  0.21,   // 21% → evaluation
  'icp-a:evaluation':     0.53,   // 53% → purchase (MQL velocity)
  'icp-a:purchase':       0.40,   // 40% → closed-won
  'icp-a:post-purchase':  0.72,   // 72% onboarding completion
  'icp-a:loyalty-loop':   0.35,   // 35% re-engagement

  // ICP B benchmarks
  'icp-b:trigger':        0.27,
  'icp-b:consideration':  0.19,
  'icp-b:evaluation':     0.44,
  'icp-b:purchase':       0.38,
  'icp-b:post-purchase':  0.68,
  'icp-b:loyalty-loop':   0.30,
}
