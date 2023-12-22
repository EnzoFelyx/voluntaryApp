import React from 'react';
import fotoRegistrar from '../../../../assets/loginTelas/registra.png';
import { register } from "../../../../config/text.json";
import Background from '../../../components/Background';
import Screen from '../../../components/Screen';
import Title from '../../../components/Title';
import Top from '../../../components/Top';
import Dados from './components/Dados';

export default function Index() {

    const title = register.title

    return <Screen>
        <Top Foto={fotoRegistrar} icone={true} fotoEstilo={"loginImagem"} />
        <Background back={"backOne"}>
            <Title entrada={title} tipo={"Titulo"} />
            <Dados />
        </Background>
    </Screen>
}