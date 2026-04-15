import { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useCustomers } from '../hooks/useCustomers'

export function CustomerForm() {
  const { create } = useCustomers()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit() {
    await create({ name, phone, email })
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <View className="p-4 gap-3">
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Telefone" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <Button title="Salvar cliente" onPress={handleSubmit} />
    </View>
  )
}
