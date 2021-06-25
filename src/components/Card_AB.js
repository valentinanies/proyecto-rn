import React, { Component } from 'react';
import { styles } from '../styles/Styles';
import { 
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Image
} from "react-native";


export class Card_AB extends Component {

  constructor(props){
    super(props);
    this.state={
        toValue: 1,
    }
  }

  position = new Animated.Value(0);
  rotation = new Animated.Value(0);
  
  topDown = () => {
    Animated.parallel([

      Animated.timing(this.rotation,{
        toValue: this.state.toValue,
        duration: 100,
        useNativeDriver: true
    })

    ]).start();
    this.setState({toValue: this.state.toValue + 1})
  }

  render (){
    const rotateA = this.rotation.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '180deg']
    })

    const rotateB = this.rotation.interpolate({
      inputRange: [0,1],
      outputRange: ['180deg', '0deg']
    })



    return (
        <TouchableWithoutFeedback style={styles.guardar_contactos} onPress={this.topDown}>
        <View>
            <Animated.View style={[{
                backfaceVisibility: 'true',
                transform: [
                    {translateX: this.position},
                    {rotateY: rotateA}
            ]
            }, styles.card_A]}>
                <View style={styles.container_card_about} >
                    <Text style={styles.stiloText}>{this.props.name}</Text>      
                </View>
            </Animated.View>

            <Animated.View style={[{
                backfaceVisibility: 'hidden',
                transform: [
                    {translateX: this.position},
                    {rotateY: rotateB}
                ]
                }, styles.card_B ]}>
                <View style={styles.container_card_about} >
                    <Text style={styles.stiloText}>Estudiante de la carrera Negocios Digitales en la Universidad de San Andres</Text>      
                </View>
            </Animated.View>

        </View>
    </TouchableWithoutFeedback>

  
  
  )}  

}