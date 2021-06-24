import React, {Component} from "react";
import { styles } from "../styles/Styles";
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

export class Screen_Menu extends Component {

  constructor(props){
    super(props);
    this.state={
    }
}

  render(){
    return(

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
    )
  }
}
