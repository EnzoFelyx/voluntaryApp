import React from 'react';
import { ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';

export default function Home({ topo, interacoes }) {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={topo.titulo} />
                <Background back={"quadrado2"}> 
                    <ScrollView style={{ flex: 1 }}>
                        <Lista {...interacoes} />
                    </ScrollView>
                </Background>
            </Background>
        </ScrollView>
    )
}