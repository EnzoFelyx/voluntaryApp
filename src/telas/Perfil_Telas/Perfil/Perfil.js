import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Voltar from '../../../componentes/Voltar';
import { pegarDadosUsuario } from '../../../servicos/requisicoes/usuario';
import Interativos from './Componentes/Interativos';
import Meu_elo from './Componentes/Meu_elo';
import Topo from './Componentes/Topo';
import VisaoGeral from './Componentes/VisaoGeral';



export default function Perfil({ topo, botoes }) {
  const [dadosDoUsuario, setDadosDoUsuario] = useState({});
  const navigation = useRoute();

  useEffect(() => {
    async function buscarDadosDoUsuario() {
      const id = await AsyncStorage.getItem('id');

      if (!id) {
        return null;
      }

      const resultado = await pegarDadosUsuario(id);
      if (resultado) {
        setDadosDoUsuario(resultado);

      }
    }
    buscarDadosDoUsuario();

  }, []);



  const rotaAtual = navigation.name;

  return (

    <ScrollView>
      <Background back={"fundo"}>

        {rotaAtual === 'StackPerfil' ?
          (
            <Topo {...topo} />
          )
          :
          (
            <>
              <Voltar />
              <Topo {...topo} />
            </>
          )}

        <Background back={"quadrado2"}>
          <VisaoGeral {...dadosDoUsuario} />
          <Meu_elo />
          <Interativos {...botoes} />
        </Background>
      </Background>
    </ScrollView>
  )
}