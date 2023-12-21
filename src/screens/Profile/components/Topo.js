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
            <Icon icone={"logout"} tipo={"perfil"} tamanho={32} acao={() => { navigation.navigate('Login') }} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 32,
        marginTop: 16,
    },
})
