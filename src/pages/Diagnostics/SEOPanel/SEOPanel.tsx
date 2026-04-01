import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useURLFilters } from '@/hooks/useURLFilters'
import { useSEOQuery } from '@/hooks/queries/useSEOQuery'
import { ContextBar } from '@/pages/Diagnostics/ContextBar'
import { RAGBadge } from '@/components/RAGBadge/RAGBadge'
import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader'
import { RankSparkline } from './RankSparkline'
import { ALL_STAGES, CDJ_STAGE_LABELS, ICP_SUB_SEGMENTS, SUB_SEGMENT_LABELS } from '@/types/cdj'
import type { CDJStage, SubSegment } from '@/types/cdj'
import type { KeywordRow, GapStatus } from '@/types/seo'

const GAP_LABELS: Record<GapStatus, string> = {
  critical: 'CRITICAL GAP',
  weak: 'WEAK',
  strong: 'STRONG',
  'blind-spot': 'BLIND SPOT',
}

const GAP_COLORS: Record<GapStatus, string> = {
  critical: 'text-[#991B1B]',
  weak: 'text-[#92400E]',
  strong: 'text-[#166534]',
  'blind-spot': 'text-[#64748B]',
}

const INTENT_LABELS: Record<KeywordRow['intentType'], string> = {
  'problem-aware': 'Problem-aware',
  'category-aware': 'Category-aware',
  'solution-aware': 'Solution-aware',
  'decision': 'Decision',
  'retention': 'Retention',
}

interface StageAccordionProps {
  stage: CDJStage
  keywords: KeywordRow[]
  showStageBadge?: boolean
}

interface SubSegmentAccordionProps {
  subSegment: SubSegment
  keywords: KeywordRow[]
}

function StageAccordion({ stage, keywords, showStageBadge = false }: StageAccordionProps) {
  const [open, setOpen] = useState(false)

  if (keywords.length === 0) return null

  const worstStatus = keywords.some(k => k.ragStatus === 'red')
    ? 'red'
    : keywords.some(k => k.ragStatus === 'amber')
    ? 'amber'
    : keywords.some(k => k.ragStatus === 'grey')
    ? 'grey'
    : 'green'

  return (
    <div className="border border-[#CBD5E1] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {open
            ? <ChevronDown className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
            : <ChevronRight className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
          }
          <span className="text-[15px] font-semibold text-[#0F172A]">{CDJ_STAGE_LABELS[stage]}</span>
          <span className="text-[11px] text-[#64748B]">{keywords.length} {keywords.length === 1 ? 'keyword' : 'keywords'}</span>
        </div>
        <RAGBadge status={worstStatus} size="sm" stage={stage} />
      </button>

      {open && (
        <div className="divide-y divide-[#CBD5E1] border-t border-[#CBD5E1]">
          {keywords.map(kw => (
            <div key={kw.id} className="px-4 py-3 bg-white grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] gap-3 items-center">
              <div>
                <p className="text-[13px] font-medium text-[#0F172A]">"{kw.exampleQuery}"</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-[11px] text-[#64748B]">{INTENT_LABELS[kw.intentType]}</p>
                  {showStageBadge && (
                    <span className="text-[10px] font-medium text-[#475569] bg-[#F1F5F9] border border-[#CBD5E1] rounded px-1.5 py-0.5">
                      {CDJ_STAGE_LABELS[kw.stage]}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-center">
                <p className="text-[11px] text-[#64748B]">Rank</p>
                <p className="text-[15px] font-bold font-mono text-[#0F172A]">
                  {kw.rank !== null ? `#${kw.rank}` : '—'}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#64748B] mb-1">6-week trend</p>
                <RankSparkline history={kw.rankHistory} />
              </div>
              <div className="text-right">
                <span className={`text-[11px] font-bold ${GAP_COLORS[kw.gapStatus]}`}>
                  {GAP_LABELS[kw.gapStatus]}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SubSegmentAccordion({ subSegment, keywords }: SubSegmentAccordionProps) {
  const [open, setOpen] = useState(false)

  if (keywords.length === 0) return null

  const worstStatus = keywords.some(k => k.ragStatus === 'red')
    ? 'red'
    : keywords.some(k => k.ragStatus === 'amber')
    ? 'amber'
    : keywords.some(k => k.ragStatus === 'grey')
    ? 'grey'
    : 'green'

  return (
    <div className="border border-[#CBD5E1] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {open
            ? <ChevronDown className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
            : <ChevronRight className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
          }
          <span className="text-[15px] font-semibold text-[#0F172A]">{SUB_SEGMENT_LABELS[subSegment]}</span>
          <span className="text-[11px] text-[#64748B]">{keywords.length} {keywords.length === 1 ? 'keyword' : 'keywords'}</span>
        </div>
        <RAGBadge status={worstStatus} size="sm" />
      </button>

      {open && (
        <div className="divide-y divide-[#CBD5E1] border-t border-[#CBD5E1]">
          {ALL_STAGES.map(s => {
            const stageKeywords = keywords.filter(k => k.stage === s)
            return (
              <StageAccordion key={s} stage={s} keywords={stageKeywords} showStageBadge={false} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function SEOPanel() {
  const { selectedICP, setSelectedICP, selectedSubSegment, setSelectedSubSegment } = useAppStore()
  const { stage } = useURLFilters()

  const { data: keywords, isLoading, isError } = useSEOQuery(selectedICP, stage, selectedSubSegment)

  // Show sub-segment grouping when a specific ICP is selected but no sub-segment filter is active
  const showSubSegmentView = selectedICP !== 'all' && selectedSubSegment === null

  const subSegments = showSubSegmentView ? ICP_SUB_SEGMENTS[selectedICP as Exclude<typeof selectedICP, 'all'>] : []

  return (
    <div className="flex flex-col h-full">
      <ContextBar
        icp={selectedICP}
        stage={stage}
        onICPChange={setSelectedICP}
        subSegment={selectedSubSegment}
        onSubSegmentChange={setSelectedSubSegment}
        panelTitle="SEO & Keyword Gap Map"
      />

      <div className="p-4 md:p-6 max-w-[1280px] mx-auto w-full">
        <div className="mb-4">
          <h1 className="text-[20px] font-semibold text-[#0F172A]">SEO & Keyword Gap Map</h1>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            {showSubSegmentView
              ? 'Visibility by sub-segment — expand a segment to see keyword gaps by CDJ stage.'
              : 'Visibility by CDJ intent stage — organised by where in the journey you are (or aren\'t) ranking.'}
          </p>
        </div>

        {isError && (
          <div className="rounded-[8px] border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-3 text-[13px] text-[#991B1B] mb-4">
            Failed to load SEO data. Please refresh the page.
          </div>
        )}

        {isLoading ? (
          <div className="space-y-3" aria-label="Loading SEO data">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonLoader key={i} height="h-12" rounded="rounded-[8px]" />
            ))}
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {showSubSegmentView
                ? subSegments.map(ss => {
                    const ssKeywords = (keywords ?? []).filter(k => k.subSegment === ss)
                    return <SubSegmentAccordion key={ss} subSegment={ss} keywords={ssKeywords} />
                  })
                : ALL_STAGES.map(s => {
                    const stageKeywords = (keywords ?? []).filter(k => k.stage === s)
                    return <StageAccordion key={s} stage={s} keywords={stageKeywords} />
                  })
              }
            </div>

            {(keywords ?? []).length === 0 && (
              <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-8 text-center mt-4">
                <p className="text-[17px] font-semibold text-[#0F172A] mb-1">No keywords configured</p>
                <p className="text-[13px] text-[#64748B]">
                  Configure ICP-specific keyword sets in BrightEdge to populate this panel.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
