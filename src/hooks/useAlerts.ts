import { useMemo } from 'react'
import { generateAlerts, getTopAlert } from '@/lib/alerts'
import { getWaterfallData } from '@/services/waterfall.service'
import { getContentData } from '@/services/content.service'
import { getSEOData } from '@/services/seo.service'
import { getPipelineData } from '@/services/pipeline.service'
import { useAppStore } from '@/store/useAppStore'
import type { Alert } from '@/types/cdj'

export function useAlerts(): {
  alerts: Alert[]
  visibleAlerts: Alert[]
  topAlert: Alert | null
} {
  const { dismissedAlertIds } = useAppStore()

  const alerts = useMemo(() => generateAlerts({
    waterfallIcpA: getWaterfallData('icp-a'),
    waterfallIcpB: getWaterfallData('icp-b'),
    contentAssets: getContentData('all'),
    keywords: getSEOData('all'),
    pipelineRows: getPipelineData(),
  }), [])

  const visibleAlerts = useMemo(
    () => alerts.filter(a => !dismissedAlertIds.has(a.id)),
    [alerts, dismissedAlertIds],
  )

  const topAlert = useMemo(() => getTopAlert(visibleAlerts), [visibleAlerts])

  return { alerts, visibleAlerts, topAlert }
}
