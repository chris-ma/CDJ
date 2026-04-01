import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutGrid,
  TrendingDown,
  Microscope,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  FileText,
  Search,
  Users,
} from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { ICPSelector } from '@/components/ICPSelector/ICPSelector'
import { useAlerts } from '@/hooks/useAlerts'
import type { ComponentType } from 'react'

type LeafItem = { path: string; label: string; icon: ComponentType<{ className?: string; 'aria-hidden'?: 'true' }> }
type GroupItem = { label: string; icon: ComponentType<{ className?: string; 'aria-hidden'?: 'true' }>; children: LeafItem[] }
type NavItem = LeafItem | GroupItem

const NAV_ITEMS: NavItem[] = [
  { path: '/scorecard', label: 'Exec Scorecard', icon: LayoutGrid },
  { path: '/waterfall', label: 'CDJ Waterfall', icon: TrendingDown },
  {
    label: 'Diagnostics',
    icon: Microscope,
    children: [
      { path: '/diagnostics/content', label: 'Content', icon: FileText },
      { path: '/diagnostics/seo', label: 'SEO', icon: Search },
      { path: '/diagnostics/pipeline', label: 'Pipeline', icon: Users },
    ],
  },
  { path: '/alerts', label: 'Alerts', icon: Bell },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const { selectedICP, setSelectedICP, sidebarCollapsed, toggleSidebar } = useAppStore()
  const { visibleAlerts } = useAlerts()
  const location = useLocation()
  const isDiagnosticsActive = location.pathname.startsWith('/diagnostics')

  const collapsed = sidebarCollapsed

  return (
    <aside
      aria-label="Main navigation"
      className={[
        'hidden md:flex flex-col h-full bg-[#0F2B4C] text-white',
        'transition-[width] duration-[var(--duration-base)]',
        collapsed ? 'w-12' : 'w-60',
        'flex-shrink-0 border-r border-white/10',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-4 border-b border-white/10">
        {!collapsed && (
          <span className="text-[13px] font-semibold text-white/80 tracking-wide uppercase">CDJ</span>
        )}
        <button
          onClick={toggleSidebar}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-white/70 hover:text-white ml-auto"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* ICP Selector */}
      {!collapsed && (
        <div className="px-3 py-3 border-b border-white/10">
          <p className="text-[11px] text-white/50 uppercase tracking-wide mb-2">Segment</p>
          <ICPSelector
            value={selectedICP}
            onChange={setSelectedICP}
            className="!border-white/20 !bg-white/10"
          />
        </div>
      )}

      {/* Nav items */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {NAV_ITEMS.map(item => {
          if ('children' in item) {
            const isActive = isDiagnosticsActive
            return (
              <div key={item.label}>
                <div
                  className={[
                    'flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium',
                    isActive ? 'text-white bg-white/10' : 'text-white/70',
                  ].join(' ')}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  {!collapsed && <span>{item.label}</span>}
                </div>
                {!collapsed && (
                  <div className="pl-8">
                    {(item as GroupItem).children.map(child => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) => [
                          'flex items-center gap-2 px-3 py-2 text-[13px] rounded-[6px] mx-1 transition-colors',
                          isActive
                            ? 'bg-[#DBEAFE] text-[#1D4ED8] font-semibold border-l-[3px] border-l-[#1D4ED8]'
                            : 'text-white/60 hover:text-white hover:bg-white/10',
                        ].join(' ')}
                      >
                        <child.icon className="w-4 h-4" aria-hidden="true" />
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => [
                'flex items-center gap-3 px-3 py-2.5 mx-1 rounded-[6px] text-[13px] font-medium transition-colors relative',
                isActive
                  ? 'bg-[#DBEAFE] text-[#1D4ED8] font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10',
              ].join(' ')}
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1D4ED8] rounded-l-[6px]" aria-hidden="true" />}
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  {!collapsed && (
                    <span className="flex-1">{item.label}</span>
                  )}
                  {!collapsed && item.label === 'Alerts' && visibleAlerts.length > 0 && (
                    <span className="bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      {visibleAlerts.length}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
