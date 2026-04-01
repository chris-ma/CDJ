interface VelocityBarProps {
  deltaDays: number | null
  maxDays?: number
}

export function VelocityBar({ deltaDays, maxDays = 6 }: VelocityBarProps) {
  if (deltaDays === null) {
    return <span className="text-[11px] text-[#64748B] italic">No data</span>
  }

  const clamped = Math.max(-maxDays, Math.min(maxDays, deltaDays))
  const pct = Math.abs(clamped) / maxDays * 50   // max 50% each side
  const isStall = clamped > 0

  return (
    <div className="flex items-center gap-2 min-w-[120px]">
      {/* Left (accelerator) side */}
      <div className="flex-1 h-2 bg-[#F1F5F9] rounded-l-full overflow-hidden flex justify-end">
        {!isStall && (
          <div
            className="h-full bg-[#166534] rounded-l-full"
            style={{ width: `${pct * 2}%` }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Centre marker */}
      <div className="w-px h-3 bg-[#CBD5E1] flex-shrink-0" aria-hidden="true" />

      {/* Right (stall) side */}
      <div className="flex-1 h-2 bg-[#F1F5F9] rounded-r-full overflow-hidden">
        {isStall && (
          <div
            className="h-full bg-[#991B1B] rounded-r-full"
            style={{ width: `${pct * 2}%` }}
            aria-hidden="true"
          />
        )}
      </div>

      <span className={[
        'text-[11px] font-mono w-16 text-right flex-shrink-0',
        isStall ? 'text-[#991B1B]' : 'text-[#166534]',
      ].join(' ')}>
        {isStall ? '+' : ''}{deltaDays.toFixed(1)}d
      </span>
    </div>
  )
}
