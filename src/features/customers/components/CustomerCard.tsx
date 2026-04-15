import { View, Text, Pressable } from 'react-native'
import { Customer } from '../types/customer'

type Props = {
  customer: Customer
  onPress?: () => void
}

export function CustomerCard({ customer, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View className="p-4 bg-white rounded-xl mb-2">
        <Text className="text-lg font-bold">
          {customer.name}
        </Text>
        <Text>{customer.phone}</Text>
        <Text>{customer.email}</Text>
      </View>
    </Pressable>
  )
}
