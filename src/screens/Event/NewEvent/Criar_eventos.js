import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Criar_mock from '../../../mocks/Evento_Mocks/Criar_mock';
import Topo from './componentes/Topo';


export default function Criar_eventos() {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <Background back={"fundo"}>
                    <Cabecalho PerfilFoto={PerfilFoto} titulo={"Criar Evento"} />
                    <ScrollView >
                        <Background back={"quadrado2"} >
                            <Topo {...Criar_mock} />
                        </Background>
                    </ScrollView>
                </Background>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}