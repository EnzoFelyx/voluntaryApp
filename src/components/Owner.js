import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Image from './Image';
import { useNavigation } from '@react-navigation/native';
import Texto from './texto';

export default function Organizadora({ image, nome,acao }) {



    return <TouchableOpacity style={estilos.organizadora} onPress={acao}>
        <Texto style={estilos.nome}>{nome}</Texto>
        <Image imagem={image} tipo={"fotoMenor"}/>
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
