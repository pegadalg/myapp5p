import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'
import { Alert } from 'react-native'
import { SpendingCreate } from '../../spending/spendingCreate'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { spendingGetAll } from '../../spending/spendingGetAll'
export function Dashboard() {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [datePurchase, setDatePurchase] = useState('')
  const [category, setCategory] = useState('')
  const [local, setLocal] = useState('')

  const data = {
    id: String(new Date().getTime()),
    name,
    amount,
    datePurchase,
    category,
    local
    
  }
  async function handleAddNewSpending() {
    
    // //limpa o async storage no iOS
    // AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
    // Alert.alert('Atencao','Programa Finalizado')

    // return

     //limpa o async storage no Android
    //  await AsyncStorage.clear()
    //  Alert.alert('Atencao','Programa Finalizado')
    //  return

    if (name.trim() === '' && amount.trim() === '' && datePurchase.trim() === '' && category.trim() === '' && local.trim() === '')
    {
     return Alert.alert("Atenção", "Todos os campos estão em branco")
    }
    
    const data = {
      id: String(new Date().getTime()),
      name,
      amount,
      datePurchase,
      category,
      local
      
    }

    console.log(data)
    setName('')
    setAmount('')
    setDatePurchase('')
    setCategory('')
    setLocal('')

    await SpendingCreate(data)
    const result = await spendingGetAll()
    console.log(result)

  }

    

  


  return (
    <Container
    >
      <Header title='Controle de Gastos' />

      <Input
        placeholder='Descrição'
        placeholderTextColor='#363F5F'
        value={name}
        onChangeText={value => setName(value)}
      />

      <InputAmount
        placeholder='Valor'
        placeholderTextColor='#363F5F'
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      <InputDate
        placeholder='Data Compra'
        placeholderTextColor='#363F5F'
        value={datePurchase}
        onChangeText={value => setDatePurchase(value)}
      />

      <Input
        placeholder='Categoria'
        placeholderTextColor='#363F5F'
        value={category}
        onChangeText={value => setCategory(value)}
      />

      <Input
        placeholder='Local da Compra'
        placeholderTextColor='#363F5F'
        value={local}
        onChangeText={value => setLocal(value)}
      />

      <Button
        title='Adicionar'
        onPress={handleAddNewSpending}
      />

    </Container>
  )
}