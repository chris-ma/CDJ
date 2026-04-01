import { useAppStore } from '@/store/useAppStore'
import { useURLFilters } from '@/hooks/useURLFilters'
import { useContentQuery } from '@/hooks/queries/useContentQuery'
import { ContextBar } from '@/pages/Diagnostics/ContextBar'
import { DataTable, type Column } from '@/components/DataTable/DataTable'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader'
import { VelocityBar } from './VelocityBar'
import { CDJ_STAGE_LABELS } from '@/types/cdj'
import type { ContentAsset } from '@/types/content'

const SIGNAL_LABELS: Record<ContentAsset['signal'], string> = {
  stall: 'STALL',
  accelerator: 'ACCELERATOR',
  'blind-spot': 'BLIND SPOT',
  neutral: 'NEUTRAL',
}

const columns: Column<ContentAsset & { id: string }>[] = [
  {
    key: 'name',
    header: 'Content Asset',
    render: row => (
      <span className={[
        'font-medium',
        row.leadCount < 10 ? 'opacity-60 italic' : '',
      ].join(' ')}>
        {row.name}
        {row.leadCount < 10 && (
          <span
            className="ml-1 text-[11px] text-[#64748B]"
            title="Fewer than 10 leads — insufficient sample for reliable signal."
          >
            ⚠
          </span>
        )}
      </span>
    ),
  },
  {
    key: 'stage',
    header: 'CDJ Stage',
    render: row => CDJ_STAGE_LABELS[row.stage],
    sortable: true,
  },
  {
    key: 'velocity',
    header: 'Stage Velocity',
    render: row => <VelocityBar deltaDays={row.velocityDeltaDays} />,
  },
  {
    key: 'leads',
    header: 'Leads',
    sortable: true,
    render: row => (
      <span className={[
        'font-mono',
        row.leadCount < 10 ? 'opacity-60' : '',
      ].join(' ')}>
        {row.leadCount}
      </span>
    ),
  },
  {
    key: 'signal',
    header: 'Signal',
    render: row => (
      <span className={[
        'text-[13px] font-semibold',
        row.signal === 'stall' ? 'text-[#991B1B]' :
        row.signal === 'accelerator' ? 'text-[#166534]' :
        'text-[#64748B]',
        row.leadCount < 10 ? 'opacity-60' : '',
      ].join(' ')}>
        {SIGNAL_LABELS[row.signal]}
      </span>
    ),
  },
  {
    key: 'status',
    header: 'RAG',
    render: row => (
      <span className={row.leadCount < 10 ? 'opacity-60' : ''}>
        <RAGBadge status={row.ragStatus} size="sm" stage={row.stage} />
      </span>
    ),
  },
]

export default function ContentPanel() {
  const { selectedICP, setSelectedICP } = useAppStore()
  const { stage } = useURLFilters()

  const { data: assets, isLoading, isError } = useContentQuery(selectedICP, stage)

  // Sort: worst stalls first, then accelerators, then blind spots
  const rows = assets
    ? [...assets]
        .sort((a, b) => {
          if (a.velocityDeltaDays === null) return 1
          if (b.velocityDeltaDays === null) return -1
          return (b.velocityDeltaDays ?? 0) - (a.velocityDeltaDays ?? 0)
        })
        .map(a => ({ ...a }))
    : []

  return (
    <div className="flex flex-col h-full">
      <ContextBar
        icp={selectedICP}
        stage={stage}
        onICPChange={setSelectedICP}
        panelTitle="Content Stall / Accelerator"
      />

      <div className="p-4 md:p-6 max-w-[1280px] mx-auto w-full">
        <div className="mb-4">
          <h1 className="text-[20px] font-semibold text-[#0F172A]">Content Stall / Accelerator</h1>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            Assets sorted by velocity impact — worst stalls at top.
            <span className="ml-1 text-[#64748B]">
              Positive days = leads progressing slower than baseline.
            </span>
          </p>
        </div>

        {isError && (
          <div className="rounded-[8px] border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-3 text-[13px] text-[#991B1B] mb-4">
            Failed to load content data. Please refresh the page.
          </div>
        )}

        {isLoading ? (
          <div className="space-y-2" aria-label="Loading content data">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonLoader key={i} height="h-10" />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card overflow-hidden">
            <DataTable
              columns={columns}
              rows={rows}
              emptyTitle="No content assets tracked"
              emptyBody="Tag content assets in your CRM or Marketo to start tracking velocity signals."
              getRowClassName={row =>
                row.leadCount < 10 ? 'opacity-60' : ''
              }
            />
          </div>
        )}

        <p className="mt-3 text-[11px] text-[#64748B]">
          ⚠ Rows with fewer than 10 leads have insufficient sample size for reliable signal.
          Panel requires 8+ weeks of lead progression data for statistical reliability.
        </p>
      </div>
    </div>
  )
}
