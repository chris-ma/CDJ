import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface RankSparklineProps {
  history: (number | null)[]
}

export function RankSparkline({ history }: RankSparklineProps) {
  const data = history.map((rank, i) => ({ week: i + 1, rank }))
  const hasData = history.some(r => r !== null)

  if (!hasData) {
    return <span className="text-[11px] text-[#64748B] italic">Not tracked</span>
  }

  // Lower rank = better, so invert Y axis
  const validRanks = history.filter((r): r is number => r !== null)
  const minRank = Math.min(...validRanks)
  const maxRank = Math.max(...validRanks, 20)

  const latest = history[history.length - 1]
  const first  = history.find(r => r !== null) ?? null
  const trend  = latest !== null && first !== null
    ? latest < first ? '▲' : latest > first ? '▼' : '—'
    : '—'
  const trendColor = trend === '▲' ? '#166534' : trend === '▼' ? '#991B1B' : '#64748B'

  return (
    <div className="flex items-center gap-2">
      <ResponsiveContainer width={72} height={28}>
        <LineChart data={data}>
          <YAxis domain={[minRank - 1, maxRank + 1]} reversed hide />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const val = payload[0].value as number | null
              return (
                <div className="bg-white border border-[#CBD5E1] rounded px-2 py-1 text-[11px]">
                  {val !== null ? `#${val}` : 'Not ranking'}
                </div>
              )
            }}
          />
          <Line
            type="monotone"
            dataKey="rank"
            stroke="#1D4ED8"
            strokeWidth={1.5}
            dot={false}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
      <span style={{ color: trendColor }} className="text-[11px] font-bold w-4">{trend}</span>
    </div>
  )
}
