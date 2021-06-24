import React, {Component} from "react";
import { styles } from "../styles/Styles";
import {getData} from "../api/RandomUsers";
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Button,
  Image,
  Modal,
  ScrollView,
} from 'react-native';

import Card from "../components/Card"

import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_Imports extends Component {
    
constructor(props){
    super(props);
    this.state={
        users: [],
        activity: false,
        showModal: false,
        selectedItem: null,
    }
    }
  
componentDidMount(){
    //getData ()
    //.then((usuarios) => {
    //this.setState({users:usuarios});
    //})
}

//traer las tarjetas de contacto
async getDataFromApi() {
  this.setState({activity: true})
  let usuarios = await getData ();
  console.log(usuarios);
  this.setState({users: usuarios, activity: false})
}


//guardar en el dispositivo las tarjetas de contacto
async storeData(){
  try{
    const jsonUsers = JSON.stringify(this.state.users);
    await AsyncStorage.setItem("Users", jsonUsers);
    console.log("Datos Almacenados");
  } catch(e){
    console.log(e)
  }
}


keyExtractor = (item, idx) => idx.toString()

renderItem  = ({item}) => {
    return(

      <View>

        <TouchableOpacity onPress= {() => this.showModal(item)}>
        <Card 
            nombre={item.name.first} 
            apellido={item.name.last} 
            id={item.login.uuid} 
            foto={item.picture.thumbnail} 
            edad={item.dob.age} 
            mail={item.email} 
            fecha={item.dob.date}  
            direccion={item.location} 
            registro={item.registered.date}
            telefono={item.cell}
          />
        </TouchableOpacity>

{/* onPress={ this.storeData.bind(this)} */}

        <TouchableOpacity onPress={() => this.storeData(item)}>
                    <View style={styles.guardar_contactos}>
                      <Text style={styles.stiloText}>Guardar</Text>
                    </View>
                </TouchableOpacity> 
        </View>
      
        )
}

showModal(item) {
  this.setState({selectedItem: item, showModal: true})
}

separator = () => <View style= {styles.separator}/>


  render(){

    return(
      <View style={styles.container}>


                { this.state.activity 
                    ? <React.Fragment>
                    <ActivityIndicator
                      color="blue"
                      size={60}/>
                      </React.Fragment>

                    : <FlatList
                        data= {this.state.users}
                        keyExtracxtor= {this.keyExtractor}
                        renderItem= {this.renderItem}
                        ItemSeparatorComponent ={this.separator}
                        numColumns= {2}
                        />
                }

              
                <TouchableOpacity onPress={ () => this.getDataFromApi()}>
                    <View style={styles.menu_view_button}>
                      <Text style={styles.stiloText}>Importar Contactos</Text>
                    </View>
                </TouchableOpacity> 

                <View>
      </View>

               {/* <Button title="Show Modal" onPress={ () => this.setState({showModal: true})}/> */}

                <Modal 
                  visible= {this.state.showModal}
                  transparent={true}
                  animationType= "fade"
                  >

                    <View style={styles.modalContainer}>

                        <View style={styles.modal}>

                          {this.state.selectedItem &&
                          <>  
                              <Text style={styles.modalText}>{this.state.selectedItem.name.first}</Text>
                              <Text style={styles.modalText}>{this.state.selectedItem.name.last}</Text>
                              
                              
                              
                          </>
                          }
                              <Text style={styles.closeButtonModal}
                                    onPress={() => this.setState({showModal: false})}>X</Text>
                          </View>
                    </View>
                </Modal> 

      </View>

    )
  }
}

