import AsyncStorage from '@react-native-async-storage/async-storage';
import { React, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import { pegarDadosUsuario } from '../../../servicos/requisicoes/usuario';
import Busca from './componentes/Busca';



export default function Pesquisar_eventos({ topo, eventos }) {

  const [dadosDoUsuario, setDadosDoUsuario] = useState({});

  useEffect(() => {
    async function pegarUser() {
      const id = await AsyncStorage.getItem('id');


      if (!id) {
        return null;
      }

      const resultadouser = await pegarDadosUsuario(id);
      if (resultadouser) {
        setDadosDoUsuario(resultadouser);

      }
    }
    pegarUser();
  }, []);


  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Background back={"fundo"}>
        <Cabecalho Foto={{ uri: dadosDoUsuario.perfil }} titulo={topo.titulo} />
        <Background back={"quadrado2"}>
          <Busca {...topo} {...eventos} />
        </Background>
      </Background>
    </SafeAreaView>
  )
}