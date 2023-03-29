import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Busca from './componentes/Busca';
import Eventos from './componentes/Eventos';
import Topo from './componentes/Topo';

export default function Pesquisar_eventos({ topo, eventos }) {
    return (
        <ScrollView contentContainerStyle={{height: "100%" }}>
            <Background back={"fundo"}>
                <Topo  {...topo} />
                <Background back={"quadrado2"}>
                    <Busca {...topo} />
                    <Eventos {...eventos} />
                </Background>
            </Background>
        </ScrollView>
    )
}