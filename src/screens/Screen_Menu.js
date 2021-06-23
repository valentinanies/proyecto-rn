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
                <Text style={styles.stiloText}
                onPress={ () => this.props.navigation.navigate('Imports')}
                >Importar</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}
                onPress={ () => this.props.navigation.navigate('Contactos')}
                >Contactos</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}
                onPress={ () => this.props.navigation.navigate('Papelera')}
                >Papelera</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.menu_view_button}>
                <Text style={styles.stiloText}
                onPress={ () => this.props.navigation.navigate('AbooutUs')}
                >Acerca de</Text>
            </View>
        </TouchableOpacity>

      </View>

    )
  }
}
