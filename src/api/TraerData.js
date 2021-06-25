import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export async function TraerData(key) {
    try{
        const jsonUsers = await AsyncStorage.getItem(key)
        return jsonUsers != null ? JSON.parse(jsonUsers) : [];
    } catch (error){
        console.log(error);
    }
}

