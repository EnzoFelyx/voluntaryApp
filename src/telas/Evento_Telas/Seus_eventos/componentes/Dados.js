import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Imagem from "../../../../componentes/Imagem";
import Texto from '../../../../componentes/texto';
import Botao from '../../../../componentes/Botao';
import Blooddonation from "../../../../../assets/exemplos/Blooddonation.png"
import Jose from "../../../../../assets/exemplos/Jose.png";
import doacaoCasacos from "../../../../../assets/exemplos/doacaoCasacos.png";
import Maria from "../../../../../assets/exemplos/Maria.png";
import Organizadora from '../../../../componentes/Organizadora';
import Linha from '../../../../componentes/Linha';



const data = [
  {
    id: '1',
    title: 'Doação de sangue',
    imageUrl: Blooddonation,
    criador: 'Cleyton Silva Nascimento',
    perfilCriador: Jose
  },
  {
    id: '2',
    title: 'Doação de casacos',
    imageUrl: doacaoCasacos,
    criador: 'Maria Eduarda Ferreira',
    perfilCriador: Maria
  },


];

const MyImageList = () => {

  const renderItem = ({ item }) => (<View style={estilo.container}>
    <Botao tipo={3} texto={
      <View>
        <Texto>{item.title}</Texto>
        <Imagem imagem={item.imageUrl} tipo={'imagemEvento'} />
      </View>}
      acao={() => { }} />
    <View style={{ marginTop: 12, marginBottom: 8, }}>
      <Organizadora image={item.perfilCriador} nome={item.criador} />
    </View>
    <Linha />
  </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const estilo = StyleSheet.create({
  container: {

  },

})

export default MyImageList;

