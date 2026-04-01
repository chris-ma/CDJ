import type { ICP, SubSegment } from '@/types/cdj'
import { ICP_LABELS, ICP_SUB_SEGMENTS, SUB_SEGMENT_LABELS } from '@/types/cdj'

const ICP_OPTIONS: ICP[] = ['all', 'icp-a', 'icp-b']

interface ICPSelectorProps {
  value: ICP
  onChange: (icp: ICP) => void
  subSegment?: SubSegment | null
  onSubSegmentChange?: (sub: SubSegment | null) => void
  className?: string
}

export function ICPSelector({
  value,
  onChange,
  subSegment = null,
  onSubSegmentChange,
  className = '',
}: ICPSelectorProps) {
  const subSegments = value !== 'all' ? ICP_SUB_SEGMENTS[value] : []

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Row 1 — segment tabs */}
      <div
        role="radiogroup"
        aria-label="Select segment"
        className="flex rounded-[8px] border border-[#CBD5E1] bg-[#F1F5F9] p-0.5 gap-0.5"
      >
        {ICP_OPTIONS.map(icp => {
          const isSelected = value === icp
          return (
            <button
              key={icp}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(icp)}
              className={[
                'flex-1 px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-all',
                'min-h-[44px] min-w-[44px]',
                isSelected
                  ? 'bg-white text-[#1D4ED8] border border-[#CBD5E1] shadow-card font-semibold'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/60',
              ].join(' ')}
            >
              {ICP_LABELS[icp]}
            </button>
          )
        })}
      </div>

      {/* Row 2 — sub-segment chips (only when a specific segment is selected) */}
      {value !== 'all' && onSubSegmentChange && (
        <div
          role="radiogroup"
          aria-label={`Select ${ICP_LABELS[value]} sub-segment`}
          className="flex flex-wrap gap-1.5"
        >
          {/* "All [Segment]" chip = null sub-segment */}
          <button
            role="radio"
            aria-checked={subSegment === null}
            onClick={() => onSubSegmentChange(null)}
            className={[
              'px-3 py-1 rounded-full text-[12px] font-medium border transition-all',
              subSegment === null
                ? 'bg-white border-[#1D4ED8] text-[#1D4ED8] shadow-sm'
                : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#64748B] hover:border-[#94A3B8] hover:text-[#0F172A]',
            ].join(' ')}
          >
            All {ICP_LABELS[value]}
          </button>

          {subSegments.map(sub => {
            const isSelected = subSegment === sub
            return (
              <button
                key={sub}
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSubSegmentChange(sub)}
                className={[
                  'px-3 py-1 rounded-full text-[12px] font-medium border transition-all',
                  isSelected
                    ? 'bg-white border-[#1D4ED8] text-[#1D4ED8] shadow-sm'
                    : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#64748B] hover:border-[#94A3B8] hover:text-[#0F172A]',
                ].join(' ')}
              >
                {SUB_SEGMENT_LABELS[sub]}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
