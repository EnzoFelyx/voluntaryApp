import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

    participantes: {
      marginTop: 16,
      flexDirection: "row",
      marginLeft: "auto",
      marginBottom: 16,
    },

    icones: {
        flexDirection: "row",
        marginVertical: 14,
        justifyContent: 'space-between',
        backgroundColor: "#ffffe5",
        borderWidth: 0.5,
        borderColor: "gray",
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 15,
        elevation: 7,
    },

    evento: {
        color: "#ffffe5",
        fontSize: 26,
    },

    titulo: {
        marginLeft: 8,
        marginTop: 10,
        marginBottom: 8,
    },

    about: {
        flexDirection: "row",
        marginVertical: 3,
    },
    texto: {
        marginLeft: 8,
        color: "gray"
    },
    inLine:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingRight: 16, 
        marginBottom: 8 
    }
  
  })