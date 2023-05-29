import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Texto from './texto';

export default function Linha({ texto = null }) {

    if (texto != null) {
        return <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={estilos.risco} />
                <View>
                    <Texto style={estilos.ou}>{texto}</Texto>
                </View>
                <View style={estilos.risco} />
            </View>
        </SafeAreaView>
    }
    
    else {
        return <SafeAreaView>
            <View style={estilos.ou}>
                <View style={estilos.risco} />
            </View>
        </SafeAreaView>
    }
}

const estilos = StyleSheet.create({
    line: {
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ou: {
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal: 8,
        marginBottom: 5,
    },

    risco: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'black',
    }
})
