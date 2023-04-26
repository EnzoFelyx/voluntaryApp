import React from "react";
import Titulo from '../../../../componentes/Titulo'
import PerfilFoto from '../../../../../assets/PerfilFoto.png'
import Imagem from '../../../../componentes/Imagem';
import { StyleSheet, View } from "react-native";


export default function Topo({ titulo }) {
    return <>
        <View style={estilos.topo}>
            <Titulo entrada={titulo} />
            <Imagem imagem={PerfilFoto} tipo={'perfilFoto'}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 10,

    },
})