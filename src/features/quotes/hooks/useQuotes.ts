import { useEffect, useState } from 'react'
import {
  getQuotes,
  createQuote,
  updateQuoteStatus,
} from '../services/quoteService'
import { Quote } from '../types/quote'

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const data = await getQuotes()
    setQuotes(data)
    setLoading(false)
  }

  async function create(customer_id: string) {
    const newQuote = await createQuote(customer_id)
    setQuotes(prev => [newQuote, ...prev])
  }

  async function updateStatus(id: string, status: Quote['status']) {
    const updated = await updateQuoteStatus(id, status)

    setQuotes(prev =>
      prev.map(q => (q.id === id ? updated : q))
    )
  }

  useEffect(() => {
    load()
  }, [])

  return {
    quotes,
    loading,
    create,
    updateStatus,
    reload: load,
  }
}
