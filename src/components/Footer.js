import React, { Component } from 'react';
import {styles} from '../styles/Styles';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default class Footer extends Component {
  
// constructor() {
//   super();
//   this.state = {
//   }
// }  

  render (){
    return (

      <View style={styles.container_footer}>
            
      <TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
      <Image source={require("../img/back.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")}> 
      <Image source={require("../img/papelera.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
      <Image source={require("../img/home.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => this.props.navigation.navigate("Contactos")}> 
      <Image source={require("../img/contactos.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
      <Image source={require("../img/aboutUs.png")} style={styles.home} />
      </TouchableOpacity>
      </View>
            

  )}  

}