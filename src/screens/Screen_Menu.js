import React, {Component} from "react";
import { styles } from "../styles/Styles";
import Header from '../components/Header'
// import Container from './src/components/Container'
import Footer from '../components/Footer'
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

export class Screen_Menu extends Component {

  constructor(props){
    super(props);
    this.state={
    }
}

  render(){
    return(
      <ScrollView>
      <View>
        
        <Header/>
      
            <View style={styles.menu}>
              <Text style={styles.stiloTitle}>MENU</Text>


            <TouchableOpacity onPress={() => this.props.navigation.navigate("Imports")}>
                  <View style={styles.menu_view_button}>
                      <Text style={styles.stiloText}>Importar</Text>
                  </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Contactos')}>
                  <View style={styles.menu_view_button}>
                      <Text style={styles.stiloText}>Contactos</Text>
                  </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Papelera')}>
                  <View style={styles.menu_view_button}>
                      <Text style={styles.stiloText}>Papelera</Text>
                  </View>
            </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.props.navigation.navigate('AboutUs')}>
                  <View style={styles.menu_view_button}>
                      <Text style={styles.stiloText}>Acerca de</Text>
                  </View>
              </TouchableOpacity>

            </View>

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
           
                  </View>
                   </ScrollView>

       
      
    )
  }
}
