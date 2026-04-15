import { useEffect, useState } from 'react'
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from '../services/customerService'
import { Customer } from '../types/customer'

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const data = await getCustomers()
    setCustomers(data)
    setLoading(false)
  }

  async function create(data: Partial<Customer>) {
    const newCustomer = await createCustomer(data)
    setCustomers(prev => [newCustomer, ...prev])
  }

  async function update(id: string, data: Partial<Customer>) {
    const updated = await updateCustomer(id, data)

    setCustomers(prev =>
      prev.map(c => (c.id === id ? updated : c))
    )
  }

  async function remove(id: string) {
    await deleteCustomer(id)
    setCustomers(prev => prev.filter(c => c.id !== id))
  }

  useEffect(() => {
    load()
  }, [])

  return {
    customers,
    loading,
    create,
    update,
    remove,
    reload: load,
  }
}
