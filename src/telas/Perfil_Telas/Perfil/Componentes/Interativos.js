import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import { SimpleLineIcons } from '@expo/vector-icons';
import Botao from '../../../../componentes/Botao';
import PerfilOption from "../../../../componentes/PerfilOption";

export default function Interativos({criados, posts, email, senha, config}) {
    return <SafeAreaView>
        <PerfilOption texto={criados}/>
        <PerfilOption texto={posts}/>
        <PerfilOption texto={email}/>
        <PerfilOption texto={senha}/>
        <PerfilOption texto={config}/>
    </SafeAreaView>
}
