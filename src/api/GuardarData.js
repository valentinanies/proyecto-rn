import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage"

export async function GuardarData(key, value){
    try{
      const jsonUsers = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonUsers)
      console.log("Datos Almacenados");
    } catch(error){
      console.log(error)
    }
  }