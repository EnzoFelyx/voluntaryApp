import React from 'react';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import { newEvent } from "../../../../config/text.json";
import Background from '../../../components/Background';
import Screen from '../../../components/Screen';
import Top from '../../../components/Top';
import FirstStep from './components/FirstStep';

export default function NewEvent() {

    const title = newEvent.page1.title

    return <Screen>
        <Top PerfilFoto={PerfilFoto} titulo={title} />
        <Background back={'backOne'}>
            <FirstStep />
        </Background>
    </Screen>
}
