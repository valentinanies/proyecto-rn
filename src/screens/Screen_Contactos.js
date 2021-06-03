import React, {Component} from "react";
import { styles } from "../styles/Styles";
import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_Contactos extends Component {

  constructor(props){
    super(props);
    this.state={
      importedUsers: [],
    }
}

async storeData(){
  try{
    const resultado = await AsyncStorage.getItem("Users");
    this.setState({importedUsers: JSON.parse(resultado)})
  } catch(e){
    console.log(e)
  }
}
  render(){

    return(

      <View>
        <Text style={styles.stiloTitle} >Mostramos los valores importados</Text>
        {values}
        
        <TouchableOpacity onPress={ this.getData.bind(this)}>
          <View style={styles.menu_view_button}>
            <Text style={styles.stiloText}>Recuperar datos</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.setState({importedUsers: []})}>
          <View style={styles.menu_view_button}>
            <Text style={styles.stiloText}>Borrar datos importados</Text>
            </View>
        </TouchableOpacity>

      </View>

    )
  }
}