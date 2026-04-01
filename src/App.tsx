import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from '@/components/Navigation/Sidebar'
import { BottomTabBar } from '@/components/Navigation/BottomTabBar'
import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader'

const ExecScorecard  = lazy(() => import('@/pages/ExecScorecard/ExecScorecard'))
const CDJWaterfall   = lazy(() => import('@/pages/CDJWaterfall/CDJWaterfall'))
const ContentPanel   = lazy(() => import('@/pages/Diagnostics/ContentPanel/ContentPanel'))
const SEOPanel       = lazy(() => import('@/pages/Diagnostics/SEOPanel/SEOPanel'))
const PipelinePanel  = lazy(() => import('@/pages/Diagnostics/PipelinePanel/PipelinePanel'))
const AlertsPage     = lazy(() => import('@/pages/Alerts/AlertsPage'))
const SettingsPage   = lazy(() => import('@/pages/Settings/SettingsPage'))

function PageLoader() {
  return (
    <div className="p-6 space-y-4" aria-live="polite" aria-busy="true" aria-label="Loading page">
      <SkeletonLoader height="h-8" width="w-48" />
      <SkeletonLoader height="h-4" width="w-full" />
      <SkeletonLoader height="h-4" width="w-3/4" />
      <SkeletonLoader height="h-64" width="w-full" rounded="rounded-lg" />
    </div>
  )
}

export default function App() {
  return (
    <div className="flex h-full">
      <Sidebar />

      <main
        id="main-content"
        className="flex-1 overflow-y-auto bg-[#F1F5F9] pb-14 md:pb-0"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/scorecard" replace />} />
            <Route path="/scorecard" element={<ExecScorecard />} />
            <Route path="/waterfall" element={<CDJWaterfall />} />
            <Route path="/diagnostics/content" element={<ContentPanel />} />
            <Route path="/diagnostics/seo" element={<SEOPanel />} />
            <Route path="/diagnostics/pipeline" element={<PipelinePanel />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/scorecard" replace />} />
          </Routes>
        </Suspense>
      </main>

      <BottomTabBar />
    </div>
  )
}
