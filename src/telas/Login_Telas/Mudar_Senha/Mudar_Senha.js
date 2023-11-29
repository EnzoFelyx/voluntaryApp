import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Corpo from './Componentes/Corpo';
import { mudarsenha } from "../../../../config/text.json";

export default function Validacao() {

    const titulo = mudarsenha.titulo

    return <Background back={"fundo"}>
        <ScrollView>
            <Cabecalho titulo={titulo} icone={true} />
            <Background back={"quadrado1"}>
                <Corpo />
            </Background>
        </ScrollView>
    </Background>
}