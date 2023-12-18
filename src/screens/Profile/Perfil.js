import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Voltar from '../../../componentes/Voltar';
import useTopo from '../../../hooks/useTopo';
import Interativos from './Componentes/Interativos';
import Meu_elo from './Componentes/Meu_elo';
import Topo from './Componentes/Topo';
import VisaoGeral from './Componentes/VisaoGeral';

export default function Perfil() {

  const navigation = useRoute();
  const rotaAtual = navigation.name;
  const dadosDoUsuario = useTopo();

  return (

    <ScrollView>
      <Background back={"fundo"}>

        {rotaAtual === 'StackPerfil' ?
          (
            <Topo />
          )
          :
          (
            <>
              <Voltar />
              <Topo />
            </>
          )}

        <Background back={"quadrado2"}>
          <VisaoGeral {...dadosDoUsuario} />
          <Meu_elo />
          <Interativos />
        </Background>
      </Background>
    </ScrollView>
  )
}