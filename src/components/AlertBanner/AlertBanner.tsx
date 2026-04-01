import { AlertCircle, AlertTriangle, Info, CheckCircle, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type AlertVariant = 'error' | 'warning' | 'info' | 'success'

interface AlertBannerProps {
  variant: AlertVariant
  headline: string
  body?: string
  ctaLabel?: string
  ctaPath?: string
  dismissable?: boolean
  onDismiss?: () => void
  className?: string
}

const VARIANT_STYLES: Record<AlertVariant, {
  bg: string; border: string; text: string; accent: string; icon: typeof AlertCircle
}> = {
  error: {
    bg: 'bg-[#FEE2E2]',
    border: 'border-[#FCA5A5]',
    text: 'text-[#991B1B]',
    accent: 'bg-[#991B1B]',
    icon: AlertCircle,
  },
  warning: {
    bg: 'bg-[#FEF3C7]',
    border: 'border-[#FCD34D]',
    text: 'text-[#92400E]',
    accent: 'bg-[#92400E]',
    icon: AlertTriangle,
  },
  info: {
    bg: 'bg-[#DBEAFE]',
    border: 'border-[#93C5FD]',
    text: 'text-[#1E40AF]',
    accent: 'bg-[#1D4ED8]',
    icon: Info,
  },
  success: {
    bg: 'bg-[#DCFCE7]',
    border: 'border-[#86EFAC]',
    text: 'text-[#166534]',
    accent: 'bg-[#166534]',
    icon: CheckCircle,
  },
}

export function AlertBanner({
  variant,
  headline,
  body,
  ctaLabel = 'View details →',
  ctaPath,
  dismissable = false,
  onDismiss,
  className = '',
}: AlertBannerProps) {
  const navigate = useNavigate()
  const styles = VARIANT_STYLES[variant]
  const Icon = styles.icon

  return (
    <div
      role="alert"
      className={[
        'flex items-start gap-3 rounded-[8px] border p-4 relative',
        styles.bg,
        styles.border,
        className,
      ].join(' ')}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-[8px] ${styles.accent}`} aria-hidden="true" />

      <Icon aria-hidden="true" className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.text}`} />

      <div className="flex-1 min-w-0">
        <p className={`text-[15px] font-semibold ${styles.text}`}>{headline}</p>
        {body && (
          <p className={`text-[13px] mt-0.5 ${styles.text} opacity-80`}>{body}</p>
        )}
        {ctaPath && (
          <button
            onClick={() => navigate(ctaPath)}
            className={`text-[13px] font-semibold mt-1 underline underline-offset-2 ${styles.text} hover:opacity-70`}
          >
            {ctaLabel}
          </button>
        )}
      </div>

      {dismissable && onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded hover:opacity-70 ${styles.text}`}
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
