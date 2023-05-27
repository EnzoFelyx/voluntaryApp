import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Corpo from './Componentes/Corpo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Validacao({ titulo, corpo }) {
    return <SafeAreaView style={{flex:1}}>
        <Background back={"fundo"}>
            <Cabecalho titulo={titulo.title} icone={true} />
            <Background back={"quadrado1"}>
                <Corpo {...corpo} />
            </Background>
        </Background>
    </SafeAreaView>
}