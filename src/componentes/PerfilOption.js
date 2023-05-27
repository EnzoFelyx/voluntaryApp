import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icone from './Icone';

export default function PerfilOption({ texto, acao }) {

    return <TouchableOpacity style={estilos.perfilOption} onPress={acao}>
        <Text style={estilos.texto}>{texto}</Text>
        <Icone icone={"chevron-right"} tipo={"perfilOption"} tamanho={32} interativo={false}/>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    perfilOption: {

        alignSelf: 'center',
        width: 342,
        height: 60,
        backgroundColor: "#E5ECB9",
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 8,
        marginBottom: 12,
    },

    texto: {
        textAlignVertical: 'center',
        marginLeft: 32,
        fontSize: 20,
        fontWeight: "bold",
    },

})