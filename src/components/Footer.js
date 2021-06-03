import React, { Component } from 'react';
import {styles} from '../styles/Styles';
import { 
  View,
  Text,
} from "react-native";

export default class Footer extends Component {
  
constructor() {
  super();
  this.state = {
  }
}  

  render (){
    return (

    <View style={styles.footer}>
        <Text >Nies Valentina - Ortiz Lautaro Martin - Pazos Pesquero Joaquin</Text>
    </View>

  )}  

}