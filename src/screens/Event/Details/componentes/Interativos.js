import React from "react";
import { StyleSheet, View } from "react-native";
import Icone from "../../../../componentes/Icone";
import Linha from "../../../../componentes/Linha";

export default function Interativos() {
    return <View style={{marginBottom: 12}}>
        <Linha />
        <View style={estilos.icones}>
            <Icone tipo={"detalhes"} icone={"checkbox-marked-circle-outline"} texto={'Requistos'} tamanho={32} />
            <Icone tipo={"detalhes"} icone={"map-outline"} texto={'Mapa'} tamanho={32} />
            <Icone tipo={"detalhes"} icone={"image-multiple-outline"} texto={'Fotos'} tamanho={32} />
            <Icone tipo={"detalhes"} icone={"information-outline"} texto={'Avisos'} tamanho={32} />
        </View>
        <Linha />
    </View>
}

const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
        marginVertical: 8,
    },
})