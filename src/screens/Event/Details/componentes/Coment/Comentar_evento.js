import React from 'react';
import { SafeAreaView } from 'react-native';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Corpo from './Componentes/Corpo';

export default function Comentar_evento({ titulo, corpo }) {
    return <SafeAreaView style={{ height: "100%" }}>
        <Background back={"fundo"}>
            <Cabecalho titulo={titulo.title} Foto={false} />
            <Background back={"quadrado2"}>
                <Corpo {...corpo} />
            </Background>
        </Background>
    </SafeAreaView>
}