import React from 'react';
import { SafeAreaView } from 'react-native';
import Background from '../../../componentes/Background';
import Corpo from './Componentes/Corpo';
import Topo from './Componentes/Topo';

export default function Comentar_evento ({titulo, corpo}) {
    return <>
        <SafeAreaView style={{ height: "100%" }}>
            <Background back={"fundo"}>
            <Topo {...titulo}/>
                <Background back={"quadrado2"}>
                    <Corpo {...corpo}/>
                </Background>
            </Background>
        </SafeAreaView>
    </>
}