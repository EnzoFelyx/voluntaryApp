import React from "react";
import { StyleSheet, View } from "react-native";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Opcao from "../../../../componentes/Opcao";
import Titulo from '../../../../componentes/Titulo';
import Texto from '../../../../componentes/texto';
export default function Pedido({ titulo, dados, BotaoRecupera }) {
    
    return <>
        <Titulo entrada={titulo.title} />

        <View style={estilos.nome}>
            <Texto>{dados.nome}</Texto>
            <Input entrada={dados.nomeInsert} />
        </View>

        <Opcao texto={dados.ou} />

        <View style={estilos.email}>
            <Texto>{dados.email}</Texto>
            <Input entrada={dados.emailInsert} />
        </View>

        <Botao texto={BotaoRecupera.botao} tipo={1} />

    </>
}

const estilos = StyleSheet.create({
    nome: {
        marginTop: 16,
    },

    email: {
        marginBottom: 38,
    },
    container: {
        flex: 1,
    },
})