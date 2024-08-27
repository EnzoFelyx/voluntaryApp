import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { subscribed } from '../../../../config/text.json';
import Botao from "../../../components/Button";
import Interaction from "../../../components/Interation";
import Owner from "../../../components/Owner";
import Texto from "../../../components/texto";

export default function Lista({ dadosEventos }) {

  const { subtitle, subs } = subscribed.body;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ScrollView style={{ marginBottom: 16 }}>
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

    <View style={{ paddingHorizontal: 12, paddingRight: 20}}>
      <Texto>{subtitle}</Texto>
    </View>

    <View style={{ marginTop: 40, marginBottom: 24, }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}> {subs} {dadosEventos.length}</Text>
    </View>

    <FlatList
      data={dadosEventos}
      keyExtractor={(item) => item[0].id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 250 }}
      ListFooterComponent={<Botao texto={'Criar evento'} tipo={3} acao={ () => navigation.navigate('CriarEvento')} />}
    />

  </>
}