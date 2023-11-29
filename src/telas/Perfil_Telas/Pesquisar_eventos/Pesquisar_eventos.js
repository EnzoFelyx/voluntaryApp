import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Busca from './componentes/Busca';
import Eventos from './componentes/Eventos';

export default function Pesquisar_eventos({ topo, eventos }) {
    return (
        <SafeAreaView style={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho titulo={topo.titulo} />
                <Background back={"quadrado2"}>
                    <Busca {...topo} />
                    <Eventos {...eventos} />
                </Background>
            </Background>
        </SafeAreaView>
    )
}