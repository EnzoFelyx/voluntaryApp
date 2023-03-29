import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto ({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold"){
        estilo = estilo.textoNegrito;
    }
    return <Text style={[style,estilo]}>{ children } </Text>
}   

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "QuicksandRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "QuicksandBold",
        fontWeight: 'normal',
    }
})