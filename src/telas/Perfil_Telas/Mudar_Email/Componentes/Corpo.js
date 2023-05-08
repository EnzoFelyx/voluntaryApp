import React from "react";
import { StyleSheet, View } from "react-native";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";

export default function Corpo({ subtitle, legendaNova, inputEmail, legendaSenha, inputSenha, botao }) {
    return <>
        <View style={{marginTop: 16,}}>
            <Titulo entrada={subtitle} />

            <View style={estilos.texto}>
                <Texto>{legendaNova}</Texto>
            </View>

            <Input entrada={inputEmail}/>

            <View style={estilos.texto}>
                <Texto>{legendaSenha}</Texto>
            </View>

            <Input entrada={inputSenha} senha={true}/>

            <View style={estilos.botao}>
                <Botao texto={botao} tipo={1} />
            </View>

        </View>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 32,
    },
    texto: {
        marginTop: 24,
        marginBottom: 8,
    },
})