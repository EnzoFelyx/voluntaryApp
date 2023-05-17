import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Busca from './componentes/Busca';
import Eventos from './componentes/Eventos';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Cabecalho from '../../../componentes/Cabecalho';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pesquisar_eventos({ topo, eventos }) {
    return (
        <SafeAreaView style = {{height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={topo.titulo}/>
                <Background back={"quadrado2"}>
                    <Busca {...topo} />
                    <Eventos {...eventos} />
                </Background>
            </Background>
        </SafeAreaView>
    )
}