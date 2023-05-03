import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './Componentes/Topo';
import VisaoGeral from './Componentes/VisaoGeral';

export default function Perfil({}) {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Topo/>
                <Background back={"quadrado2"}> 
                <VisaoGeral/>
                </Background>
            </Background>
        </ScrollView>
    )
}