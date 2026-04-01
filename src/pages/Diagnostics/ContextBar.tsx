import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { ICP, CDJStage } from '@/types/cdj'
import { CDJ_STAGE_LABELS } from '@/types/cdj'
import { ICPSelector } from '@/components/ICPSelector/ICPSelector'

interface ContextBarProps {
  icp: ICP
  stage?: CDJStage
  onICPChange: (icp: ICP) => void
  panelTitle: string
}

export function ContextBar({ icp, stage, onICPChange, panelTitle }: ContextBarProps) {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-[#CBD5E1] px-4 py-3 flex flex-wrap items-center gap-3">
      {/* Breadcrumb + back link */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button
          onClick={() => navigate(-1)}
          aria-label="Back to Waterfall"
          className="flex items-center gap-1 text-[13px] text-[#1D4ED8] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Waterfall</span>
        </button>
        <span className="text-[#CBD5E1]" aria-hidden="true">/</span>
        <span className="text-[13px] font-semibold text-[#0F172A] truncate">{panelTitle}</span>
      </div>

      {/* Stage chip */}
      {stage && (
        <span className="inline-flex items-center px-2.5 py-1 rounded-pill bg-[#F1F5F9] border border-[#CBD5E1] text-[13px] text-[#0F172A] font-medium">
          {CDJ_STAGE_LABELS[stage]}
        </span>
      )}

      {/* Date range */}
      <span className="text-[11px] text-[#64748B] hidden sm:inline">
        Last 30 days vs. 90-day benchmark
      </span>

      {/* ICP selector */}
      <ICPSelector value={icp} onChange={onICPChange} className="text-[13px]" />
    </div>
  )
}
