import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Texto from './texto';

export default function Linha({ texto = null }) {

    if (texto != null) {
        return <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16, }}>
                <View style={estilos.riscoParicial} />
                <View>
                    <Texto style={estilos.ou}>{texto}</Texto>
                </View>
                <View style={estilos.riscoParicial} />
            </View>
        </SafeAreaView>
    }

    else {
        return <View style={estilos.risco} />

    }
}

const estilos = StyleSheet.create({

    ou: {
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal: 8,
        marginBottom: 5,
    },

    risco: {
        height: 0.6,
        backgroundColor: 'black',
    },

    riscoParicial: {
        flex: 1,
        height: 0.6,
        backgroundColor: 'black',
    }
})
