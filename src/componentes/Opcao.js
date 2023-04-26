import React from 'react';
import { StyleSheet, View } from 'react-native';
import Texto from '../componentes/texto';

export default function Opcao({ texto }) {
    return <>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
                <Texto style={estilos.ou} >{texto}</Texto>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    ou: {
        fontSize: 16,
        lineHeight: 26,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginBottom: 5,

    }
})