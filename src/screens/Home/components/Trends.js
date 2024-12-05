import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import Interation from '../../../components/Interation';
import Owner from '../../../components/Owner';
import Texto from '../../../components/texto';
import estilos from './estilos';
import AnimetedView from '../../../components/Animeted';

const height = Dimensions.get('window').height;

export default function Trends({ dadosEventos, titulo }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

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

    {isLoading ? (

      <View style={{ flex: 1, }}>
        <View
          style={skeleton.capa}>
          <AnimetedView width={'25%'} length={400} />
        </View>

        <View style={skeleton.legenda}>
          <AnimetedView width={'25%'} length={300} />
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
        data={dadosEventos}
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

  legenda: {
    overflow: "hidden",
    backgroundColor: "#DEDFE3",
    borderRadius: 8,
    width: 250,
    height: 20,
    margin: 8,
  },

  owner: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 14,
    alignItems: 'center',
    marginLeft: 8,
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