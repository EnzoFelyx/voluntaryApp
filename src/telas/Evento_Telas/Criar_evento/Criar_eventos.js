import React from 'react';
import { SafeAreaView, ScrollView,View } from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './componentes/Topo';
import Cabecalho from '../../../componentes/Cabecalho';
import PerfilFoto from '../../../../assets/PerfilFoto.png';
import Criar_mock from '../../../mocks/Criar_mock';
import CriarEvento from './componentes/CriarEvento';


export default function Criar_eventos({titulos, interacoes}) {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho PerfilFoto={PerfilFoto} titulo={"Criar Evento"}/>
                <ScrollView style={{ flex: 1 }}>
                    <Background back={"quadrado2"} >
                        <Topo {...Criar_mock}/>
                        <View style = {{marginTop:80}}>
                        <CriarEvento/>
                        </View>
                    </Background>
                </ScrollView>
            </Background>
        </ScrollView>
    )
}