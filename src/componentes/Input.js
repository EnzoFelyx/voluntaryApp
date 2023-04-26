import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ entrada, senha = false }) {

    return <TextInput secureTextEntry={senha} style={estilos.caixaInput} placeholder={entrada}/>
}

const estilos = StyleSheet.create({
    caixaInput: {
        marginTop: 16,
        fontSize: 14,
        lineHeight: 26,
        paddingVertical: 15,
        backgroundColor: "rgba(255,255,255,0.75)",AAAAAAAAAAAAAAAAA
        borderRadius: 15,
        paddingLeft: 16
    },
})

