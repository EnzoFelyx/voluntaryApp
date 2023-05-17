import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Icone from "../../../../componentes/Icone";

export default function Topo({ titulo }) {
    return <>
        <View style={estilos.titulo}>
            <Titulo entrada={titulo} tipo={'Titulo'} />
            <Icone icone={"logout"} tipo={"perfil"} tamanho={32}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 40,
        marginTop: 54,
    },
})
