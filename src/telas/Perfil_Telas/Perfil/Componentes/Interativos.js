import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import { SimpleLineIcons } from '@expo/vector-icons';
import Botao from '../../../../componentes/Botao';
import PerfilOption from "../../../../componentes/PerfilOption";
import { useNavigation } from "@react-navigation/native";

export default function Interativos({criados, posts, email, senha, config}) {

    const navigation = useNavigation();

    return (
    <SafeAreaView>
        <PerfilOption 
        texto={criados}
        acao={() => {navigation.navigate('Meus Eventos Criados')}}
        />

        <PerfilOption 
        texto={posts}
        acao={() => {navigation.navigate('Meus Posts')}}
        />

        <PerfilOption texto={email}
        acao={() => {navigation.navigate('Email')}}
        />

        <PerfilOption texto={senha}
        acao = {() => {navigation.navigate('Mudar Senha')}}
        />

        <PerfilOption texto={config}/>

    </SafeAreaView>
    );
}
