import "react-native-gesture-handler";
import React, {Component} from "react";
import { styles } from "./src/styles/Styles";
import { 
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Header from './src/components/Header'
import Container from './src/components/Container'
import Footer from './src/components/Footer'

import { Screen_AboutUs } from "./src/screens/Screen_AboutUs";
import { Screen_Contactos } from "./src/screens/Screen_Contactos";
import { Screen_Imports } from "./src/screens/Screen_Imports";
import { Screen_Menu } from "./src/screens/Screen_Menu";
import { Screen_Papelera } from "./src/screens/Screen_Papelera";

export default class App extends Component {

  render (){
    return (

      <View> 

      <View style={{flex: 1}}>
          <Header/>
        </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} options={{title: "Menu"}} />
          <Stack.Screen name="Imports" component={Imports} options={{title: "Importar"}} />
          <Stack.Screen name="Contactos" component={Contactos} options={{title: "Contactos"}} />
          <Stack.Screen name="Papelera" component={Papelera} options={{title: "Papelera"}} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{title: "Acerca de"}}/>
        </Stack.Navigator>
      </NavigationContainer>

      <View style={{flex: 1}}>
          <Footer/>
        </View>

      </View>

  )}  
  }