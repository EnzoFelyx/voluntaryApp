import React from 'react';
import { StyleSheet, View } from 'react-native';
import Texto from './texto';

export default function Linha({ texto = null }) {

    if (texto != null) {
        return <View style={estilos.container}>
            <View style={estilos.risco} />
            <Texto style={estilos.ou}>{texto}</Texto>
            <View style={estilos.risco} />
        </View>
    }

    else {
        return <View style={estilos.risco} />
    }
}

const estilos = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },

    ou: {
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal: 8,
        marginBottom: 5,
    },

    risco: {
        flex: 1,
        height: 0.6,
        backgroundColor: 'black',
    }
})
