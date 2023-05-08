import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";
import Input from "../../../../componentes/Input";

export default function Corpo({ subtitle, legenda, input, botao }) {
    return <>

        <View style={{ marginLeft: 12}}>
            <Text style={estilos.subtitle}>{subtitle}</Text>
            <Texto>{legenda}</Texto>
        </View>

        <TouchableOpacity>
            <Input entrada={input} tipo={2} />
        </TouchableOpacity>

        <Botao texto={botao} tipo={6}/>
    </>
}

const estilos = StyleSheet.create({
    subtitle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingRight: 8,
        marginBottom: 24,
    },

})