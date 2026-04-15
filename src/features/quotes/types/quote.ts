export type QuoteStatus =
  | 'draft'
  | 'sent'
  | 'approved'
  | 'rejected'

export type QuoteItemType =
  | 'labor'
  | 'material'
  | 'extra'

export type Quote = {
  id: string
  customer_id: string
  service_id?: string | null
  status: QuoteStatus
  total: number
  company_id: string
  created_at?: string
}

export type QuoteItem = {
  id: string
  quote_id: string
  description: string
  type: QuoteItemType
  quantity: number
  unit_price: number
  total: number
}
