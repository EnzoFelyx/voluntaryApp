import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default function Input({ entrada, tipo, senha = false}) {

    let estilo = estilos.caixaInput;

    if (tipo == 2){
        estilo = estilos.caixaComentar;
    }
    return <TextInput secureTextEntry={senha} style={estilo} placeholder={entrada}/>
}

const estilos = StyleSheet.create({
    caixaInput: {
        marginTop: 16,
        marginBottom: 16,
        fontSize: 14,
        lineHeight: 26,
        paddingVertical: 15,
        backgroundColor: "rgba(255,255,255,0.75)",
        borderRadius: 15,
        paddingLeft: 16
    },

    caixaComentar:{

        marginTop: 24,
        paddingTop: 8,
        paddingBottom: 56,
        paddingHorizontal: 16,
        backgroundColor: "#E4F4CD",
        borderRadius: 15,

    }
})

