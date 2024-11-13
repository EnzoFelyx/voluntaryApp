import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

import { subscribed } from '../../../../config/text.json';
import Botao from "../../../components/Button";
import Interaction from "../../../components/Interation";
import Owner from "../../../components/Owner";
import Texto from "../../../components/texto";
import { pegarEventos, pegarEventosInscritos } from '../../../services/requests/eventos';
import { estilos } from "./estilos";


export default function Lista() {

  const { subtitle, subs } = subscribed.body;
  const navigation = useNavigation();

  const [dadosEventos, setDadosEventos] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const id = await AsyncStorage.getItem('id');

        if (!id) {
          return null;
        }

        const resultadoIns = await pegarEventosInscritos(id);
        if (resultadoIns) {
          const eventosPromises = resultadoIns.map(async (inscricao) => {
            const resultado = await pegarEventos(inscricao.eventoId);
            return resultado;
          });
          const eventos = await Promise.all(eventosPromises);
          setDadosEventos(eventos);
        }
      }
      fetchData();
      return () => {
        setDadosEventos({});
      };
    }, [])
  );

  const dados = (Array.isArray(dadosEventos) ? dadosEventos : []).flat();

  const renderItem = ({ item }) => (
    <ScrollView style={estilos.espaco}>
      <Interaction
        tipo={'subsEvento'}
        imagem={{ uri: item.imagemEvento }}
        styleImg={'subsEvento'}
        texto={item.nomeEvento}
        styleLeg={{ margin: 8 }}
        acao={() => navigation.navigate('Detalhes', { item })}
      />
      <Owner
        image={{ uri: item.imagemCriadorEvento }}
        nome={item.criadorEvento}
        acao={() => {
          navigation.navigate('OtherProfile', {
            perfil: item.imagemCriadorEvento,
            nome: item.criadorEvento
          });
        }}
      />
    </ScrollView>
  );

  return <>

    <View style={estilos.topo}>
      <Texto>{subtitle}</Texto>
    </View>

    <View style={estilos.subs}>
      <Text style={estilos.subtitle}> {subs} {dadosEventos.length}</Text>
    </View>

    <FlatList
      data={dados}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      scrollEnabled={false}
      contentContainerStyle={{ paddingBottom: 30 }}
      ListFooterComponent={<Botao texto={'Criar evento'} tipo={3} acao={() => navigation.navigate('CriarEvento')} />}
    />

  </>
}