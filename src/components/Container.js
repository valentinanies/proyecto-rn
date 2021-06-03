import React, { Component } from 'react';
import {styles} from '../styles/Styles';
import { 
  View,
  Text,
} from "react-native";

export default class Container extends Component {
  
constructor() {
  super();
  this.state = {
  }
}  

  render () {
    return(
      <View style={styles.container}>
            <Text style={styles.stiloTitle}>CONTENEDOR</Text>
      </View>
    )
  }

}
