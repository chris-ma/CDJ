import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, LabelList,
} from 'recharts'
import type { WaterfallStage } from '@/types/metrics'
import { CDJ_STAGE_LABELS } from '@/types/cdj'
import { formatVolume, formatPercent } from '@/lib/formatters'

const STATUS_FILL: Record<string, string> = {
  green: '#DCFCE7',
  amber: '#FEF3C7',
  red: '#FEE2E2',
  grey: '#F1F5F9',
}

const STATUS_STROKE: Record<string, string> = {
  green: '#166534',
  amber: '#92400E',
  red: '#991B1B',
  grey: '#64748B',
}

interface WaterfallChartProps {
  stages: WaterfallStage[]
  onStageClick?: (stage: WaterfallStage) => void
}

interface ChartDatum {
  name: string
  volume: number
  fill: string
  stroke: string
  benchmark: number | null
  stage: WaterfallStage
}

export function WaterfallChart({ stages, onStageClick }: WaterfallChartProps) {
  const connectedStages = stages.filter(s => s.connected)
  const maxVolume = Math.max(...connectedStages.map(s => s.volume), 1)

  const data: ChartDatum[] = stages.map(s => ({
    name: CDJ_STAGE_LABELS[s.stage],
    volume: s.connected ? s.volume : 0,
    fill: STATUS_FILL[s.ragStatus],
    stroke: STATUS_STROKE[s.ragStatus],
    benchmark: s.benchmark !== null && s.volume > 0
      ? Math.round(s.volume / (s.conversionRate ?? 1) * s.benchmark)
      : null,
    stage: s,
  }))

  return (
    <div className="w-full">
      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 48, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
          <XAxis
            type="number"
            domain={[0, maxVolume * 1.1]}
            tickFormatter={v => formatVolume(v as number)}
            tick={{ fontSize: 11, fill: '#64748B' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={110}
            tick={{ fontSize: 13, fill: '#0F172A' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(15,43,76,0.04)' }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload as ChartDatum
              return (
                <div className="bg-white border border-[#CBD5E1] rounded-lg shadow-overlay px-3 py-2 text-[13px]">
                  <p className="font-semibold text-[#0F172A]">{d.name}</p>
                  <p className="text-[#64748B]">Volume: <span className="text-[#0F172A] font-mono">{formatVolume(d.volume)}</span></p>
                  {d.stage.conversionRate !== null && (
                    <p className="text-[#64748B]">Conv rate: <span className="text-[#0F172A] font-mono">{formatPercent(d.stage.conversionRate)}</span></p>
                  )}
                  {d.stage.benchmark !== null && (
                    <p className="text-[#64748B]">Benchmark: <span className="text-[#0F172A] font-mono">{formatPercent(d.stage.benchmark)}</span></p>
                  )}
                </div>
              )
            }}
          />
          <Bar
            dataKey="volume"
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={600}
            animationEasing="ease-out"
            onClick={(entry: unknown) => {
              const d = (entry as { stage: WaterfallStage }).stage
              if (d.connected) onStageClick?.(d)
            }}
            style={{ cursor: 'pointer' }}
          >
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.fill} stroke={entry.stroke} strokeWidth={1.5} />
            ))}
            <LabelList
              dataKey="volume"
              position="right"
              formatter={(v: unknown) => typeof v === 'number' && v > 0 ? formatVolume(v) : '—'}
              style={{ fontSize: 11, fill: '#64748B', fontFamily: 'var(--font-mono)' }}
            />
          </Bar>

          {/* Benchmark reference lines */}
          {connectedStages.map(s => {
            if (s.benchmark === null || s.conversionRate === null) return null
            const benchmarkVolume = Math.round(s.volume / (s.conversionRate) * s.benchmark)
            if (isNaN(benchmarkVolume) || benchmarkVolume <= 0) return null
            return (
              <ReferenceLine
                key={s.stage}
                x={benchmarkVolume}
                stroke="#94A3B8"
                strokeDasharray="4 3"
                strokeWidth={1.5}
                ifOverflow="visible"
              />
            )
          })}
        </BarChart>
      </ResponsiveContainer>

      <p className="text-[11px] text-[#64748B] text-right mt-1 pr-2">
        Dashed line = 90-day benchmark
      </p>

      {/* Disconnected stage notice */}
      {stages.some(s => !s.connected) && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stages.filter(s => !s.connected).map(s => (
            <div
              key={s.stage}
              className="bg-[#F1F5F9] rounded-lg border border-dashed border-[#CBD5E1] px-4 py-3"
            >
              <p className="text-[13px] font-medium text-[#64748B]">{CDJ_STAGE_LABELS[s.stage]}</p>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Not yet connected — requires Phase 4 CRM integration.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
