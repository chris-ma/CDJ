import { create } from 'zustand'
import type { ICP, SubSegment } from '@/types/cdj'

interface AppState {
  selectedICP: ICP
  selectedSubSegment: SubSegment | null
  dismissedAlertIds: Set<string>
  sidebarCollapsed: boolean

  setSelectedICP: (icp: ICP) => void
  setSelectedSubSegment: (sub: SubSegment | null) => void
  dismissAlert: (id: string) => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedICP: 'all',
  selectedSubSegment: null,
  dismissedAlertIds: new Set(),
  sidebarCollapsed: false,

  // Reset sub-segment whenever the top-level segment changes
  setSelectedICP: (icp) => set({ selectedICP: icp, selectedSubSegment: null }),

  setSelectedSubSegment: (sub) => set({ selectedSubSegment: sub }),

  dismissAlert: (id) =>
    set((state) => ({
      dismissedAlertIds: new Set([...state.dismissedAlertIds, id]),
    })),

  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}))
