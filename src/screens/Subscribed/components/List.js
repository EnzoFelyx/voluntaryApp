import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

import { subscribed } from '../../../../config/text.json';
import Botao from "../../../components/Button";
import Interaction from "../../../components/Interation";
import Owner from "../../../components/Owner";
import Texto from "../../../components/texto";
import { estilos } from "./estilos";

export default function Lista({ dadosEventos }) {

  const { subtitle, subs } = subscribed.body;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ScrollView style={estilos.espaco}>
      <Interaction
        tipo={'Home'}
        imagem={{ uri: item[0].imagemEvento }}
        styleImg={'imagemEvento'}
        texto={item[0].nomeEvento}
        styleLeg={{ margin: 8 }}
        acao={() => navigation.navigate('Detalhes', { item: item[0] })}
      />
      <Owner image={{ uri: item[0].imagemCriadorEvento }} nome={item[0].criadorEvento} acao={() => navigation.navigate('PerfilCriadorEvento', { item })} />
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
      data={dadosEventos}
      keyExtractor={(item) => item[0].id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 300 }}
      ListFooterComponent={<Botao texto={'Criar evento'} tipo={3} acao={() => navigation.navigate('CriarEvento')} />}
    />

  </>
}