import React from 'react';
import { View,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';


export default function Seus_eventos({ topo, interacoes }) {
    return (<SafeAreaView style = {{flex:1}}>
            <StatusBar/>
            <Background back={"fundo"}>
                <Cabecalho Foto={PerfilFoto} titulo={topo.titulo} icone={false} />
                <Background back={"quadrado2"}>
                    <View style={{ flex: 1, }}>
                        <Lista {...interacoes} />
                    </View>
                </Background>
            </Background>
        </SafeAreaView>
    )
}