import { type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  body?: string
  ctaLabel?: string
  ctaPath?: string
  className?: string
}

export function EmptyState({ icon, title, body, ctaLabel, ctaPath, className = '' }: EmptyStateProps) {
  const navigate = useNavigate()
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      {icon && <div className="mb-4 text-[#64748B] opacity-50">{icon}</div>}
      <p className="text-[17px] font-semibold text-[#0F172A] mb-1">{title}</p>
      {body && <p className="text-[13px] text-[#64748B] max-w-xs">{body}</p>}
      {ctaLabel && ctaPath && (
        <button
          onClick={() => navigate(ctaPath)}
          className="mt-4 text-[13px] font-semibold text-[#1D4ED8] underline underline-offset-2 hover:opacity-70"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  )
}
