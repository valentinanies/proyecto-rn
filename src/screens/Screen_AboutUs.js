import React, { Component } from 'react';
import { 
  View,
  Text
} from "react-native";
import { styles } from '../styles/Styles';

export class Screen_AboutUs extends Component {
  
constructor() {
  super();
  this.state = {
  }
}  


  render (){
    return (
    <View>
     <Text style={styles.stiloTitleAB}>Alumnos de la carrera Negocios Digitales en la Universidad de San Andrés</Text>
      <Text>Nies Valentina</Text>
      <Text>Ortiz Lautaro Martin</Text>
      <Text>Pazos Pesquero Joaquin</Text>
    </View>
  
  
  )}  

}

