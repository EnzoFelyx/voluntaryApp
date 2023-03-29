import React from 'react';
import { ScrollView, View } from 'react-native';
import fotoRegistrar from '../../../../assets/registra.png';
import Background from '../../../componentes/Background';
import Botao from '../../../componentes/Botao';
import Imagem from '../../../componentes/Imagem';
import Dados from './Componentes/Dados';
import Topo from './Componentes/Topo';

export default function Registra({titulo, dados, BotaoCriarConta }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <View style={{ alignItems: 'center' }}>
                <Imagem imagem={fotoRegistrar} tipo={"loginImagem"} />
            </View>
            <Background back={"quadrado1"}>
                    <Topo {...titulo}/>
                    <Dados {...dados}/>
                    <Botao texto={BotaoCriarConta.botao} tipo={1}/>
            </Background>
        </Background>
    </ScrollView>
}