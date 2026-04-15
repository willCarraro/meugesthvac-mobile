import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useAuth } from '@/features/auth/hooks/useAuth'

export default function Layout() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login')
    }
  }, [user, loading])

  return <Stack screenOptions={{ headerShown: false }} />
}
