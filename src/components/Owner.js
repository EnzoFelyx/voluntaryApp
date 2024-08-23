import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Image from './Image';
import Texto from './texto';

export default function Owner({ image, nome, acao }) {

    return <TouchableOpacity style={estilos.organizadora} onPress={acao}>
        <Image imagem={image} tipo={"fotoMenor"} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({

    organizadora: {
        flexDirection: "row",
        marginLeft: 8, 
        marginBottom: 16,
        marginTop: 8,
    },
    nome: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 4,
    }
})
