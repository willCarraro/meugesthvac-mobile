import { supabase } from '@/lib/supabase'

export async function getUserCompanyId() {
  const { data: session } = await supabase.auth.getSession()

  const userId = session.session?.user.id
  if (!userId) return null

  const { data, error } = await supabase
    .from('users')
    .select('company_id')
    .eq('auth_id', userId)
    .single()

  if (error) throw error

  return data.company_id
}
