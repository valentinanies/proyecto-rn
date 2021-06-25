import React, {Component} from "react";
import { styles } from "../styles/Styles";
import {getData} from "../api/RandomUsers";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container'
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
  TextInput
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
        textHandler: ""
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


importarCustom = (n) => {
  getData(n)
  .then( (usuarios) => {
    usuarios = this.state.users.concat(usuarios)
    this.setState({users:usuarios});
  })
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

  borrarTarjeta(id){
    let resultados = this.state.users.filter((item)=>{
      return item.login.uuid !== id;
    })
    this.setState({users:resultados})
  }

async removeItem(){
  try{
    await AsyncStorage.removeItem("Users");
    return true;
  }
  catch(exception){
    return false;
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

                <TouchableOpacity onPress={() => this.borrarTarjeta(item.login.uuid)}>
                    <View style={styles.guardar_contactos}>
                      <Text style={styles.stiloText}>Borrar</Text>
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
      <View>
        
          <Header/>
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

              
                


               <View>
                    <TextInput placeholder="Ingresar Cantidad" onChangeText={text => this.setState({textHandler: text})}/>
                    <TouchableOpacity onPress={ () => this.importarCustom(this.state.textHandler)}>
                        <View style={styles.menu_view_button}>
                          <Text style={styles.stiloText}>Importar Custom</Text>
                        </View>
                    </TouchableOpacity> 
                </View> 

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
                              
                              {/* <Text style={styles.modalText}>Nombre: {this.state.selectedItem.name.first}</Text>
                              <Text style={styles.modalText}>Apellido: {this.state.selectedItem.name.last}</Text> */}
                              <Text style={styles.modalText}>Calle: {this.state.selectedItem.location.street.name}{this.state.selectedItem.location.street.number}</Text>
                              <Text style={styles.modalText}>País: {this.state.selectedItem.location.country}, {this.state.selectedItem.location.state}</Text>
                              <Text style={styles.modalText}>Código Postal: {this.state.selectedItem.location.postcode}</Text>
                              <Text style={styles.modalText}>Fecha de Registro: {this.state.selectedItem.registered.date}</Text>
                              <Text style={styles.modalText}>Teléfono: {this.state.selectedItem.phone}</Text>


                              

                              
                              
                              
                              
                          </>
                          }
                              <Text style={styles.closeButtonModal}
                                    onPress={() => this.setState({showModal: false})}>X</Text>
                          </View>
                    </View>
                </Modal> 

      </View>
      
      <View style={styles.container_footer}>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
                <Image source={require("../img/home.png")} style={styles.home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
                <Image source={require("../img/back.png")} style={styles.home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
                <Image source={require("../img/us.png")} style={styles.home} />
                </TouchableOpacity>
          </View>
      </View>

    )
  }
}

