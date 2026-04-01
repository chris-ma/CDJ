import { useMemo } from 'react'
import { generateAlerts, getTopAlert } from '@/lib/alerts'
import { useWaterfallQuery } from '@/hooks/queries/useWaterfallQuery'
import { useContentQuery } from '@/hooks/queries/useContentQuery'
import { useSEOQuery } from '@/hooks/queries/useSEOQuery'
import { usePipelineQuery } from '@/hooks/queries/usePipelineQuery'
import { useAppStore } from '@/store/useAppStore'
import type { Alert } from '@/types/cdj'

export function useAlerts(): {
  alerts: Alert[]
  visibleAlerts: Alert[]
  topAlert: Alert | null
} {
  const { dismissedAlertIds } = useAppStore()

  const { data: waterfallA } = useWaterfallQuery('icp-a')
  const { data: waterfallB } = useWaterfallQuery('icp-b')
  const { data: contentAssets } = useContentQuery('all')
  const { data: keywords } = useSEOQuery('all')
  const { data: pipelineRows } = usePipelineQuery()

  const alerts = useMemo(() => {
    if (!waterfallA || !waterfallB || !contentAssets || !keywords || !pipelineRows) return []
    return generateAlerts({ waterfallIcpA: waterfallA, waterfallIcpB: waterfallB, contentAssets, keywords, pipelineRows })
  }, [waterfallA, waterfallB, contentAssets, keywords, pipelineRows])

  const visibleAlerts = useMemo(
    () => alerts.filter(a => !dismissedAlertIds.has(a.id)),
    [alerts, dismissedAlertIds],
  )

  const topAlert = useMemo(() => getTopAlert(visibleAlerts), [visibleAlerts])

  return { alerts, visibleAlerts, topAlert }
}
