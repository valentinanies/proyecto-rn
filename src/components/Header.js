import React, { Component } from 'react';
import {styles} from '../styles/Styles';
import { 
  View,
  Text,
} from "react-native";

export default class Header extends Component {
  
constructor() {
  super();
  this.state = {
  }
}  

  render (){
    return (
    <View style={styles.header}>
        <Text style={styles.stiloTitle}></Text>
    </View>
  )}  

}

