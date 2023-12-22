import React from 'react';
import loginImagem from '../../../../assets/loginTelas/login.png';
import Background from '../../../components/Background';
import Image from '../../../components/Image';
import Screen from '../../../components/Screen';
import Account from './components/Account';
import Interactions from './components/Interactions';

export default function Login() {
    return <Screen>
        <Image imagem={loginImagem} tipo={"loginImagem"} />
        <Background back={"backOne"}>
            <Account />
            <Interactions />
        </Background>
    </Screen>
}
