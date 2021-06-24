import "react-native-gesture-handler";
import React, {Component} from "react";
import { styles } from "./src/styles/Styles";
import { 
  View,
  Text,
  
  //agregue Menu e Imports porque según google ayuda a arreglar un problema al iniciar el proyecto. El problema en cuestión era que decía no haber encontrado las varibles Menu e Imports. Lo que hice lo solucionó y el problema fue derivando en otras cosas.
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
          <Stack.Screen name="Screen_Menu" component={Screen_Menu} options={{title: "Menu"}} />
          <Stack.Screen name="Screen_Imports" component={Screen_Imports} options={{title: "Importar"}} />
          <Stack.Screen name="Screen_Contactos" component={Screen_Contactos} options={{title: "Contactos"}} />
          {/* <Stack.Screen name="Papelera" component={Screen_Papelera} options={{title: "Papelera"}} /> */}
          <Stack.Screen name="Screen_AboutUs" component={Screen_AboutUs} options={{title: "Acerca de"}}/>
        </Stack.Navigator>
      </NavigationContainer>

      <View style={{flex: 1}}>
          <Footer/>
        </View>

      </View>

  )}  
  }