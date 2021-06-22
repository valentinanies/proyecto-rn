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
      justifyContent: "center",
      alignItems: "center", 
    },

    header: {
      backgroundColor: "#a9d6e5",
      justifyContent: "center",
      alignItems: "center", 
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
      backgroundColor: "#89c2d9",
      borderStyle: "solid",
      borderRadius: 20,
      borderWidth: 2,
      margin: 5,
      width: 250,
      height: 150,
      padding: 10,
      top: 10,
      bottom: 5,
    },
    
    container_card: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
      color: "white",
      fontWeight: "bold",
    },

    closeButtonModal: {
      position: "absolute",
      right: 20,
      top: 10,
      fontSize: 20,
      color: "red",
    },

    imageModal: {
      width:100,
      height: 100,
    },

    image: {
      width: 50,
      height: 50,
    },

   }) 

   export {styles}