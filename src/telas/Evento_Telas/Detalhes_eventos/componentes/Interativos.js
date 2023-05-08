import React from "react";
import { StyleSheet, View } from "react-native";
import Icone from "../../../../componentes/Icone";
import Linha from "../../../../componentes/Linha";

export default function Interativos({ requisto, foto, mapa, avisos }) {
    return <>
        <Linha />

        <View style={estilos.icones}>

            <Icone tipo={"detalhes"} icone={"checkbox-marked-circle-outline"} texto={requisto} />

            <Icone tipo={"detalhes"} icone={"map-outline"} texto={mapa} />

            <Icone tipo={"detalhes"} icone={"image-multiple-outline"} texto={foto} />

            <Icone tipo={"detalhes"} icone={"information-outline"} texto={avisos} />

        </View>

        <Linha />
    </>
}

const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
    },
})