import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

export default function PerfilOption({ texto, acao }) {

    return <TouchableOpacity style={estilos.perfilOption} onPress={acao}>
        <Text style={estilos.texto}>{texto}</Text>
        <Icon icone={"chevron-right"} tamanho={32} interativo={false} />
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    perfilOption: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#E5ECB9",
        borderRadius: 15,
        elevation: 8,
        marginBottom: 16,
    },

    texto: {
        fontSize: 20,
        fontWeight: "bold",
    },

})