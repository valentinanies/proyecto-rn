import React, {Component} from "react";
import { styles } from "../styles/Styles";
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_Imports extends Component {

  constructor(props){
    super(props);
    this.state={
      users: [],
    }
}
 
//traer las tarjetas de contacto
componentDidMount(){
  fetch("https://randomuser.me/api/?results=20")
  .then(response => response.json())
  .then (result => {
    this.setState({users: result.results})
  })
}

//guardar en el dispositivo las tarjetas de contacto
async storeData(){
  try{
    const jsonUsers = JSON.stringify(this.state.users);
    await AsyncStorage.setItem("Users", jsonUsers);
    console.log("Datos Almacenados");
  } catch(e){
    console.log(e)
  }
}


//render item
  render(){

    const values = this.state.users.map(item => 
        <Text key = {item.login.uuid}
              style={styles.stiloText}
        >{item.name.first}</Text>
      )

    return(

      <View>
        <Text style={styles.stiloTitle}>Importamos las trajetas</Text>
        {values}
        <TouchableOpacity onPress={ this.storeData.bind(this)}>
          <View style={styles.menu_view_button}>
            <Text style={styles.stiloText}>Guardar datos</Text>
            </View>
        </TouchableOpacity>      
      </View>

    )
  }
}