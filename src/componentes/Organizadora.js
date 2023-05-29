import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Imagem from './Imagem';
import { useNavigation } from '@react-navigation/native';

export default function Organizadora({ image, nome,acao }) {



    return <TouchableOpacity style={estilos.organizadora} onPress={acao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Imagem imagem={image} tipo={"fotoMenor"}/>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    organizadora: {
        flexDirection: "row",
        marginLeft: "auto",
        marginBottom: 16,
    },
    nome: {
        fontSize: 16,
        marginRight: 4,
        marginTop: 4,
    }
})
