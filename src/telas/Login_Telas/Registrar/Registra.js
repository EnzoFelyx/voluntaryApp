import React from 'react';
import { ScrollView } from 'react-native';
import fotoRegistrar from '../../../../assets/loginTelas/registra.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Dados from './Componentes/Dados';
import Titulo from './Componentes/Titulo';


export default function Registra({ titulo, dados, BotaoCriarConta }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Cabecalho Foto={fotoRegistrar} icone ={true} fotoEstilo={"loginImagem"}/> 
            <Background back={"quadrado1"}>
                <Titulo {...titulo} />
                <Dados {...dados}{...BotaoCriarConta}/>
            </Background>
        </Background>
    </ScrollView>
}