import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../components/Background';
import Top from '../../../components/Top';
import Criar_mock from '../../../mocks/Evento_Mocks/Criar_mock';
import Topo from './components/Topo';


export default function NewEvent() {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <Background back={"fundo"}>
                    <Top PerfilFoto={PerfilFoto} titulo={"Criar Evento"} />
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

//arrumar depois