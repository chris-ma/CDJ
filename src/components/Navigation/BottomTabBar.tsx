import { NavLink } from 'react-router-dom'
import { LayoutGrid, TrendingDown, Microscope, Bell, Settings } from 'lucide-react'
import { useAlerts } from '@/hooks/useAlerts'

const TABS = [
  { path: '/scorecard', label: 'Scorecard', icon: LayoutGrid },
  { path: '/waterfall', label: 'Waterfall', icon: TrendingDown },
  { path: '/diagnostics/content', label: 'Diagnose', icon: Microscope },
  { path: '/alerts', label: 'Alerts', icon: Bell },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export function BottomTabBar() {
  const { visibleAlerts } = useAlerts()

  return (
    <nav
      aria-label="Main navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F2B4C] border-t border-white/10 flex"
    >
      {TABS.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => [
            'flex-1 flex flex-col items-center justify-center py-2 gap-0.5 min-h-[56px]',
            'text-[11px] font-medium transition-colors relative',
            isActive ? 'text-[#60A5FA]' : 'text-white/50 hover:text-white/80',
          ].join(' ')}
        >
          <span className="relative">
            <tab.icon className="w-5 h-5" aria-hidden="true" />
            {tab.label === 'Alerts' && visibleAlerts.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5">
                {visibleAlerts.length}
              </span>
            )}
          </span>
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}
