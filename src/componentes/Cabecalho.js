import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Imagem from './Imagem';
import Titulo from './Titulo';
import Icone from './Icone';

export default function Cabecalho({ titulo, Foto = true, PerfilFoto = null }) {

    if (Foto == true) {
        return <SafeAreaView style={estilos.topo}>
            <Titulo entrada={titulo} tipo={"Titulo"} />
            <TouchableOpacity style={{ flex: 1 }}>
                <Imagem imagem={PerfilFoto} tipo={'perfilFoto'} />
            </TouchableOpacity>
        </SafeAreaView>
    }

    else {
         return <SafeAreaView style={estilos.voltar}>
            <Icone icone={"chevron-left"} interativo={true} tamanho={40}/>
            <Titulo entrada={titulo} tipo={"Titulo"} />
         </SafeAreaView>
    }
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 56,
        marginBottom: 12,
    },

    voltar: {
        flexDirection: "row",
        marginTop: 56,
        marginLeft: 16,
    },
})
