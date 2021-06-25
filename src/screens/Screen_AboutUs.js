import React, { Component } from 'react';
import Header from '../components/Header'
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
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
      <ScrollView>
      <View>
        <Header/>
    <View style={styles.container_card_about}>
      <View style={styles.card_about}>
        <Text>Valentina Nies </Text>
      </View>
      <View style={styles.card_about}>
          <Text>Lautaro Martin Ortiz</Text>
      </View>
      <View style={styles.card_about}>
          <Text>Joaquin Pazos Pesquero</Text>
      </View>
    </View>
    

<View style={styles.container_footer}>
            
<TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
<Image source={require("../img/back.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")}> 
<Image source={require("../img/papelera.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("home")}> 
<Image source={require("../img/home.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("Contactos")}> 
<Image source={require("../img/contactos.png")} style={styles.home} />
</TouchableOpacity>
<TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
<Image source={require("../img/aboutUs.png")} style={styles.home} />
</TouchableOpacity>
</View>
</View>
</ScrollView>
  )}  

}

