import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Conta from './componentes/Conta';
import Interacoes from './componentes/Interacoes';

import loginImagem from '../../../../assets/login.png';
import Background from '../../../componentes/Background';
import Imagem from '../../../componentes/Imagem';

export default function Login({ conta, interacoes }) {
    return <SafeAreaView style={{ height: "100%" }}>
        <Background back={"fundo"}>
            <View style={{ alignItems: 'center' }}>
                <Imagem imagem={loginImagem} tipo={"loginImagem"} />
            </View>
            <Background back={"quadrado1"}>
                <Conta {...conta} />
                <Interacoes {...interacoes} />
            </Background>
        </Background>
    </SafeAreaView>
}