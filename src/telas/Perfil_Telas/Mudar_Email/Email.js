import React from 'react';
import { SafeAreaView } from 'react-native';
import Background from '../../../componentes/Background';
import Corpo from './Componentes/Corpo';
import Topo from './Componentes/Topo';

export default function Email({topo, corpo}) {
    return <SafeAreaView style={{ height: "100%" }}>
        <Background back={"fundo"}>
            <Topo {...topo}/>
            <Background back={"quadrado1"}>
                <Corpo {...corpo}/>
            </Background>
        </Background>
    </SafeAreaView>
}