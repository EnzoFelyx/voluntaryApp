import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from './Icon';
import Image from './Image';
import Title from './Title';
import Return from './Return';

export default function Cabecalho({ tipo = null, titulo = null, Foto = null, fotoEstilo = null }) {

    const navigation = useNavigation();

    switch (tipo) {

        case "Perfil":
            return <View style={estilos.topo}>
                <Title entrada={titulo} tipo={"Titulo"} />
                <Image imagem={Foto} tipo={'perfilFoto'} />
            </View>

            break;

        case "Welcome":
            return <View style={{ marginTop: 16 }}>
                <Image imagem={Foto} tipo={fotoEstilo} />
                <Return />
            </View>
            break;

        default:
            return <SafeAreaView style={estilos.voltar}>

                <Icon
                    icone={"chevron-left"}
                    interativo={true}
                    tamanho={40}
                    acao={() => { navigation.goBack() }}
                />

                <Title entrada={titulo} tipo={"Titulo"} />
            </SafeAreaView>
            break;
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
})