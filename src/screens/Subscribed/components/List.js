import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { subscribed } from '../../../../config/text.json';
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Line from "../../../components/Line";
import Owner from "../../../components/Owner";
import Texto from "../../../components/texto";
import Interaction from "../../../components/Interation";


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



  return (<>
    <View style={{ paddingHorizontal: 12 }}>{/*Margem apenas para adequar ao figma*/}
      <Texto>{subtitle}</Texto>
    </View>


    <View style={{ marginTop: 40, marginBottom: 24, }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}> {subs} {dadosEventos.length}</Text>
    </View>

    <Line />
    <>

      <FlatList
        data={dadosEventos}
        keyExtractor={(item) => item[0].id.toString()}
        renderItem={renderItem}
      />
    </>


    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CriarEvento')}>
        <MaterialCommunityIcons name={"plus-circle-outline"} size={36} color="black" style={{ marginRight: 8 }} />
      </TouchableOpacity>
    </View>





    {/*View da Flatlist*/}


  </>)


}

