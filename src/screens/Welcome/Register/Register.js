import React from 'react';
import { ScrollView } from 'react-native';
import fotoRegistrar from '../../../../assets/loginTelas/registra.png';
import { register } from "../../../../config/text.json";
import Background from '../../../components/Background';
import Title from '../../../components/Title';
import Top from '../../../components/Top';
import Dados from './components/Dados';

export default function Index() {

    const title = register.title

    return <ScrollView style={{ flex: 1, backgroundColor: '#E4F4CD', }}>
        <Background back={"fundo"}>
            <Top Foto={fotoRegistrar} icone={true} fotoEstilo={"loginImagem"} />
            <Background back={"quadrado1"}>
                <Title entrada={title} tipo={"Titulo"} />
                <Dados />
            </Background>
        </Background>
    </ScrollView>
}