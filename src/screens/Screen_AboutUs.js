import React, { Component } from 'react';
import Header from '../components/Header'
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Button,
  Easing,
  ScrollView,
} from "react-native";
import { styles } from '../styles/Styles';
import { Card_AB } from '../components/Card_AB';
import { CardStyleInterpolators } from '@react-navigation/stack';

export class Screen_AboutUs extends Component {
  
  render (){

    return (


        <View style={{flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flex:1
                      }}>
          <Card_AB name={'Lautaro Ortiz'}  />
          <Card_AB name={'Valentina Nies'} />
          <Card_AB name={'Joaquin Pasos'} />
        </View>
        
        

  )}  

}

/* comente el footer xq quedaba mal en laa pagina

       <View style={{flexDirection: "row",
                    backgroundColor: "#a9d6e5",
                    justifyContent: "space-around",
                    alignItems: "center", 
                    marginBottom: 0, 
                    fontSize:30, 
                    padding:25,
                    }} >
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



*/

