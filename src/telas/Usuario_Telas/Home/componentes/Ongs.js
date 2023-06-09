import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Imagem from "../../../../componentes/Imagem";
import Texto from '../../../../componentes/texto';
import Botao from '../../../../componentes/Botao';
import MaosUnidas from "../../../../../assets/exemplos/MaosUnidas.png"
import perfilMaosUnidas from "../../../../../assets/exemplos/perfilMaosUnidas.png";
import dedosEntrelacados from "../../../../../assets/exemplos/dedosEntrelacados.png";
import perfilDedosEntrelacados from "../../../../../assets/exemplos/perfilDedosEntrelacados.png";
import Organizadora from '../../../../componentes/Organizadora';


const data = [
  {
    id: '1',
    imageUrl: MaosUnidas,
    criador: 'ONG Mãos Unidas',
    perfilOng: perfilMaosUnidas
  },
  {
    id: '2',
    imageUrl: dedosEntrelacados,
    criador: 'ONG Dedos entrelaçados',
    perfilOng: perfilDedosEntrelacados
  },


];

const Ongs = () => {

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, marginEnd: 10, marginBottom: 20 }}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={item.imageUrl} tipo={'imagemEvento'} />

        </View>}

        acao={() => { }}
      />
      <View style={{ marginTop: 12, marginRight: 16, }}>
        <Organizadora image={item.perfilOng} nome={item.criador} />
      </View>



    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
}

export default Ongs;

