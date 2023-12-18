import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { perfil } from "../../../../../config/text.json";
import Icone from "../../../../componentes/Icone";
import Titulo from '../../../../componentes/Titulo';

export default function Topo() {

    const navigation = useNavigation();
    const titulo = perfil.conta.titulo

    return <>
        <View style={estilos.titulo}>
            <Titulo entrada={titulo} tipo={'Titulo'} />
            <Icone icone={"logout"} tipo={"perfil"} tamanho={32} acao={() => { navigation.navigate('Login') }} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 32,
        marginTop: 16,
    },
})
