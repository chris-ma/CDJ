import type { RAGStatus, CDJStage } from '@/types/cdj'
import { RAG_STATUS_LABELS, CDJ_STAGE_LABELS } from '@/types/cdj'

type BadgeSize = 'sm' | 'md' | 'lg'

interface RAGBadgeProps {
  status: RAGStatus
  size?: BadgeSize
  stage?: CDJStage
  className?: string
}

const STATUS_STYLES: Record<RAGStatus, { dot: string; bg: string; border: string; text: string }> = {
  green: {
    dot: 'bg-[#166534]',
    bg: 'bg-[#DCFCE7]',
    border: 'border-[#86EFAC]',
    text: 'text-[#166534]',
  },
  amber: {
    dot: 'bg-[#92400E]',
    bg: 'bg-[#FEF3C7]',
    border: 'border-[#FCD34D]',
    text: 'text-[#92400E]',
  },
  red: {
    dot: 'bg-[#991B1B]',
    bg: 'bg-[#FEE2E2]',
    border: 'border-[#FCA5A5]',
    text: 'text-[#991B1B]',
  },
  grey: {
    dot: 'bg-[#64748B]',
    bg: 'bg-[#F1F5F9]',
    border: 'border-[#CBD5E1]',
    text: 'text-[#64748B]',
  },
}

const SIZE_STYLES: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-[11px] min-h-[20px]',
  md: 'px-2 py-1 text-[13px] min-h-[28px]',
  lg: 'px-3 py-1.5 text-[13px] min-h-[32px]',
}

export function RAGBadge({ status, size = 'md', stage, className = '' }: RAGBadgeProps) {
  const styles = STATUS_STYLES[status]
  const label = RAG_STATUS_LABELS[status]
  const ariaLabel = stage
    ? `${label}: ${CDJ_STAGE_LABELS[stage]} stage`
    : label

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={[
        'inline-flex items-center gap-1.5 rounded-[9999px] border font-semibold select-none',
        styles.bg,
        styles.border,
        styles.text,
        SIZE_STYLES[size],
        // Minimum 44×44px touch target via padding expansion on interactive contexts
        'min-w-[44px] justify-center',
        className,
      ].join(' ')}
    >
      {size !== 'sm' && (
        <span
          aria-hidden="true"
          className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${styles.dot}`}
        />
      )}
      {label}
    </span>
  )
}
