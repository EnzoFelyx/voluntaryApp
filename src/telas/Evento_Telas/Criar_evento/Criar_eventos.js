import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './componentes/Topo';
import Cabecalho from '../../../componentes/Cabecalho';
import PerfilFoto from '../../../../assets/PerfilFoto.png';
import Criar_mock from '../../../mocks/Criar_mock';


export default function Criar_eventos({titulos, interacoes}) {
    return (
        <SafeAreaView contentContainerStyle={{ height: "100%" }}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={"Criar Evento"}/>
                <Background back={"quadrado2"}>
                    <Topo {...Criar_mock}/>
                </Background>
            </Background>
        </ScrollView>
        </SafeAreaView>
    )
}