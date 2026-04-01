import { useNavigate } from 'react-router-dom'
import type { CDJStage, RAGStatus } from '@/types/cdj'
import { CDJ_STAGE_LABELS } from '@/types/cdj'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { formatDelta } from '@/lib/formatters'

interface KPICardProps {
  stage: CDJStage
  primaryMetric: string       // e.g. "4,200"
  subLabel?: string           // e.g. "organic sessions"
  ragStatus: RAGStatus
  deltaPercent?: number
  drillDownPath?: string
  loading?: boolean
  className?: string
}

export function KPICard({
  stage,
  primaryMetric,
  subLabel,
  ragStatus,
  deltaPercent,
  drillDownPath,
  loading = false,
  className = '',
}: KPICardProps) {
  const navigate = useNavigate()
  const isClickable = !!drillDownPath
  const activeStyle = ragStatus === 'red'
    ? 'border-l-[3px] border-l-[#991B1B] bg-[#FEE2E2]/20'
    : ragStatus === 'amber'
    ? 'border-l-[3px] border-l-[#FCD34D] bg-[#FEF3C7]/20'
    : ''

  if (loading) {
    return (
      <div className={`bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-4 min-h-[88px] md:min-h-[120px] md:w-[220px] ${className}`}>
        <div className="animate-pulse space-y-2">
          <div className="h-3 bg-gray-200 rounded w-2/3" />
          <div className="h-7 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    )
  }

  return (
    <div
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={() => isClickable && navigate(drillDownPath!)}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          navigate(drillDownPath!)
        }
      }}
      className={[
        'bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-4',
        'min-h-[88px] md:min-h-[120px] md:w-[220px]',
        isClickable ? 'cursor-pointer hover:border-[#1D4ED8] transition-colors' : '',
        activeStyle,
        className,
      ].join(' ')}
    >
      <p className="text-[13px] text-[#64748B] mb-1">{CDJ_STAGE_LABELS[stage]}</p>
      <p className="text-[28px] font-bold text-[#0F172A] font-mono leading-none mb-1">
        {primaryMetric}
      </p>
      {subLabel && (
        <p className="text-[11px] text-[#64748B] mb-2">{subLabel}</p>
      )}
      <div className="flex items-center gap-2">
        <RAGBadge status={ragStatus} size="sm" />
        {deltaPercent !== undefined && (
          <span className="text-[11px] text-[#64748B] font-mono">
            {formatDelta(deltaPercent)}
          </span>
        )}
      </div>
    </div>
  )
}
