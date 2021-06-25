import React, {Component} from "react";
import { styles } from "../styles/Styles";
import Header from '../components/Header'
import Card from "../components/Card"
import {TraerData} from "../api/TraerData";
import {GuardarData} from "../api/GuardarData";
// import Container from './src/components/Container'
import Footer from '../components/Footer'
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

export class Screen_Papelera extends Component {

  constructor(){
    super();
    this.state={
      users:[],
    }
}


borrarTarjeta(id){
  let resultados = this.state.users.filter((item)=>{
    return item.login.uuid !== id;
  })
  this.setState({users:resultados})
}


keyExtractor = (item, idx) => idx.toString();
renderItem = ({item}) => {
  return(

      <View>
        
        <TouchableOpacity onPress= {() => this.showModal(item)}>
          <Card 
            nombre={item.name.first} 
            apellido={item.name.last}  
            foto={item.picture.thumbnail} 
            edad={item.dob.age} 
            mail={item.email} 
            fecha={item.dob.date}  
            direccion={item.location} 
            registro={item.registered.date}
            telefono={item.cell}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.borrarTarjeta(item.login.uuid)}><Text>Borrar</Text></TouchableOpacity>
      </View>

    )
  }

  render(){
    return(
      <View style={{backgroundColor: "white"}}>
        <Header/>

        <TouchableOpacity style={styles.menu_view_button}onPress={() => {TraerData('Papelera').then((users)=>{
                    this.setState({users: users})
                    })}}>
                <Text style={styles.stiloText}>Cargar Borrados</Text>
              </TouchableOpacity>

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
                        numColumns= {1}
                        />
                }

        <View style={styles.container_footer}>
            
            <TouchableOpacity onPress={ () => this.props.navigation.goBack()}> 
            <Image source={require("../img/back.png")} style={styles.home} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")}> 
            <Image source={require("../img/papelera.png")} style={styles.home} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Menu")}> 
            <Image source={require("../img/home.png")} style={styles.home} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Contactos")}> 
            <Image source={require("../img/contactos.png")} style={styles.home} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("AboutUs")}> 
            <Image source={require("../img/aboutUs.png")} style={styles.home} />
            </TouchableOpacity>
            </View>
    </View>

       
      
    )
  }
}
