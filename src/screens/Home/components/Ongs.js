import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import AnimetedView from '../../../components/Animeted';
import Interation from '../../../components/Interation';
import Owner from '../../../components/Owner';
import Texto from '../../../components/texto';
import estilos from './estilos';
import useLoading from '../../../hooks/useSkeleton';

const height = Dimensions.get('window').height;

export default function Ongs({ dadosOng, titulo }) {

  const navigation = useNavigation();

   const loading = useLoading();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>
      <Interation
        tipo={'Home'}
        imagem={{ uri: item.perfil }}
        styleImg={'imagemEvento'}
        acao={() => {
          navigation.navigate('OtherProfile', {
            perfil: item.perfil,
            nome: item.nome
          });
        }}
      />
      <Owner image={{ uri: item.perfil }} nome={item.nome} acao={() => {
        navigation.navigate('OtherProfile', {
          perfil: item.perfil,
          nome: item.nome
        });
      }} />
    </View>
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>

    {loading ? (

      <View style={{ flex: 1, }}>
        <View
          style={skeleton.capa}>
          <AnimetedView width={'25%'} length={400} />
        </View>

        <View style={skeleton.owner}>

          <View style={skeleton.pfp}>
            <AnimetedView width={'25%'} length={400} />
          </View>

          <View style={skeleton.nameperson}>
            <AnimetedView width={'25%'} length={400} />
          </View>

        </View>

      </View>
    ) : (

      <FlatList
        data={dadosOng}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    )}

  </View>

}

const skeleton = StyleSheet.create({
  capa: {
    overflow: "hidden",
    marginTop: 8,
    borderRadius: 15,
    marginRight: 16,
    width: '100%',
    height: height * 0.25,
    backgroundColor: "#DEDFE3",
  },

  owner: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 35,
    alignItems: 'center',
    marginLeft: 6,
  },

  pfp: {
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    height: 32,
    width: 32,
    borderRadius: 25,
  },

  nameperson: {
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    borderRadius: 8,
    marginLeft: 8,
    marginTop: 4,
    width: 125,
    height: 20,
  }
})


