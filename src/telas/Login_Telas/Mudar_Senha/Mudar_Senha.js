import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Corpo from './Componentes/Corpo';
import Topo from './Componentes/Topo';

export default function Validacao({titulo, corpo}) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Topo {...titulo}/>
            <Background back={"quadrado1"}>
                <Corpo {...corpo}/>
            </Background>
        </Background>
    </ScrollView>
}