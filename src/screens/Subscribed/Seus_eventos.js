import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';
import { pegarEventos } from '../../../servicos/requisicoes/eventos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pegarDadosUsuario } from '../../../servicos/requisicoes/usuario';
import { pegarEventosInscritos } from '../../../servicos/requisicoes/eventos';

import { useNavigation } from "@react-navigation/native";

export default function SeusEventos({ topo, interacoes }) {
  const [dadosEventos, setDadosEventos] = useState({});
  const [dadosAmarra, setDadosAmarra] = useState({});
  const [dadosDoUsuario, setDadosDoUsuario] = useState({});
  const navigation = useNavigation();


  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const id = await AsyncStorage.getItem('id');

        if (!id) {
          return null;
        }

        const resultadoIns = await pegarEventosInscritos(id);
        if (resultadoIns) {
          setDadosAmarra(resultadoIns);

          const eventosPromises = resultadoIns.map(async (inscricao) => {
            const resultado = await pegarEventos(inscricao.eventoId);
            return resultado;
          });

          const eventos = await Promise.all(eventosPromises);

          setDadosEventos(eventos);
        }
      }

      fetchData();

      // Limpar os dados quando a tela for desfocada (quando sair da página)
      return () => {
        setDadosAmarra({});
        setDadosEventos({});
      };
    }, [navigation])
  );

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Background back="fundo">
        <Cabecalho Foto={{ uri: dadosDoUsuario.perfil }} titulo={topo.titulo} icone={false} />
        <Background back="quadrado2">
          <View style={{ flex: 1 }}>
            <Lista {...interacoes} dadosEventos={dadosEventos} />
          </View>
        </Background>
      </Background>
    </SafeAreaView>
  );
}
