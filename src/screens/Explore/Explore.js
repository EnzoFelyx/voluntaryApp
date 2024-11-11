import { React } from 'react';
import Screen from '../../components/Screen';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import Background from '../../components/Background';

export default function Explore() {

    const dadosDoUsuario = useTopo();

    return (
        <Screen>
            <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={'Explorar'} />
            <Background back="backTwo">
                
            </Background>
        </Screen>
    )
}