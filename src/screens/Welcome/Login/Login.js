import React from 'react';
import { ScrollView } from 'react-native';
import loginImagem from '../../../../assets/loginTelas/login.png';
import Background from '../../../componentes/Background';
import Imagem from '../../../componentes/Imagem';
import Conta from './componentes/Conta';
import Interacoes from './componentes/Interacoes';

export default function Login() {
    return <ScrollView style={{ flex: 1, backgroundColor: '#E4F4CD', }}>
        <Background back={"fundo"}>
            <Imagem imagem={loginImagem} tipo={"loginImagem"} />
            <Background back={"quadrado1"}>
                <Conta />
                <Interacoes />
            </Background>
        </Background>
    </ScrollView>
}

