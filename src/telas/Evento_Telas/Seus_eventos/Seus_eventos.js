import React from 'react';
import { ScrollView, View } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';

export default function Seus_eventos({ topo, interacoes }) {
    return (
        <ScrollView>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={topo.titulo} />
                <Background back={"quadrado2"}>
                    <View style={{flex: 1,}}>
                        <Lista {...interacoes}/>
                    </View>                    
                </Background>
            </Background>
        </ScrollView>
    )
}