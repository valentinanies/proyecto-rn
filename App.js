import "react-native-gesture-handler";
import React, {Component} from "react";
import { styles } from "./src/styles/Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen_AboutUs } from "./src/screens/Screen_AboutUs";
import { Screen_Contactos } from "./src/screens/Screen_Contactos";
import { Screen_Imports } from "./src/screens/Screen_Imports";
import { Screen_Menu } from "./src/screens/Screen_Menu";
import { Screen_Papelera } from "./src/screens/Screen_Papelera";
import Header from './src/components/Header'
import Container from './src/components/Container'
import Footer from './src/components/Footer'
import { 
  View,
  Text,
} from 'react-native';

const Stack = createStackNavigator(); 

export default class App extends Component {
  
  render (){
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            {/* se renderiza la primer pantalla */}
            <Stack.Screen name="Menu" component={Screen_Menu}/> 
            <Stack.Screen name="Imports" component={Screen_Imports}/>
            <Stack.Screen name="Contactos" component={Screen_Contactos}/>
            <Stack.Screen name="AboutUs" component={Screen_AboutUs}/>
            {/* <Stack.Screen name="Papelera" component={Screen_Papelera}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      
    


  )}  
  }