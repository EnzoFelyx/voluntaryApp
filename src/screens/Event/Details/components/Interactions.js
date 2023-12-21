import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../../../components/Icon";
import Line from "../../../../components/Line";
import { details } from '../../../../../config/text.json'

export default function Interactions() {

    const {requirements, map, photos, warnings} = details.icons;

    return <View style={{ marginBottom: 12 }}>
        <Line />
        <View style={estilos.icones}>
            <Icon tipo={"detalhes"} icone={"checkbox-marked-circle-outline"} texto={requirements} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"map-outline"} texto={map} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"image-multiple-outline"} texto={photos} tamanho={32} />
            <Icon tipo={"detalhes"} icone={"information-outline"} texto={warnings} tamanho={32} />
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