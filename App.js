import React, {Component} from "react";
import { styles } from "./Styles";
import { 
  View,
  Text,
} from 'react-native';

import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

// import { Screen_Imports } from "./screens/Screen_Imports";

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

        <View style={{flex: 4}}>
          <Container/>
        </View>

        <View style={{flex: 1}}>
          <Footer/>
        </View>

    </View>

    )
  }
}