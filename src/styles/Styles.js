import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    stiloText: {
      fontSize:20,
      color: "black",
    },

    stiloTitle: {
      fontSize:30,
      color: "black",
      fontWeight: "bold",
    },

    container: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30,
    },

    header: {
      backgroundColor: "#a9d6e5",
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30,
    },

    footer: {
      backgroundColor: "#a9d6e5",
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30
      },

    menu: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30
    },

    menu_view_button: {
      backgroundColor: "#89c2d9",
      textAlign: "center",
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 30,
      marginTop: 10,
    },

    card: {
      borderStartColor: "#89c2d9",
      borderStyle: "solid",
      borderRadius: 10,
      borderWidth: 1,
      margin: 5,
      width: 150,
      height: 100,
      padding: 10,
      flexDirection: "row",
    },
    
    container_flat_list: {
    justifyContent: "center",
    alignItems: "center",
    },

    separator: {
      borderBottomWidth: 1,
      borderBottomColor: "black"
    }

   }) 

   export {styles}