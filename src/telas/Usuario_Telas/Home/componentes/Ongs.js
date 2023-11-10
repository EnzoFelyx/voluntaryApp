import React from 'react';
import { FlatList, View } from 'react-native';
import MaosUnidas from "../../../../../assets/exemplos/MaosUnidas.png";
import dedosEntrelacados from "../../../../../assets/exemplos/dedosEntrelacados.png";
import perfilDedosEntrelacados from "../../../../../assets/exemplos/perfilDedosEntrelacados.png";
import perfilMaosUnidas from "../../../../../assets/exemplos/perfilMaosUnidas.png";
import Botao from '../../../../componentes/Botao';
import Imagem from "../../../../componentes/Imagem";
import Organizadora from '../../../../componentes/Organizadora';
import { useNavigation } from '@react-navigation/native';


export default function Ongs({dadosOng}) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={{uri:item.imagemOng}} tipo={'imagemEvento'} />
        </View>}
        acao={() => navigation.navigate('PerfilCriadorEvento', { item })} 
      />
      <View style={{ marginTop: 12, marginRight: 16, }}>
        <Organizadora image={{uri:item.perfilOng}} nome={item.nomeOng} acao={() => navigation.navigate('PerfilCriadorEvento', { item })}  />
      </View>
    </View>
  );

  return (
    <FlatList
    data={dadosOng}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()} 
    horizontal={true}
    />
  );
}



