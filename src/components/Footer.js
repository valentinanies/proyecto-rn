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
      
      
      <TouchableOpacity>
        <Image source={require("../img/back.png")} style={styles.home}/>
      </TouchableOpacity>
        
      <TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
        <Image source={require("../img/home.png")} style={styles.home} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../img/us.png")} style={styles.home}/>
      </TouchableOpacity>

    </View>

  )}  

}