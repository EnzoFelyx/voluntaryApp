import React from "react";
import { StyleSheet, Text } from "react-native";
import { fontFamily } from "../styles/fontFamily";

export default function Texto ({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold"){
        estilo = estilo.textoNegrito;
    }
    return <Text style={[style,estilo]}>{ children } </Text>
}   

const estilos = StyleSheet.create({
    texto: {
        fontFamily: fontFamily.regular,
        fontWeight: "normal",
        fontSize: 16,
    },
    textoNegrito: {
        fontFamily: fontFamily.bold,
        fontWeight: "bold",   
    }
})