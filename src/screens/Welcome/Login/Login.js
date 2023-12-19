import React from 'react';
import { ScrollView } from 'react-native';
import loginImagem from '../../../../assets/loginTelas/login.png';
import Background from '../../../componentes/Background';
import Image from '../../../components/Image';
import Account from './components/Account';
import Interactions from './components/Interactions';

export default function Login() {
    return <ScrollView style={{ flex: 1, backgroundColor: '#E4F4CD', }}>
        <Background back={"fundo"}>
            <Image imagem={loginImagem} tipo={"loginImagem"} />
            <Background back={"quadrado1"}>
                <Account />
                <Interactions />
            </Background>
        </Background>
    </ScrollView>
}

