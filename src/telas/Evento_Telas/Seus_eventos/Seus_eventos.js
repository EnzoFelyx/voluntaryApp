import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Lista from './componentes/Lista';
import Topo from './componentes/Topo';
import NovoEvento from './componentes/novoEvento';

export default function Seus_eventos({ topo, interacoes}) {
    return (
        <ScrollView contentContainerStyle={{height: "100%" }}>
            <Background back={"fundo"}>
                <Topo  {...topo} />
                <Background back={"quadrado2"}>
                    <Lista />
                    <NovoEvento/>
                </Background>

            </Background>
        </ScrollView>
    )
}