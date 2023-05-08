import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Icone from "../../../../componentes/Icone";

export default function Topo({ titulo }) {
    return <>
        <View style={estilos.titulo}>
            <Titulo entrada={titulo} />
            <Icone icone={"logout"} tipo={"perfil"} texto={""}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 40,
        marginTop: 54,
    },
    vazar: {
        marginLeft: "auto",
        marginTop: 8,
        marginRight: 40,
    },
})
