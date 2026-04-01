import type { WaterfallStage } from '@/types/metrics'
import { CDJ_STAGE_LABELS } from '@/types/cdj'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { DataTable, type Column } from '@/components/DataTable/DataTable'
import { formatVolume, formatPercent, formatDelta } from '@/lib/formatters'

interface WaterfallTableProps {
  stages: WaterfallStage[]
}

interface TableRow extends WaterfallStage {
  id: string
}

export function WaterfallTable({ stages }: WaterfallTableProps) {
  const rows: TableRow[] = stages.map(s => ({ ...s, id: s.stage }))

  const columns: Column<TableRow>[] = [
    {
      key: 'stage',
      header: 'CDJ Stage',
      render: row => (
        <span className="font-medium text-[#0F172A]">{CDJ_STAGE_LABELS[row.stage]}</span>
      ),
    },
    {
      key: 'volume',
      header: 'Volume',
      sortable: true,
      render: row => row.connected
        ? <span className="font-mono">{formatVolume(row.volume)}</span>
        : <span className="text-[#64748B] italic">Not connected</span>,
    },
    {
      key: 'conversionRate',
      header: 'Conv. Rate',
      sortable: true,
      render: row => row.conversionRate !== null && row.connected
        ? <span className="font-mono">{formatPercent(row.conversionRate)}</span>
        : <span className="text-[#64748B]">—</span>,
    },
    {
      key: 'benchmark',
      header: 'vs. Benchmark',
      render: row => {
        if (!row.connected || row.conversionRate === null || row.benchmark === null) {
          return <span className="text-[#64748B]">—</span>
        }
        const delta = ((row.conversionRate - row.benchmark) / row.benchmark) * 100
        return (
          <span className={[
            'font-mono text-[13px]',
            delta >= 0 ? 'text-[#166534]' : delta >= -15 ? 'text-[#92400E]' : 'text-[#991B1B]',
          ].join(' ')}>
            {formatDelta(delta)}
          </span>
        )
      },
    },
    {
      key: 'status',
      header: 'Status',
      render: row => <RAGBadge status={row.ragStatus} size="sm" stage={row.stage} />,
    },
  ]

  return (
    <DataTable
      columns={columns}
      rows={rows}
      getRowClassName={row => row.connected && (row.ragStatus === 'red' || row.ragStatus === 'amber')
        ? 'cursor-pointer hover:bg-blue-50'
        : ''
      }
    />
  )
}
