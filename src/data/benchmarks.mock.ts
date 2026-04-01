import type { BenchmarkMap } from '@/types/metrics'

// 90-day rolling benchmark conversion rates — Funds Management Company
// ICP A: Financial Advisers seeking a new fund manager
// ICP B: Institutional Investors (super funds, family offices)
export const benchmarks: BenchmarkMap = {
  // ICP A — Adviser benchmarks
  'icp-a:trigger':        0.27,   // % of adviser sessions that enter consideration
  'icp-a:consideration':  0.22,   // % that shortlist / request materials
  'icp-a:evaluation':     0.48,   // % that progress through due diligence
  'icp-a:purchase':       0.38,   // % that confirm an allocation / sign mandate
  'icp-a:post-purchase':  0.74,   // % completing onboarding & first reporting cycle
  'icp-a:loyalty-loop':   0.33,   // % making additional allocations or referrals

  // ICP B — Institutional benchmarks
  'icp-b:trigger':        0.24,
  'icp-b:consideration':  0.18,
  'icp-b:evaluation':     0.41,
  'icp-b:purchase':       0.35,
  'icp-b:post-purchase':  0.70,
  'icp-b:loyalty-loop':   0.28,
}
