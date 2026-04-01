import { Printer } from 'lucide-react'
import { getScorecardData } from '@/services/scorecard.service'
import { useAlerts } from '@/hooks/useAlerts'
import { useAppStore } from '@/store/useAppStore'
import { ScorecardTable } from './ScorecardTable'
import { AlertBanner } from '@/components/AlertBanner/AlertBanner'

export default function ExecScorecard() {
  const { selectedICP } = useAppStore()
  const cells = getScorecardData(selectedICP)
  const { topAlert } = useAlerts()

  function handleExport() {
    window.print()
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1536px] mx-auto">
      {/* Page header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[20px] font-semibold text-[#0F172A]">Exec Scorecard</h1>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            Last 30 days vs. 90-day benchmark
          </p>
        </div>
        <button
          onClick={handleExport}
          aria-label="Export scorecard as PDF"
          className="flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#CBD5E1] bg-white text-[13px] text-[#64748B] hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors shadow-card"
        >
          <Printer className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Export snapshot</span>
        </button>
      </div>

      {/* RAG table */}
      <div className="mb-4">
        <ScorecardTable cells={cells} />
      </div>

      {/* Auto-callout */}
      {topAlert && (
        <AlertBanner
          variant={topAlert.severity === 'red' ? 'error' : 'warning'}
          headline={topAlert.headline}
          body={topAlert.diagnosis}
          ctaLabel="View details →"
          ctaPath={topAlert.drillDownPath}
          className="mt-4"
        />
      )}

      {!topAlert && (
        <div className="mt-4 bg-white rounded-[8px] border border-[#CBD5E1] px-4 py-3 shadow-card">
          <p className="text-[13px] text-[#64748B]">
            All stages within benchmark thresholds. No immediate action required.
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-[#64748B]">
        <span>
          <strong>GREEN</strong> — within 5% of benchmark
        </span>
        <span>
          <strong>AMBER</strong> — 5–15% below benchmark
        </span>
        <span>
          <strong>RED</strong> — &gt;15% below benchmark · tap to diagnose
        </span>
        <span>
          <strong>N/A</strong> — insufficient data or not yet connected
        </span>
      </div>
    </div>
  )
}
