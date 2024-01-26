import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Screen from '../../../components/Screen';
import Background from '../../../components/Background';
import Top from '../../../components/Top';
import Criar_mock from '../../../mocks/Evento_Mocks/Criar_mock';
import Topo from './components/Topo';


export default function NewEvent() {
    return <Screen>
        <Background back={"fundo"}>
            <Top PerfilFoto={PerfilFoto} titulo={"Criar Evento"} />
            <ScrollView >
                <Background back={'backTwo'}>
                    {/* <Topo {...Criar_mock} /> */}
                </Background>
            </ScrollView>
        </Background>
    </Screen>
}

//arrumar depois