import React from 'react';
import { ScrollView } from 'react-native';
import fotoRegistrar from '../../../../assets/loginTelas/registra.png';
import { registrar } from "../../../../config/text.json";
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Titulo from '../../../componentes/Titulo';
import Dados from './Componentes/Dados';

export default function Registra() {

    const titulo = registrar.titulo

    return <ScrollView style={{ flex: 1, backgroundColor: '#E4F4CD', }}>
        <Background back={"fundo"}>
            <Cabecalho Foto={fotoRegistrar} icone={true} fotoEstilo={"loginImagem"} />
            <Background back={"quadrado1"}>
                <Titulo entrada={titulo} tipo={"Titulo"} />
                <Dados />
            </Background>
        </Background>
    </ScrollView>
}