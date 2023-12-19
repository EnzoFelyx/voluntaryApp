import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../../../components/Icon";
import Line from "../../../../components/Line";

export default function Interactions() {
    return <View style={{ marginBottom: 12 }}>
        <Line />
        <View style={estilos.icones}>
            <Icon tipo={"detalhes"} icone={"checkbox-marked-circle-outline"} texto={'Requistos'} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"map-outline"} texto={'Mapa'} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"image-multiple-outline"} texto={'Fotos'} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"information-outline"} texto={'Avisos'} tamanho={32} />
        </View>
        <Line />
    </View>
}

const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
        marginVertical: 8,
    },
})