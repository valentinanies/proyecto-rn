import React, { Component } from 'react';
import Header from '../components/Header'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
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
        <Header/>
    <View>
     <Text style={styles.stiloTitleAB}>Alumnos de la carrera Negocios Digitales en la Universidad de San Andrés</Text>
      <Text>Nies Valentina</Text>
      <Text>Ortiz Lautaro Martin</Text>
      <Text>Pazos Pesquero Joaquin</Text>
    </View>

<View style={styles.container_footer}>
            
<TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
<Image source={require("../img/back.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
<Image source={require("../img/home.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
<Image source={require("../img/us.png")} style={styles.home} />
</TouchableOpacity>
</View>
</View>
  
  )}  

}

