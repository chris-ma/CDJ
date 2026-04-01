import { useNavigate } from 'react-router-dom'
import type { ScorecardCell } from '@/types/metrics'
import type { CDJStage, ICP, SubSegment } from '@/types/cdj'
import { ALL_STAGES, CDJ_STAGE_LABELS, ICP_LABELS, RAG_STATUS_LABELS, SUB_SEGMENT_LABELS } from '@/types/cdj'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { formatPercent, formatDelta } from '@/lib/formatters'

interface ScorecardTableProps {
  cells: ScorecardCell[]
  subSegment?: SubSegment | null
  loading?: boolean
}

interface RowHeader {
  key: string
  label: string
  icp: Exclude<ICP, 'all'>
}

function CellTooltip({ cell }: { cell: ScorecardCell }) {
  return (
    <span className="sr-only">
      {RAG_STATUS_LABELS[cell.status]}:
      {formatPercent(cell.conversionRate)} vs {formatPercent(cell.benchmark)} benchmark
      ({formatDelta(cell.deltaPercent)})
    </span>
  )
}

export function ScorecardTable({ cells, subSegment = null, loading = false }: ScorecardTableProps) {
  const navigate = useNavigate()

  // Derive row headers from the cells present (handles all/icp-a/icp-b/sub-segment views)
  const icpKeys = [...new Set(cells.map(c => c.icp as Exclude<ICP, 'all'>))]
  const rowHeaders: RowHeader[] = icpKeys.map(icp => ({
    key: subSegment ? subSegment : icp,
    label: subSegment ? SUB_SEGMENT_LABELS[subSegment] : ICP_LABELS[icp],
    icp,
  }))

  function getCell(icp: Exclude<ICP, 'all'>, stage: CDJStage): ScorecardCell | undefined {
    return cells.find(c => c.icp === icp && c.stage === stage)
  }

  function handleCellClick(cell: ScorecardCell) {
    if (cell.status === 'red' || cell.status === 'amber') {
      navigate(`/diagnostics/content?icp=${cell.icp}&stage=${cell.stage}`)
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-3" aria-label="Loading scorecard" aria-busy="true">
        {rowHeaders.map(r => (
          <div key={r.key} className="h-16 bg-gray-200 rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-card">
          <thead>
            <tr className="bg-[#0F2B4C] text-white">
              <th scope="col" className="px-4 py-3 text-left text-[13px] font-semibold w-36">Segment</th>
              {ALL_STAGES.map(stage => (
                <th key={stage} scope="col" className="px-4 py-3 text-center text-[13px] font-semibold">
                  {CDJ_STAGE_LABELS[stage]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowHeaders.map(({ key, label, icp }, rowIdx) => (
              <tr key={key} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#F1F5F9]'}>
                <td className="px-4 py-3 text-[13px] font-semibold text-[#0F172A]">{label}</td>
                {ALL_STAGES.map(stage => {
                  const cell = getCell(icp, stage)
                  if (!cell) return (
                    <td key={stage} className="px-4 py-3 text-center">
                      <RAGBadge status="grey" size="sm" />
                    </td>
                  )
                  const isClickable = cell.status === 'red' || cell.status === 'amber'
                  return (
                    <td key={stage} className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleCellClick(cell)}
                        disabled={!isClickable}
                        aria-label={`${label} ${CDJ_STAGE_LABELS[stage]}: ${RAG_STATUS_LABELS[cell.status]}, ${formatPercent(cell.conversionRate)} conversion (benchmark ${formatPercent(cell.benchmark)})`}
                        className={[
                          'inline-flex justify-center rounded-pill transition-all',
                          isClickable
                            ? 'cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]'
                            : 'cursor-default',
                        ].join(' ')}
                      >
                        <RAGBadge status={cell.status} size="md" stage={stage} />
                        <CellTooltip cell={cell} />
                      </button>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — stacked cards */}
      <div className="md:hidden space-y-4">
        {rowHeaders.map(({ key, label, icp }) => (
          <div key={key} className="bg-white rounded-lg shadow-card border border-[#CBD5E1] overflow-hidden">
            <div className="bg-[#0F2B4C] px-4 py-2">
              <p className="text-white text-[13px] font-semibold">{label}</p>
            </div>
            <div className="divide-y divide-[#CBD5E1]">
              {ALL_STAGES.map(stage => {
                const cell = getCell(icp, stage)
                if (!cell) return (
                  <div key={stage} className="flex items-center justify-between px-4 py-3">
                    <span className="text-[13px] text-[#0F172A]">{CDJ_STAGE_LABELS[stage]}</span>
                    <RAGBadge status="grey" size="sm" />
                  </div>
                )
                const isClickable = cell.status === 'red' || cell.status === 'amber'
                return (
                  <button
                    key={stage}
                    onClick={() => handleCellClick(cell)}
                    disabled={!isClickable}
                    className={[
                      'w-full flex items-center justify-between px-4 py-3',
                      isClickable ? 'cursor-pointer hover:bg-[#F1F5F9] active:bg-[#E2E8F0]' : 'cursor-default',
                    ].join(' ')}
                    aria-label={`${CDJ_STAGE_LABELS[stage]}: ${RAG_STATUS_LABELS[cell.status]}`}
                  >
                    <span className="text-[13px] text-[#0F172A]">{CDJ_STAGE_LABELS[stage]}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#64748B] font-mono">{formatPercent(cell.conversionRate)}</span>
                      <RAGBadge status={cell.status} size="sm" />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
