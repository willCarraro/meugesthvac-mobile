import { supabase } from '@/lib/supabase'
import { getUserCompanyId } from '@/shared/services/sessionService'

export async function fetchCustomers() {
  const companyId = await getUserCompanyId()

  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('company_id', companyId)

  if (error) throw error
  return data
}
