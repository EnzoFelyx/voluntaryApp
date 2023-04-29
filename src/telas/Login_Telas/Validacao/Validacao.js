import React from 'react';
import { ScrollView, View } from 'react-native';
import fotoRegistrar from '../../../../assets/loginTelas/registra.png';
import Background from '../../../componentes/Background';
import Botao from '../../../componentes/Botao';
import Imagem from '../../../componentes/Imagem';
import Dados from './Componentes/Dados';
import Topo from './Componentes/Topo';
import Titulo from '../../../componentes/Titulo';

export default function Validacao({}) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Topo/>
            <Background back={"quadrado1"}>
            </Background>
        </Background>
    </ScrollView>
}