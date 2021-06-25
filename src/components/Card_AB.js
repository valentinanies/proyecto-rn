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



  position = new Animated.Value(0);
  rotation = new Animated.Value(0);
  
  topDown = () => {
    Animated.parallel([

      Animated.timing(this.rotation,{
        toValue: 1,
        duration: 100,
        useNativeDriver: true
    })

    ]).start();

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
            <Animated.View style={{

                backgroundColor: "#89c2d9",
                borderStyle: "solid",
                borderRadius: 20,
                borderWidth: 2,
                //margin: 5,
                width: 200,
                height: 150,
                //padding: 10,
                //top: 100,
                //bottom: 5,
                justifyContent:"center",
                alignItems: "center",
                backfaceVisibility: 'true',
                transform: [
                    {translateX: this.position},
                    {rotateY: rotateA}
            ]
            }}>
                <View style={styles.container_card_about} >
                    <Text style={styles.stiloText}>{this.props.name}</Text>      
                </View>
            </Animated.View>

            <Animated.View style={{
                backgroundColor: "#89c2d9",
                borderStyle: "solid",
                borderRadius: 20,
                borderWidth: 2,
                //margin: 5,
                width: 200,
                height: 150,
                //padding: 10,
                //top: 100,
                //bottom: 5,
                justifyContent:"center",
                alignItems: "center",
                backfaceVisibility: 'hidden',
                position: 'absolute',
                transform: [
                    {translateX: this.position},
                    {rotateY: rotateB}
                ]
                }}>
                <View style={styles.container_card_about} >
                    <Text style={styles.stiloText}>Estudiante de la carrera Negocios Digitales en la Universidad de San Andres</Text>      
                </View>
            </Animated.View>

        </View>
    </TouchableWithoutFeedback>

  
  
  )}  

}