import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { profile } from "../../../../config/text.json";
import Icon from "../../../components/Icon";
import Title from '../../../components/Title';

export default function Topo() {

    const navigation = useNavigation();
    const title = profile.title

    return <>
        <View style={estilos.titulo}>
            <Title entrada={title} tipo={'Titulo'} />
            <Icon icone={"logout"} styleIcon={{ marginRight: 24, fontSize: 30, }} acao={() => { navigation.navigate('Login') }} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 10,
    },
})
