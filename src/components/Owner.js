import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Image from './Image';
import Texto from './texto';

export default function Owner({ image, nome, acao }) {

    return <TouchableOpacity style={estilos.organizadora} onPress={acao}>
        <Texto style={estilos.nome}>{nome}</Texto>
        <Image imagem={image} tipo={"fotoMenor"} />
    </TouchableOpacity>
}

const estilos = StyleSheet.create({

    organizadora: {
        flexDirection: "row",
        marginLeft: "auto",
        margin: 16, 
    },
    nome: {
        fontSize: 16,
        marginRight: 4,
        marginTop: 4,
    }
})
