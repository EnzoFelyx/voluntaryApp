import React from 'react';
import { ScrollView, View,StatusBar } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';
import { SafeAreaView } from 'react-native-safe-area-context';
import NovoEvento from "./componentes/novoEvento";


export default function Seus_eventos({ topo, interacoes,botao }) {
    return (<SafeAreaView style = {{flex:1}}>
            <StatusBar/>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={topo.titulo} />
                <Background back={"quadrado2"}>
                    <View style={{ flex: 1, }}>
                        <Lista {...interacoes} />
                    </View>
                </Background>
            </Background>
        </SafeAreaView>
    )
}