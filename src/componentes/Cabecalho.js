import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Imagem from './Imagem';
import Titulo from './Titulo';
import Icone from './Icone';
import { useNavigation } from '@react-navigation/native';

export default function Cabecalho({ titulo = null, Foto = null, icone = false, fotoEstilo = null }) {

    const navigation = useNavigation();


    if (Foto != null && icone == false) {
        return <SafeAreaView style={estilos.topo}>
            <Titulo entrada={titulo} tipo={"Titulo"} />
            <View style={{ flex: 1 }}>
                <Imagem imagem={Foto} tipo={'perfilFoto'} />
            </View>
        </SafeAreaView>
    }

    else if (Foto != null && icone == true) {
        return <SafeAreaView>
            <View style={{ marginTop: 16 }}>
                <Imagem imagem={Foto} tipo={fotoEstilo} />
                <View style={estilos.voltarImagem}>
                    <Icone 
                    icone={"chevron-left"} 
                    interativo={true} 
                    tamanho={40}
                    acao={() => {navigation.goBack()}}
                    />
                </View>
            </View>
        </SafeAreaView>
    }

    else {
        return <SafeAreaView style={estilos.voltar}>
            
            <Icone 
            icone={"chevron-left"} 
            interativo={true} 
            tamanho={40}
            acao={() => {navigation.goBack()}}
            />

            <Titulo entrada={titulo} tipo={"Titulo"} />
        </SafeAreaView>
    }
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 56,
        marginBottom: 12,
    },

    voltar: {
        flexDirection: "row",
        marginTop: 16,
        marginLeft: 16,
    },

    voltarImagem: {
        position: "absolute",
        marginLeft: 16,
    },
})
