import React from 'react';
import { ScrollView, View } from 'react-native';
import Background from '../../../componentes/Background';
import Botao from '../../../componentes/Botao';
import Dados from './Componentes/Dados';
import Topo from './Componentes/Topo';
import Titulo from './Componentes/Titulo';


export default function Registra({ titulo, dados, BotaoCriarConta }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Topo/>
            <Background back={"quadrado1"}>
                <Titulo {...titulo} />
                <Dados {...dados} />
                <Botao texto={BotaoCriarConta.botao} tipo={1} />
            </Background>
        </Background>
    </ScrollView>
}