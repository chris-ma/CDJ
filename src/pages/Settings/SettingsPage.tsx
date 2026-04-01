import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[900px] mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-[#0F172A]" aria-hidden="true" />
        <h1 className="text-[20px] font-semibold text-[#0F172A]">Settings</h1>
      </div>
      <div className="bg-white rounded-[12px] border border-[#CBD5E1] shadow-card p-8 text-center">
        <p className="text-[17px] font-semibold text-[#0F172A] mb-1">Coming in Phase 4</p>
        <p className="text-[13px] text-[#64748B]">
          Data source connections, benchmark configuration, and ICP tagging settings
          will be available once CRM integration is confirmed.
        </p>
      </div>
    </div>
  )
}
