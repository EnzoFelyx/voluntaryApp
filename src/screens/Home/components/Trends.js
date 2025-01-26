import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import Interation from '../../../components/Interation';
import Owner from '../../../components/Owner';
import Texto from '../../../components/texto';
import estilos from './estilos';
import useLoading from '../../../hooks/useSkeleton';
import SkeletonEvent from '../../../components/SkeletonEvent';

const height = Dimensions.get('window').height;

export default function Trends({ dadosEventos, titulo }) {

  const loading = useLoading();

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>

      <Interation
        tipo={'Home'}
        imagem={{ uri: item.imagemEvento }}
        styleImg={'imagemEvento'}
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
    </View>
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>

    {loading ? (
      <SkeletonEvent />
    ) : (

      <FlatList
        data={dadosEventos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />

    )}
  </View>
}
