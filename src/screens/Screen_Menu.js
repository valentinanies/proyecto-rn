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

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}>Contactos</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}>Buscar</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}>Importar</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}>Papelera</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}>About Us</Text>
            </View>
        </TouchableOpacity>

      </View>

    )
  }
}
