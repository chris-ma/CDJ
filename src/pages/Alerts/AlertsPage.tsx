import { useAlerts } from '@/hooks/useAlerts'
import { useAppStore } from '@/store/useAppStore'
import { AlertBanner } from '@/components/AlertBanner/AlertBanner'
import { Bell } from 'lucide-react'
import type { Alert } from '@/types/cdj'
import { ICP_LABELS } from '@/types/cdj'

const ALERT_TYPE_LABELS: Record<Alert['type'], string> = {
  'stage-drop-off': 'Stage Drop-Off',
  'content-stall':  'Content Stall',
  'icp-imbalance':  'ICP Imbalance',
  'seo-gap':        'SEO Gap',
}

export default function AlertsPage() {
  const { visibleAlerts, alerts } = useAlerts()
  const { dismissAlert } = useAppStore()

  const dismissedCount = alerts.length - visibleAlerts.length

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[900px] mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-6 h-6 text-[#0F172A]" aria-hidden="true" />
        <div>
          <h1 className="text-[20px] font-semibold text-[#0F172A]">Alerts</h1>
          <p className="text-[13px] text-[#64748B]">
            {visibleAlerts.length} active · {dismissedCount} dismissed
          </p>
        </div>
      </div>

      {visibleAlerts.length === 0 ? (
        <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-12 text-center">
          <Bell className="w-10 h-10 text-[#CBD5E1] mx-auto mb-3" aria-hidden="true" />
          <p className="text-[17px] font-semibold text-[#0F172A] mb-1">No active alerts</p>
          <p className="text-[13px] text-[#64748B]">
            All stages are within expected thresholds.
            {dismissedCount > 0 && ` ${dismissedCount} alert${dismissedCount > 1 ? 's' : ''} dismissed.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {visibleAlerts.map(alert => (
            <div key={alert.id}>
              <div className="flex items-center justify-between mb-1 px-1">
                <span className="text-[11px] text-[#64748B] font-medium uppercase tracking-wide">
                  {ALERT_TYPE_LABELS[alert.type]}
                  {alert.icp !== 'all' && ` · ${ICP_LABELS[alert.icp]}`}
                </span>
              </div>
              <AlertBanner
                variant={alert.severity === 'red' ? 'error' : 'warning'}
                headline={alert.headline}
                body={alert.diagnosis}
                ctaLabel="View details →"
                ctaPath={alert.drillDownPath}
                dismissable
                onDismiss={() => dismissAlert(alert.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
