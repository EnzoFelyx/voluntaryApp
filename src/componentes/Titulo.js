import React from 'react';
import { StyleSheet } from 'react-native';
import Texto from '../componentes/texto';

export default function Titulo ({entrada}) {

    return <Texto style={estilos.estiloTitulo}>{entrada}</Texto>;
}

const estilos = StyleSheet.create({
    estiloTitulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

})

