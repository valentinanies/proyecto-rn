import {StyleSheet, TouchableWithoutFeedback} from "react-native";

const styles = StyleSheet.create({

    stiloText: {
      fontSize:20,
      color: "black",
    },

    stiloTitle: {
      fontSize:30,
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },

    stiloTitleAB: {
      fontSize:20,
      color: "black",
      textAlign: "center"
    },

    stiloInput: {
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 10,
      margin: 10,
    },

    container: {
      backgroundColor: "white",
      justifyContent: "space-around",
      alignItems: "center", 
    },

    header: {
      backgroundColor: "#a9d6e5",
      justifyContent: "center",
      alignItems: "center", 
      fontSize:40, 
      padding:30,
    },

    container_footer:{
      
      flexDirection: "row",
      backgroundColor: "#a9d6e5",
      justifyContent: "space-around",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30,
    },

    container_footer_aboutUs:{
      flexDirection: "row",
      backgroundColor: "#a9d6e5",
      justifyContent: "space-around",
      alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30,
      top: 300
    },

    footer: {
      backgroundColor: "#a9d6e5",
      // justifyContent: "center",
      // alignItems: "center", 
      marginTop: 50, 
      fontSize:40, 
      padding:30,
      
      },

    home:{
      width: 60,
      height: 60
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

    guardar_contactos:{
      backgroundColor: "#89c2d9",
      textAlign: "center",
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 30,
      marginTop: 10,
      width: 200
      
    },

    borrar_contactos:{
      backgroundColor: "#CC0000",
      textAlign: "center",
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 30,
      marginTop: 5,
      width: 200
      
    },
  
    card: {
      alignItems:"center",
      backgroundColor: "#89c2d9",
      borderStyle: "solid",
      borderRadius: 20,
      borderWidth: 2,
      margin: 5,
      width: 200,
      height: 175,
      padding: 10,
      top: 10,
      bottom: 5,
    },

    card_modal: {
      alignItems:"center",
      backgroundColor: "#89c2d9",
      borderStyle: "solid",
      borderRadius: 20,
      borderWidth: 2,
      margin: 5,
      width: 400,
      height: 300,
      padding: 10,
      top: 10,
      bottom: 5,
    },

    card_about: {
      backgroundColor: "#89c2d9",
      borderStyle: "solid",
      borderRadius: 20,
      borderWidth: 2,
      margin: 5,
      width: 200,
      height: 150,
      padding: 10,
      top: 10,
      bottom: 5,
      
      alignItems: "center"
    },
    
    container_card: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    },

    container_card_about: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
      },

    separator: {
      borderBottomWidth: 2,
      borderBottomColor: "black",
      bottom: 6,
      top: 6,
    },

    modalContainer: {
      justifyContent: "flex-end",
      alignItems: "center",
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.3)",

    },

    modal: {
      backgroundColor: "rgba(0,0,0,0.3)",
      height: "30%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 5,
      shadowColor: "black",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      flex: 1,
    },

    modalText: {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
    },

    closeButtonModal: {
      position: "absolute",
      right: 20,
      top: 10,
      fontSize: 60,
      color: "red",
    },

    imageModal: {
      width:100,
      height: 100,
    },

    image: {
      width: 150,
      height: 100,
      borderRadius: 10
    },

    card_A: {
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
    },

    card_B: {
                backgroundColor: "#4699BB",
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
                position: 'absolute',

    },

     barrasBusq: {
            height: 100,
            width:350,
            margin: 10,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 5,
            borderColor: '#000000',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 3,
            borderRadius: 10,
            backgroundColor: 'white', 
            marginLeft: 13,
      },

   }) 

   export {styles}