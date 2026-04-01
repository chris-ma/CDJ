import { useAppStore } from '@/store/useAppStore'
import { usePipelineQuery } from '@/hooks/queries/usePipelineQuery'
import { ContextBar } from '@/pages/Diagnostics/ContextBar'
import { StackedBalanceChart } from './StackedBalanceChart'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader'
import { DataTable, type Column } from '@/components/DataTable/DataTable'
import type { ICPPipelineRow } from '@/types/pipeline'
import { ICP_LABELS } from '@/types/cdj'

const SIGNAL_LABELS: Record<ICPPipelineRow['signal'], string> = {
  'high-quality': 'High quality',
  'volume-gap': 'Volume gap',
  'balanced': 'Balanced',
}

const SIGNAL_COLORS: Record<ICPPipelineRow['signal'], string> = {
  'high-quality': 'text-[#166534]',
  'volume-gap': 'text-[#991B1B]',
  'balanced': 'text-[#64748B]',
}

const columns: Column<ICPPipelineRow & { id: string }>[] = [
  {
    key: 'icp',
    header: 'ICP',
    render: row => <span className="font-semibold">{ICP_LABELS[row.icp]}</span>,
  },
  {
    key: 'triggerShare',
    header: '% Triggers',
    sortable: true,
    render: row => <span className="font-mono">{row.triggerShare}%</span>,
  },
  {
    key: 'mqlShare',
    header: '% MQLs',
    sortable: true,
    render: row => <span className="font-mono">{row.mqlShare}%</span>,
  },
  {
    key: 'closedWonShare',
    header: '% Closed-Won',
    sortable: true,
    render: row => <span className="font-mono">{row.closedWonShare}%</span>,
  },
  {
    key: 'revenueShare',
    header: '% Revenue',
    sortable: true,
    render: row => <span className="font-mono">{row.revenueShare}%</span>,
  },
  {
    key: 'signal',
    header: 'Signal',
    render: row => (
      <span className={`text-[13px] font-semibold ${SIGNAL_COLORS[row.signal]}`}>
        {SIGNAL_LABELS[row.signal]}
      </span>
    ),
  },
  {
    key: 'status',
    header: 'RAG',
    render: row => <RAGBadge status={row.ragStatus} size="sm" />,
  },
]

export default function PipelinePanel() {
  const { selectedICP, setSelectedICP, selectedSubSegment, setSelectedSubSegment } = useAppStore()
  const { data: allRows, isLoading, isError } = usePipelineQuery(selectedICP, selectedSubSegment)

  const rows = allRows ? allRows.map(r => ({ ...r, id: r.icp })) : []
  const icpARow = allRows?.find(r => r.icp === 'icp-a')
  const icpBRow = allRows?.find(r => r.icp === 'icp-b')

  return (
    <div className="flex flex-col h-full">
      <ContextBar
        icp={selectedICP}
        onICPChange={setSelectedICP}
        subSegment={selectedSubSegment}
        onSubSegmentChange={setSelectedSubSegment}
        panelTitle="ICP Pipeline Balance"
      />

      <div className="p-4 md:p-6 max-w-[1280px] mx-auto w-full">
        <div className="mb-4">
          <h1 className="text-[20px] font-semibold text-[#0F172A]">ICP Pipeline Balance</h1>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            Each ICP's share of funnel entry vs. revenue. Imbalances surface quality gaps and volume opportunities.
          </p>
        </div>

        {isError && (
          <div className="rounded-[8px] border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-3 text-[13px] text-[#991B1B] mb-6">
            Failed to load pipeline data. Please refresh the page.
          </div>
        )}

        {/* Stacked chart */}
        <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-4 md:p-6 mb-6">
          <h2 className="text-[15px] font-semibold text-[#0F172A] mb-4">
            Funnel Share by ICP
          </h2>
          {isLoading ? (
            <SkeletonLoader height="h-40" aria-label="Loading chart" />
          ) : allRows && (
            <StackedBalanceChart rows={allRows} />
          )}
        </div>

        {/* Signal interpretation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {isLoading ? (
            <>
              <SkeletonLoader height="h-24" rounded="rounded-[12px]" />
              <SkeletonLoader height="h-24" rounded="rounded-[12px]" />
            </>
          ) : [icpARow, icpBRow].map(row => {
            if (!row) return null
            const mqlRevenueGap = row.revenueShare - row.mqlShare
            return (
              <div
                key={row.icp}
                className={[
                  'rounded-[12px] border shadow-card p-4',
                  row.ragStatus === 'green'
                    ? 'bg-[#DCFCE7] border-[#86EFAC]'
                    : row.ragStatus === 'red'
                    ? 'bg-[#FEE2E2] border-[#FCA5A5]'
                    : 'bg-[#FEF3C7] border-[#FCD34D]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] font-semibold text-[#0F172A]">
                    {ICP_LABELS[row.icp]}
                  </span>
                  <RAGBadge status={row.ragStatus} size="sm" />
                </div>
                <p className="text-[13px] text-[#0F172A]">
                  <span className="font-semibold">{SIGNAL_LABELS[row.signal]}</span>
                </p>
                <p className="text-[11px] text-[#64748B] mt-1">
                  {mqlRevenueGap > 0
                    ? `Revenue share exceeds MQL share by ${mqlRevenueGap}pp — quality is strong. Invest in top-of-funnel volume.`
                    : mqlRevenueGap < 0
                    ? `MQL share exceeds revenue share by ${Math.abs(mqlRevenueGap)}pp — review qualification criteria or sales handoff.`
                    : 'MQL and revenue share are balanced.'
                  }
                </p>
              </div>
            )
          })}
        </div>

        {/* Detail table */}
        <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card overflow-hidden">
          <div className="px-4 py-3 border-b border-[#CBD5E1]">
            <h2 className="text-[15px] font-semibold text-[#0F172A]">Pipeline Share Detail</h2>
          </div>
          <div className="p-4">
            {isLoading ? (
              <div className="space-y-2" aria-label="Loading pipeline data">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonLoader key={i} height="h-8" />
                ))}
              </div>
            ) : (
              <DataTable
                columns={columns}
                rows={rows}
                emptyTitle="No pipeline data"
                emptyBody="Connect your CRM to populate ICP pipeline balance data."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
