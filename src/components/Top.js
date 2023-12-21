import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from './Icon';
import Image from './Image';
import Title from './Title';

export default function Cabecalho({ titulo = null, Foto = null, icone = false, fotoEstilo = null }) {

    const navigation = useNavigation();


    if (Foto != null && icone == false) {
        return <SafeAreaView style={estilos.topo}>
            <Title entrada={titulo} tipo={"Titulo"} />
            <View style={{ flex: 1 }}>
                <Image imagem={Foto} tipo={'perfilFoto'} />
            </View>
        </SafeAreaView>
    }

    else if (Foto != null && icone == true) {
        return <SafeAreaView>
            <View style={{ marginTop: 16 }}>
                <Image imagem={Foto} tipo={fotoEstilo} />
                <View style={estilos.voltarImagem}>
                    <Icon
                        icone={"chevron-left"}
                        interativo={true}
                        tamanho={40}
                        acao={() => { navigation.goBack() }}
                    />
                </View>
            </View>
        </SafeAreaView>
    }

    else {
        return <SafeAreaView style={estilos.voltar}>

            <Icon
                icone={"chevron-left"}
                interativo={true}
                tamanho={40}
                acao={() => { navigation.goBack() }}
            />

            <Title entrada={titulo} tipo={"Titulo"} />
        </SafeAreaView>
    }
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 16,
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
