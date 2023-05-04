import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Linha({}) {

    return <View style={estilos.ou}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
    </View>
}

const estilos = StyleSheet.create({
    ou: {
        paddingVertical: 8,
        flexDirection: 'row', 
        alignItems: 'center',
    }
})
