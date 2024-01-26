import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { subscribed } from '../../../../config/text.json';
import Icon from "../../../components/Icon";
import Interaction from "../../../components/Interation";
import Owner from "../../../components/Owner";
import Texto from "../../../components/texto";

const { width, height } = Dimensions.get('window');

export default function Lista({ dadosEventos }) {

  const { subtitle, subs } = subscribed.body;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ScrollView>
      <Interaction
        tipo={'Home'}
        imagem={{ uri: item[0].imagemEvento }}
        styleImg={'imagemEvento'}
        texto={item[0].nomeEvento}
        styleLeg={{ margin: 8, position: "absolute" }}
        acao={() => navigation.navigate('Detalhes', { item: item[0] })}
      />
      <Owner image={{ uri: item[0].imagemCriadorEvento }} nome={item[0].criadorEvento} acao={() => navigation.navigate('PerfilCriadorEvento', { item })} />
    </ScrollView>
  );

  return <>
    <View style={{ paddingHorizontal: 12 }}>
      <Texto>{subtitle}</Texto>
    </View>

    <View style={{ marginTop: 40, marginBottom: 24, }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}> {subs} {dadosEventos.length}</Text>
    </View>

    <FlatList
      data={dadosEventos}
      keyExtractor={(item) => item[0].id.toString()}
      renderItem={renderItem}
    />

    <Icon icone={"plus-circle-outline"} acao={() => { navigation.navigate('CriarEvento') }} styleIcon={estilus.botao} />

  </>

}

const estilus = StyleSheet.create({

  botao: {
    bottom: height * 0.03,
    right: width * 0.05,
    position: "absolute",
    fontSize: 36,
  }

})