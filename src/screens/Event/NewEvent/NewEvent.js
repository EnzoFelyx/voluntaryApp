import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Screen from '../../../components/Screen';
import Background from '../../../components/Background';
import Top from '../../../components/Top';
import Criar_mock from '../../../mocks/Evento_Mocks/Criar_mock';
import Topo from './components/Topo';
import { newEvent } from "../../../../config/text.json";
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

export default function NewEvent() {

    const title = newEvent.page1.title

    return <Screen>
        <Top PerfilFoto={PerfilFoto} titulo={title} />
        <Background back={'backOne'}>
            {/* <Topo {...Criar_mock} /> */}
            <FirstStep />
            <SecondStep />
        </Background>
    </Screen>
}
