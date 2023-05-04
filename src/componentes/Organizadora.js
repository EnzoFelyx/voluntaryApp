import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Imagem from './Imagem';
import Texto from './texto';

export default function Organizadora({ image, nome }) {

    return <TouchableOpacity style={estilos.organizadora}>
        <Texto>{nome}</Texto>
        <Imagem imagem={image} tipo={"fotoMenor"}/>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    organizadora: {
        flexDirection: "row",
        marginLeft: "auto",
    }
})
