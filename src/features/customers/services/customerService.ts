import { supabase } from '@/lib/supabase'
import { getUserCompanyId } from '@/shared/services/sessionService'
import { Customer } from '../types/customer'

export async function getCustomers(): Promise<Customer[]> {
  const companyId = await getUserCompanyId()

  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('company_id', companyId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function createCustomer(customer: Partial<Customer>) {
  const companyId = await getUserCompanyId()

  const { data, error } = await supabase
    .from('customers')
    .insert({
      ...customer,
      company_id: companyId,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCustomer(id: string, customer: Partial<Customer>) {
  const { data, error } = await supabase
    .from('customers')
    .update(customer)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteCustomer(id: string) {
  const { error } = await supabase
    .from('customers')
    .delete()
    .eq('id', id)

  if (error) throw error
}
