import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Lista from './componentes/Lista';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png'
import NovoEvento from './componentes/novoEvento';
import Cabecalho from '../../../componentes/Cabecalho';

export default function Seus_eventos({ topo, interacoes }) {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={"Pesquisar eventos"} />
                <Background back={"quadrado2"}>
                    <Lista />
                    <NovoEvento />
                </Background>
            </Background>
        </ScrollView>
    )
}