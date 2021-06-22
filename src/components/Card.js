import React, { Component } from 'react';
import {styles} from '../styles/Styles';
import { 
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

export default class Card extends Component {
  
constructor() {
  super();
  this.state = {
  }
}  

  render () {
    return(
      <View style={styles.card}>
            <Image style={styles.image} source={{uri: this.props.foto}}/>
            <View style={styles.stiloText}><Text> {this.props.apellido} {this.props.nombre}</Text></View> 
            <View style={styles.stiloText}><Text>{this.props.mail}</Text></View>
            <View style={styles.stiloText}><Text>{this.props.fecha} ({this.props.edad})</Text></View> 
      </View>
    )
  }

}
