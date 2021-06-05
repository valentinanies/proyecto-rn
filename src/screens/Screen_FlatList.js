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
  TouchableOpacityBase,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_FlatList extends Component {
    
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

async getDataFromApi() {
  this.setState({activity: true})
  let usuarios = await getData ();
  console.log(usuarios);
  this.setState({users: usuarios, activity: false})
}

keyExtractor = (item, idx) => idx.toString()

renderItem  = ({item}) => {
    return(
        <TouchableOpacity onPress= {() => this.showModal(item)}>
          <View style={styles.card}> 
              <Text style={styles.stiloText}>{item.name.last}, {item.name.first}</Text> 
              <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
          </View>
        </TouchableOpacity>
        )
}

showModal(item) {
  this.setState({selectedItem: item, showModal: true})
}

separator = () => <View style= {styles.separator}/>


  render(){

    return(
      <View style={styles.container_flat_list}>

              <ScrollView>
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
                </ScrollView>
              
                <Button title="Obtener Contactos" onPress={ () => this.getDataFromApi()}/>

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
                              {/*<Image style={styles.image} source={{uri: item.picture.thumbnail}}> 
                              {this.state.selectedItem.picture.thumbnail} <Image/>*/}                              
                              <Text style={styles.modalText}>
                                {this.state.selectedItem.name.first}</Text>
                              <Text style={styles.modalText}>
                                {this.state.selectedItem.name.last}</Text>
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

