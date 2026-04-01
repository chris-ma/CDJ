import { useState, type ReactNode } from 'react'

export interface Column<T> {
  key: string
  header: string
  render: (row: T) => ReactNode
  sortable?: boolean
  priority?: number    // Lower = higher priority on mobile (default 0)
  mobileHide?: boolean // Hide on mobile
  width?: string
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[]
  rows: T[]
  loading?: boolean
  emptyTitle?: string
  emptyBody?: string
  className?: string
  getRowClassName?: (row: T) => string
}

type SortDir = 'asc' | 'desc'

const SKELETON_ROWS = 5

export function DataTable<T extends { id: string }>({
  columns,
  rows,
  loading = false,
  emptyTitle = 'No data available',
  emptyBody = '',
  className = '',
  getRowClassName,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const visibleColumns = columns.filter(c => !c.mobileHide)

  return (
    <div className={`overflow-x-auto rounded-[8px] border border-[#CBD5E1] ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0F2B4C] text-white text-[13px] font-semibold sticky top-0 z-10">
            {visibleColumns.map(col => (
              <th
                key={col.key}
                scope="col"
                style={{ width: col.width }}
                className="px-3 py-3 text-left whitespace-nowrap"
              >
                {col.sortable ? (
                  <button
                    onClick={() => handleSort(col.key)}
                    className="flex items-center gap-1 hover:text-blue-200 transition-colors"
                    aria-label={`Sort by ${col.header} ${sortKey === col.key ? (sortDir === 'asc' ? 'descending' : 'ascending') : 'ascending'}`}
                  >
                    {col.header}
                    <span aria-hidden="true" className="text-[10px]">
                      {sortKey === col.key ? (sortDir === 'asc' ? '▲' : '▼') : '⬍'}
                    </span>
                  </button>
                ) : (
                  col.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: SKELETON_ROWS }).map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F1F5F9]'}>
                {visibleColumns.map(col => (
                  <td key={col.key} className="px-3 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: col.width ?? '80%' }} />
                  </td>
                ))}
              </tr>
            ))
          ) : rows.length === 0 ? (
            <tr>
              <td colSpan={visibleColumns.length} className="px-4 py-12 text-center">
                <p className="text-[15px] font-medium text-[#0F172A] mb-1">{emptyTitle}</p>
                {emptyBody && <p className="text-[13px] text-[#64748B]">{emptyBody}</p>}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={row.id}
                className={[
                  i % 2 === 0 ? 'bg-white' : 'bg-[#F1F5F9]',
                  'border-b border-[#CBD5E1] last:border-0',
                  'transition-colors duration-[var(--duration-fast)]',
                  getRowClassName?.(row) ?? '',
                ].join(' ')}
              >
                {visibleColumns.map(col => (
                  <td key={col.key} className="px-3 py-[12px] text-[13px] text-[#0F172A]">
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
