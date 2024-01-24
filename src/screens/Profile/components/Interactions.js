import { useNavigation } from "@react-navigation/native";
import React from "react";
import { profile } from "../../../../config/text.json";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/texto";
import Icon from "../../../components/Icon";

export default function Interactions() {

    const navigation = useNavigation();
    const { made, subscribed, posts, config } = profile.buttons

    const Option = ({ acao, texto }) =>
        <TouchableOpacity style={estilos.perfilOption} onPress={acao}>
            <Texto style={estilos.texto}>{texto}</Texto>
            <Icon icone={"chevron-right"} interativo={false} cor={"gray"} styleIcon={{ fontSize: 28 }} />
        </TouchableOpacity>

    return (
        <>
            <Option
                texto={made}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <Option
                texto={subscribed}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <Option
                texto={posts}
                acao={() => {/*  navigation.navigate('Meus Posts') */ }}
            />

            <Option
                texto={config}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
        </>
    );
}


const estilos = StyleSheet.create({

    perfilOption: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        padding: 15,
        backgroundColor: "#E5ECB9",
        borderRadius: 15,
        elevation: 8,
        marginBottom: 16,
    },

    texto: {
        fontSize: 18,
        fontWeight: "bold",
    },

})