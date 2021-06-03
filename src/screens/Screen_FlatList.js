import React, {Component} from "react";
import { styles } from "../styles/Styles";
import {getData} from "../api/RandomUsers";
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

export class Screen_FlatList extends Component {
    
constructor(props){
    super(props);
    this.state={
        users: [],
    }
    }
    
componentDidMount(){
    getData ()
    .then((usuarios) => {
    this.setState({users:usuarios});
    })
}

keyExtractor = (item, idx) => idx.toString()

renderItem  = ({item}) => {
    return(
        <View> style={styles.card}
            <Text style={styles.stiloText}>{item.name.last}, {item.name.first}</Text> 
        </View>
        )
}

separator = () => <View style= {styles.separator}/>

  render(){

    return(
      <View style={styles.container_flat_list}>
          <FlatList
            data= {this.state.users}
            keyExtracxtor= {this.keyExtractor}
            renderItem= {this.renderItem}
            numColumns= {2}
            ItemSeparatorComponent ={this.separator}
            />
      </View>

    )
  }
}

