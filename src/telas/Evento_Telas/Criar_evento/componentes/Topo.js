import React from "react";
import { StyleSheet, View } from "react-native";
import Texto from "../../../../componentes/texto";
import Input from "../../../../componentes/Input";


export default function Topo({ titulos, interacoes }) {
    return <>
        <Texto>{titulos.evento}</Texto>
        <Input entrada={interacoes.titulo} />
        <View>
            <Texto>{titulos.data}</Texto>
            <Input entrada={interacoes.calendario} />
            <Texto>{titulos.comeca}</Texto>
            <Input entrada={interacoes.hora}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {

    },
})
