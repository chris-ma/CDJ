import { create } from 'zustand'
import type { ICP } from '@/types/cdj'

interface AppState {
  selectedICP: ICP
  dismissedAlertIds: Set<string>
  sidebarCollapsed: boolean

  setSelectedICP: (icp: ICP) => void
  dismissAlert: (id: string) => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedICP: 'all',
  dismissedAlertIds: new Set(),
  sidebarCollapsed: false,

  setSelectedICP: (icp) => set({ selectedICP: icp }),

  dismissAlert: (id) =>
    set((state) => ({
      dismissedAlertIds: new Set([...state.dismissedAlertIds, id]),
    })),

  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}))
