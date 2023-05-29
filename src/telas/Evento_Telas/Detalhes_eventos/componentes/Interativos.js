import React from "react";
import { StyleSheet, View } from "react-native";
import Icone from "../../../../componentes/Icone";
import Linha from "../../../../componentes/Linha";

export default function Interativos({ requisto, foto, mapa, avisos }) {
    return <>
        <Linha />

        <View style={estilos.icones}>

            <Icone tipo={"detalhes"} icone={"checkbox-marked-circle-outline"} texto={requisto} tamanho={32}/>

            <Icone tipo={"detalhes"} icone={"map-outline"} texto={mapa} tamanho={32}/>

            <Icone tipo={"detalhes"} icone={"image-multiple-outline"} texto={foto} tamanho={32}/>

            <Icone tipo={"detalhes"} icone={"information-outline"} texto={avisos} tamanho={32}/>

        </View>

        <Linha />
    </>
}

const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
    },
})