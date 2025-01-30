import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AnimetedView from '../../../components/Animeted';
import Interation from '../../../components/Interation';
import Texto from '../../../components/texto';
import useTopo from '../../../hooks/useTop';
import estilos from './estilos';
import useLoading from '../../../hooks/useSkeleton';

export default function Destaques({ dadosDoUsuario, titulo }) {

  const myUser = useTopo();

  const navigation = useNavigation();

  const loading = useLoading();
  const SkeletonFeed = () => {
    return <View style={skeleton.card}>

      <View style={skeleton.pfp}>
        <AnimetedView width={'25%'} length={75} />
      </View>

      <View style={skeleton.userName}>
        <AnimetedView width={'25%'} length={100} />
      </View>

      <View style={skeleton.button}>
        <AnimetedView width={'25%'} length={125} />
      </View>


    </View>
  }

  const renderItem = ({ item }) => (
    <Interation
      tipo={'Highlight'}
      imagem={{ uri: item.perfil }}
      styleImg={'perfilDestaque'}
      texto={item.nome}
      id={[myUser.id, item.id]}
      styleLeg={{ marginVertical: 10, textAlign: 'center', }}
      acao={() => {
        navigation.navigate('OtherProfile', item);
      }}
    />
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>

    {loading ?
      (
        <View style={{ flexDirection: "row", overflow: 'hidden' }}>
          <SkeletonFeed />
          <SkeletonFeed />
          <SkeletonFeed />
          <SkeletonFeed />
          <SkeletonFeed />
          <SkeletonFeed />
          <SkeletonFeed />
        </View>
      ) :

      (
        <FlatList
          data={dadosDoUsuario}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      )}

  </View >
}


const skeleton = StyleSheet.create({

  card: {
    width: 160,
    height: 210,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: "#FFFF",
    marginEnd: 15,
    marginBottom: 15,
    paddingBottom: 15,
    paddingTop: 20,
    paddingHorizontal: 14,
    alignItems: 'center'
  },

  pfp: {
    width: 60,
    height: 60,
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    borderRadius: 45,
  },

  userName: {
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    borderRadius: 8,
    width: 100,
    height: 20,
    marginTop: 15,
    textAlign: 'center',
  },

  button: {
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    height: 40,
    width: 115,
    borderRadius: 15,
    marginTop: "auto",
  }

})