import React, {Component} from 'react';
import {
View,
Image,
Text,
Button,
TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/Styles';
import Card from './Card';

class cardFavorite extends Component{
    constructor(){
        super();
        this.state={     
             showModal: false    
        }
    }
    openModal =  ()=> this.setState({showModal: true});
    closeModal =  ()=> this.setState({showModal: false});
    
render(){
    const { img, firstName, lastName,Email,city,State,Street,StreetNum,Tel, Country, Age,  Date,id,key, RegisterDate, Zipcode} = this.props;

        return(
            <View>

                <Image source={{uri: img}}/>
                
                <View>

                <Text>Nombre completo: {firstName} {lastName}</Text> 

                <Text>E-mail: {Email}</Text>

                <Text>Nacimiento: {Date.substring(0, 10)} ({Age})</Text>

                </View>

                

                <TouchableOpacity onPress= {this.openModal} >
                    <View>
                        <Text style={{padding: 10, fontWeight: 'bold'}} >Ver más</Text>
                    </View>                 
                </TouchableOpacity>

                <ComponenteModal
                  AparezcaCerrado={this.state.showModal}
                  Modal= {this.openModal.bind(this)}
                  cerrarModal= {this.closeModal.bind(this)}
                
                   img={img}
                   firstName={firstName}
                   lastName={lastName}
                   Email={Email}
                   city={city}
                   State={Street}
                   StreetNum={StreetNum}
                   Tel={Tel}
                   Country={Country}
                   Age={Age}
                   RegisterDate={RegisterDate} 
                   Date={Date}
                   id={id}
                   Zipcode={Zipcode}
                  />
                  
                <Pressable  onPress= {this.props.onDelete.bind(this,id)}>
                    <Text >X</Text>
                </Pressable>

            </View>
        )
    }
}

export default cardFavorite;