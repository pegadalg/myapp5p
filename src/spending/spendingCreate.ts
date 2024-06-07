import AsyncStorage 
from "@react-native-async-storage/async-storage";

import { SpendingStorageDTO } from "./SpendingStorageDTO";


import { SPENDING_COLLECTION } from "../storage/spendingConfig";
import { Alert } from "react-native";
import { spendingGetAll } from "./spendingGetAll";

export async function SpendingCreate(newSpending: SpendingStorageDTO){

try
{
    const storageSpending = await spendingGetAll()

    const storage = [...storageSpending, newSpending]

   await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(storage))
}

catch(error) 
{
    Alert.alert('Atenção','Não foi possivel fazer a gravação')
    console.log('Não foi possivel fazer a gravação')
    throw error;
}












}