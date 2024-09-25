import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from './Icon';
import Image from './Image';
import Title from './Title';
import Return from './Return';
import { ChevronLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

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
            return <View style={estilos.voltar}>

                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <ChevronLeft color={"black"} size={25} />
                </TouchableOpacity>

                <Title entrada={titulo} tipo={"Titulo"} />
            </View>

            break;
    }
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 50,
        marginBottom: 12,
    },

    voltar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 50,
        marginBottom: 16,
        marginLeft: 16,
    },
})