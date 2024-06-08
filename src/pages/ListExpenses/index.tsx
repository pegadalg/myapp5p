// hooks
import { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Header } from '../../components/Header'
import {
  Container,
  Transactions
} from './styles'

import { TransactionExpenses }
  from '../../components/TransactionsExpenses'
import { spendingGetAll } from '../../spending/spendingGetAll'
import { Alert, FlatList } from 'react-native'
import { SpendingStorageDTO } from '../../spending/SpendingStorageDTO'


export function ListExpenses() {
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])


  async function loadDataSpending() {
    try{
      const data = await spendingGetAll()
      setDataExpenses(data)
    // console.log(data)
    }
    catch(error){
      console.log(error)
      Alert.alert('Erro','Erro ao carregar os gastos')
    }

  }

  // useEffect(() => {
  //   loadDataSpending()
  // }, []) //somente executa uma vez se o colchetes estiver vazio

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  }, []))

  return (
    <Container>
      <Header title='Listagem de Gastos' />

      {/* <Transactions> */}
      <FlatList
        data={dataExpenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TransactionExpenses data={item}
            
          />
        )       
      }
      showsVerticalScrollIndicator={false}
      />
     
      {/* </Transactions> */}

    </Container>
  )
}


