import React, {Component} from "react";
import { styles } from "./src/styles/Styles";
import { 
  View,
  Text,
} from 'react-native';

import Header from './src/components/Header'
import Container from './src/components/Container'
import Footer from './src/components/Footer'

import { Screen_AboutUs } from "./src/screens/Screen_AboutUs";


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={

    }
}
  
  render(){
    return(

      <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          <Header/>
        </View>

        <View style={{flex: 3}}>
          <Screen_AboutUs/>
        </View>

        <View style={{flex: 1}}>
          <Footer/>
        </View>

    </View>

    )
  }
}