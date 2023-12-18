import React from 'react';
import { ScrollView } from 'react-native';
import { perfil } from "../../../../config/text.json";
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Corpo from './Componentes/Corpo';

export default function Validacao() {

    const titulo = perfil.mudarSenha.titulo

    return <Background back={"fundo"}>
        <ScrollView>
            <Cabecalho titulo={titulo} icone={true} />
            <Background back={"quadrado1"}>
                <Corpo />
            </Background>
        </ScrollView>
    </Background>
}