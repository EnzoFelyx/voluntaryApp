import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { subscribed } from '../../../config/text.json';
import Background from '../../components/Background';
import Screen from '../../components/Screen';
import Top from '../../components/Top';
import { pegarEventos, pegarEventosInscritos } from '../../services/requests/eventos';
import { pegarDadosUsuario } from '../../services/requests/usuario';
import List from './components/List';

import { useNavigation } from "@react-navigation/native";

export default function SeusEventos({ interacoes }) {

  const title = subscribed.title

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
    <Screen type={'static'}>
      <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} icone={false} />
      <Background back="backTwo">
        <View style={{ flex: 1 }}>
          <List {...interacoes} dadosEventos={dadosEventos} />
        </View>
      </Background>
    </Screen>
  );
}
