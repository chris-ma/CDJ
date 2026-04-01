import { useMemo } from 'react'
import { computeRAG, computeDeltaPercent } from '@/lib/rag'
import type { RAGStatus } from '@/types/cdj'

export function useRAGStatus(current: number, benchmark: number): {
  status: RAGStatus
  deltaPercent: number
} {
  return useMemo(() => ({
    status: computeRAG(current, benchmark),
    deltaPercent: computeDeltaPercent(current, benchmark),
  }), [current, benchmark])
}
