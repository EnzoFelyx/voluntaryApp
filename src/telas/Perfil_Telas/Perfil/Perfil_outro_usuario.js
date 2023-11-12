import React, { useEffect, useState } from 'react';
import { ScrollView,View,Text } from 'react-native';
import Background from '../../../componentes/Background';
import Interativos from './Componentes/Interativos';
import VisaoGeral from './Componentes/VisaoGeral';
import Meu_elo from './Componentes/Meu_elo';
import Voltar from '../../../componentes/Voltar';
import { useRoute } from '@react-navigation/native';



export default function Perfil_outro_usuario({ route }) {
    const { item } = route.params;
    let  [perfil, setFoto] = useState(item.imagemOng ?? item.perfil);
    let [nome, setNome] = useState(item.nomeOng ?? item.nome);
    const navigation = useRoute();
 
    return (
            
        <>
            <Background back={"fundo"}>
                <Background back={"quadrado2"}>
                <Voltar />
                    <VisaoGeral perfil={perfil} nome={nome}/>
                    {/*<Meu_elo  />
                    <Interativos />*/}
                </Background>
            </Background>
        </>
    )
}