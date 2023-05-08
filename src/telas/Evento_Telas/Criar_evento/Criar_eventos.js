import React from 'react';
import { SafeAreaView, ScrollView,View,KeyboardAvoidingView,Platform} from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './componentes/Topo';
import Cabecalho from '../../../componentes/Cabecalho';
import CriarEvento from './componentes/CriarEvento';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Criar_mock from '../../../mocks/Evento_Mocks/Criar_mock';


export default function Criar_eventos({titulos, interacoes}) {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
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
            </KeyboardAvoidingView>
        </ScrollView>
        
    )
}