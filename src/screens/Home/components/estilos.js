import { StyleSheet } from "react-native";

export default StyleSheet.create({

    titulo: {
        fontSize: 16,
        lineHeight: 42,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 32,
        paddingHorizontal: 16,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
    },

    subtitulo: {
        marginBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },

    caixa: {
        alignItems: 'center',
        height: 50,
        backgroundColor: "#ffff",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#9dc662",
        paddingLeft: 24,
        flexDirection: "row",
    },
    
    people: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: 20,
    },

    nome: {
        fontWeight: "bold",
        fontSize: 16,
    },

    local: {
        textAlign: 'right',
        marginHorizontal: 8,
    },
    evento: {
        marginTop: 16,
        paddingVertical: 12,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginRight: 8,
        flexDirection: "row",
    },
    busca:{
        flexDirection: "row", 
        paddingLeft: 10
    }

})