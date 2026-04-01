import { useQuery } from '@tanstack/react-query'
import { getPipelineData } from '@/services/pipeline.service'

export function usePipelineQuery() {
  return useQuery({
    queryKey: ['pipeline'],
    queryFn: getPipelineData,
  })
}
