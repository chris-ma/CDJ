import { useSearchParams } from 'react-router-dom'
import type { ICP, CDJStage } from '@/types/cdj'

export function useURLFilters(): {
  icp: ICP
  stage: CDJStage | undefined
  setICP: (icp: ICP) => void
  setStage: (stage: CDJStage | undefined) => void
} {
  const [searchParams, setSearchParams] = useSearchParams()

  const icp = (searchParams.get('icp') as ICP) ?? 'all'
  const stage = (searchParams.get('stage') as CDJStage) ?? undefined

  function setICP(newICP: ICP) {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('icp', newICP)
      return next
    }, { replace: true })
  }

  function setStage(newStage: CDJStage | undefined) {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      if (newStage) {
        next.set('stage', newStage)
      } else {
        next.delete('stage')
      }
      return next
    }, { replace: true })
  }

  return { icp, stage, setICP, setStage }
}
