import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Conta from './componentes/Conta';
import Interacoes from './componentes/Interacoes';

import loginImagem from '../../../../assets/loginTelas/login.png';
import Background from '../../../componentes/Background';
import Imagem from '../../../componentes/Imagem';

export default function Login({ conta, interacoes }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Imagem imagem={loginImagem} tipo={"loginImagem"} />
            <Background back={"quadrado1"}>
                <Conta {...conta} />
                <Interacoes {...interacoes} />
            </Background>
        </Background>
    </ScrollView>
}