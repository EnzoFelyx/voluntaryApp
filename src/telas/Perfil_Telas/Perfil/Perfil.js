import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Interativos from './Componentes/Interativos';
import Topo from './Componentes/Topo';
import VisaoGeral from './Componentes/VisaoGeral';
import Meu_elo from './Componentes/Meu_elo';


export default function Perfil({ topo, botoes }) {
    return (
        <ScrollView>
            <Background back={"fundo"}>
                <Topo {...topo} />
                <Background back={"quadrado2"}>
                    <VisaoGeral />
                    <Meu_elo />
                    <Interativos {...botoes} />
                </Background>
            </Background>
        </ScrollView>
    )
}