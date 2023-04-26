import React from 'react';
import { ScrollView, View } from 'react-native';
import Background from '../../../componentes/Background';
import Lista from './componentes/Lista';
import Topo from './componentes/Topo';

export default function Home({topo,interacoes}) {
    return (
        <ScrollView contentContainerStyle={{height: "100%" }}>
            <Background back={"fundo"}>
                <Topo  {...topo} />
                <Background back={"quadrado2"}>
                <ScrollView style={{flex:1}}>
                    <Lista {...interacoes}/>
                </ScrollView>
                </Background>

            </Background>
        </ScrollView>
    )
}