import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { SPENDING_COLLECTION } from "../storage/spendingConfig";
import { SpendingStorageDTO } from "./SpendingStorageDTO";

export async function spendingGetAll() {

    try
    {
        const storage = await AsyncStorage.getItem(SPENDING_COLLECTION)

        const spending: SpendingStorageDTO[] = storage ? JSON.parse(storage) : []

        return spending

    }
    catch(error)
    {
        Alert.alert('Atenção','Não foi possivel fazer a leitura dos dados!!')
        throw error;
    }



}