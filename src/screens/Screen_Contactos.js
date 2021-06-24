import React, {Component} from "react";
import { styles } from "../styles/Styles";
import Header from '../components/Header'
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_Contactos extends Component {

  constructor(props){
    super(props);
    this.state={
      loading: true,
      importedUsers: [],
      showModal: false,
      textHandler: "",
    }
}


async getData() {
  try{
    
    const users = await AsyncStorage.getItem("users");

    const jsonUsers = JSON.parse(users)
    
    if (Array.isArray(jsonUsers)) {
      this.setState({importedUsers: jsonUsers})
    } else{
      this.setState({importedUsers:[jsonUsers]})
    }
    

  }catch(e){
    console.log(e)
  }
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

          <TouchableOpacity onPress={() => this.deleteData(item)}><Text>Eliminar</Text></TouchableOpacity>
        </View>
  
      )
    }


  render(){

    return(

      <View>
        <Header/>
      <View style={styles.container}>


              <TouchableOpacity onPress={this.getData.bind(this)}>
                <Text style={styles.stiloTitle}>Mis Contactos</Text>
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

    )
  }
}