import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react'
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import Login from './src/telas/Login_Telas/Login/Login';
import Pesquisar_eventos from './src/telas/Evento_Telas/Pesquisar_eventos/Pesquisar_eventos';
import Registra from './src/telas/Login_Telas/Registrar/Registra';
import Recuperar from './src/telas/Login_Telas/Recuperar/Recuperar'

import Login_mock from './src/mocks/Login_mock';
import Pesquisar_eventos_mocks from './src/mocks/Pesquisar_eventos';
import Registrar_mocks from './src/mocks/Registrar_mocks';
import Recuperar_mock from './src/mocks/Recuperar_mock';
import Detalhes_eventos from './src/telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos';
import Detalhes_mock from './src/mocks/Detalhes_mock';
import Criar_eventos from './src/telas/Evento_Telas/Criar_evento/Criar_eventos';


export default function App() {
  const [fontCarregada] = useFonts({
    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold,
  })

  if (!fontCarregada) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      {/* {<Login {...Login_mock} />} */}
      {/* <Registra {...Registrar_mocks}/> */}
      {/* <Recuperar {...Recuperar_mock} /> */}
      {/* <Pesquisar_eventos {...Pesquisar_eventos_mocks} /> */}
      {/* <Detalhes_eventos {...Detalhes_mock} /> */}
      <Criar_eventos/>


    </SafeAreaView>
  );
}
