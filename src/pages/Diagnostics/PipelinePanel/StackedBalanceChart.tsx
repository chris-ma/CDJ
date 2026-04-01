import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, LabelList,
} from 'recharts'
import type { ICPPipelineRow } from '@/types/pipeline'

interface StackedBalanceChartProps {
  rows: ICPPipelineRow[]
}

const FUNNEL_STAGES = [
  { key: 'triggerShare',   label: 'Triggers'    },
  { key: 'mqlShare',       label: 'MQLs'        },
  { key: 'closedWonShare', label: 'Closed-Won'  },
  { key: 'revenueShare',   label: 'Revenue'     },
] as const

type ShareKey = typeof FUNNEL_STAGES[number]['key']

interface ChartDatum {
  stage: string
  'ICP A': number
  'ICP B': number
}

export function StackedBalanceChart({ rows }: StackedBalanceChartProps) {
  const icpA = rows.find(r => r.icp === 'icp-a')
  const icpB = rows.find(r => r.icp === 'icp-b')

  if (!icpA || !icpB) return null

  const data: ChartDatum[] = FUNNEL_STAGES.map(({ key, label }) => ({
    stage: label,
    'ICP A': icpA[key as ShareKey],
    'ICP B': icpB[key as ShareKey],
  }))

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical" margin={{ left: 16, right: 48, top: 4, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={v => `${v}%`}
          tick={{ fontSize: 11, fill: '#64748B' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="stage"
          width={80}
          tick={{ fontSize: 13, fill: '#0F172A' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          formatter={(value: unknown, name: unknown) => [`${value}%`, `${name}`]}
          contentStyle={{ fontSize: 13, borderColor: '#CBD5E1', borderRadius: 8 }}
        />
        <Legend
          wrapperStyle={{ fontSize: 13, paddingTop: 8 }}
          iconType="rect"
          iconSize={12}
        />
        <Bar dataKey="ICP A" stackId="a" fill="#1D4ED8" radius={[0, 0, 0, 0]}>
          <LabelList dataKey="ICP A" position="inside" style={{ fill: '#fff', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            formatter={(v: unknown) => typeof v === 'number' && v > 8 ? `${v}%` : ''} />
        </Bar>
        <Bar dataKey="ICP B" stackId="a" fill="#0F766E" radius={[0, 4, 4, 0]}>
          <LabelList dataKey="ICP B" position="right" style={{ fill: '#64748B', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            formatter={(v: unknown) => typeof v === 'number' ? `${v}%` : ''} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
