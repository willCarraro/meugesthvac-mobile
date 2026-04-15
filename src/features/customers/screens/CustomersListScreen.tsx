
import { View, FlatList, Text, Button } from 'react-native'
import { useCustomers } from '../hooks/useCustomers'
import { CustomerCard } from '../components/CustomerCard'
import { useRouter } from 'expo-router'

export default function CustomersListScreen() {
  const { customers, loading } = useCustomers()
  const router = useRouter()

  if (loading) return <Text>Carregando...</Text>

  return (
    <View className="flex-1 p-4">
      <Button
        title="Novo Cliente"
        onPress={() => router.push('/customers/new')}
      />

      <FlatList
        data={customers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CustomerCard
            customer={item}
            onPress={() =>
              router.push(`/customers/${item.id}`)
            }
          />
        )}
      />
    </View>
  )
}
