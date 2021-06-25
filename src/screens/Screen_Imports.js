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
        textHandler: "",
        text:'',
        usuario: '',

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

 /* filter(text){
          if (text.length > 0) {
              // var text = target.value
            const usuarios = this.state.usuario
            const filtrado = usuarios.filter((item) =>{
            const itemData = item.name.first.toUpperCase()
            const lastName = item.name.last.toUpperCase()
            const age = item.dob.age.toString()
            const textData = text.toUpperCase()
            return (
            itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
                  // comparo name o last name o age con el valor ingresado .
              )})
            this.setState({
                usuario: filtrado,
                textoBuscado: text,
            })
          } else {
            this.setState({usuario:this.state.personOriginal}) 
          }
          console.log(text);

        }
 */
keyExtractor = (item, idx) => idx.toString()

renderItem  = ({item}) => {
    return(
    <ScrollView>
      <View >
        
        <View >
        {/* <textImput placeholder="Buscar aqui..." onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}/> */}
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
                
        </View>
        </ScrollView>
        
        
      
        )
}

showModal(item) {
  this.setState({selectedItem: item, showModal: true})
}

separator = () => <View style= {styles.separator}/>


  render(){

    return(
      <ScrollView>
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
                    <TextInput
                     placeholder="Ingresar Cantidad" 
                     onChangeText={text => this.setState({textHandler: text})}
                     keyboardType ="numeric"
                     style={{
                       
                     }}/>
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
            
                <TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
                <Image source={require("../img/back.png")} style={styles.home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
                <Image source={require("../img/home.png")} style={styles.home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
                <Image source={require("../img/us.png")} style={styles.home} />
                </TouchableOpacity>
          </View>
      </View>
</ScrollView>
    )
  }
}

