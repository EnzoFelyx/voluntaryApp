import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Linha from "../../../../componentes/Linha";
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";

export default function Corpo({ subtitle, texto, input, botaoValidar, botaoReenviar }) {
    return <SafeAreaView>

        <Titulo entrada={subtitle} tipo={"Titulo"} />

        <Input legenda={texto} entrada={input} />

        <Botao texto={botaoValidar} tipo={1} />

        <View style={{ paddingVertical: 24, }}>

            <Linha texto={"ou"} />

        </View>

        <Botao texto={botaoReenviar} tipo={2} />
        
    </SafeAreaView>
}