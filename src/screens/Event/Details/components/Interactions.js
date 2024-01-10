import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "../../../../components/Icon";
import Line from "../../../../components/Line";
import { details } from '../../../../../config/text.json'
import Texto from "../../../../components/texto";

export default function Interactions() {

    const { requirements, map, photos, warnings } = details.icons;

    const Interact = ({ icone, familia, texto }) =>
        <TouchableOpacity style={{ alignItems: "center", }}>
            <Icon familia={familia} tipo={"detalhes"} icone={icone} interativo={false} />
            <Texto style={estilos.texto}>{texto}</Texto>
        </TouchableOpacity>


    return <View style={{ marginBottom: 12 }}>
        <Line />
        <View style={estilos.icones}>
            <Interact familia={"Feather"} icone={"check-circle"} texto={requirements} />
            <Interact familia={"Entypo"} icone={"map"} texto={map} />
            <Interact familia={"Entypo"} icone={"images"} texto={photos} />
            <Interact icone={"information-outline"} texto={warnings} />
        </View>
        <Line />
    </View>
}

const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 8,
        justifyContent: 'space-between'
    },
})