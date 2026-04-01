import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { useWaterfallQuery } from '@/hooks/queries/useWaterfallQuery'
import { ICPSelector } from '@/components/ICPSelector/ICPSelector'
import { WaterfallChart } from './WaterfallChart'
import { WaterfallTable } from './WaterfallTable'
import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader'
import type { WaterfallStage } from '@/types/metrics'

export default function CDJWaterfall() {
  const { selectedICP, setSelectedICP } = useAppStore()
  const navigate = useNavigate()

  const { data: stages, isLoading, isError } = useWaterfallQuery(selectedICP)

  function handleStageClick(stage: WaterfallStage) {
    if (stage.ragStatus === 'red' || stage.ragStatus === 'amber') {
      navigate(`/diagnostics/content?icp=${selectedICP}&stage=${stage.stage}`)
    }
  }

  const redCount = stages?.filter(s => s.ragStatus === 'red' && s.connected).length ?? 0

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1536px] mx-auto">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[20px] font-semibold text-[#0F172A]">CDJ Waterfall</h1>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            Last 30 days vs. 90-day benchmark
            {redCount > 0 && (
              <span className="ml-2 text-[#991B1B] font-medium">
                · {redCount} stage{redCount > 1 ? 's' : ''} require action
              </span>
            )}
          </p>
        </div>
        <ICPSelector value={selectedICP} onChange={setSelectedICP} />
      </div>

      {/* Error state */}
      {isError && (
        <div className="rounded-[8px] border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-3 text-[13px] text-[#991B1B] mb-6">
          Failed to load waterfall data. Please refresh the page.
        </div>
      )}

      {/* Chart */}
      <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-4 md:p-6 mb-6">
        <h2 className="text-[17px] font-semibold text-[#0F172A] mb-4">
          Stage Volume &amp; Conversion
        </h2>
        {isLoading ? (
          <div className="space-y-3" aria-label="Loading chart">
            <SkeletonLoader height="h-48" />
          </div>
        ) : stages && (
          <WaterfallChart stages={stages} onStageClick={handleStageClick} />
        )}
      </div>

      {/* Supporting table */}
      <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-[#CBD5E1]">
          <h2 className="text-[15px] font-semibold text-[#0F172A]">Stage Detail</h2>
        </div>
        <div className="p-4">
          {isLoading ? (
            <div className="space-y-2" aria-label="Loading table">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonLoader key={i} height="h-8" />
              ))}
            </div>
          ) : stages && (
            <WaterfallTable stages={stages} />
          )}
        </div>
      </div>
    </div>
  )
}
