import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Background from '../../components/Background';
import Top from '../../components/Top';
import { pegarEventos, pegarEventosInscritos } from '../../services/requests/eventos';
import { pegarDadosUsuario } from '../../services/requests/usuario';
import List from './components/List';

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
        <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={topo.titulo} icone={false} />
        <Background back="quadrado2">
          <View style={{ flex: 1 }}>
            <List {...interacoes} dadosEventos={dadosEventos} />
          </View>
        </Background>
      </Background>
    </SafeAreaView>
  );
}
