import type { ICP } from '@/types/cdj'
import { ICP_LABELS } from '@/types/cdj'

const ICP_OPTIONS: ICP[] = ['all', 'icp-a', 'icp-b']

interface ICPSelectorProps {
  value: ICP
  onChange: (icp: ICP) => void
  className?: string
}

export function ICPSelector({ value, onChange, className = '' }: ICPSelectorProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Select ICP segment"
      className={`flex rounded-[8px] border border-[#CBD5E1] bg-[#F1F5F9] p-0.5 gap-0.5 ${className}`}
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
  )
}
