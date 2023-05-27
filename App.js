import { StatusBar, SafeAreaView, View,Dimensions,StyleSheet } from 'react-native';
import React from 'react'
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import Login from './src/telas/Login_Telas/Login/Login';
import Pesquisar_eventos from './src/telas/Evento_Telas/Pesquisar_eventos/Pesquisar_eventos';
import Registra from './src/telas/Login_Telas/Registrar/Registra';
import Recuperar from './src/telas/Login_Telas/Recuperar/Recuperar';
import Seus_eventos from './src/telas/Evento_Telas/Seus_eventos/Seus_eventos';
import Home from './src/telas/Usuario_Telas/Home/Home';
import Detalhes_eventos from './src/telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos';
import Criar_eventos from './src/telas/Evento_Telas/Criar_evento/Criar_eventos';
import Validacao from './src/telas/Login_Telas/Validacao/Validacao';
import Mudar_Senha from './src/telas/Login_Telas/Mudar_Senha/Mudar_Senha';
import Perfil from './src/telas/Perfil_Telas/Perfil/Perfil';
import Email from './src/telas/Perfil_Telas/Mudar_Email/Email';
import Meus_Posts from './src/telas/Perfil_Telas/Meus_Posts/Meus_Posts';
import Comentar_evento from './src/telas/Evento_Telas/Comentar_evento/Comentar_evento';
import Rotas from './src/rotas/Rotas';


import Login_mock from './src/mocks/Login_Mocks/Login_mock';
import Registrar_mocks from './src/mocks/Login_Mocks/Registrar_mocks';
import Recuperar_mock from './src/mocks/Login_Mocks/Recuperar_mock';
import Detalhes_mock from './src/mocks/Evento_Mocks/Detalhes_mock';
import Validacao_Mock from './src/mocks/Login_Mocks/Validacao_mock';
import Mudar_Mock from './src/mocks/Login_Mocks/Mudar_mock';
import Email_mocks from './src/mocks/Perfil_Mocks/Email_mocks';
import Posts_mocks from './src/mocks/Perfil_Mocks/Posts_mocks';
import Comentar_mocks from './src/mocks/Evento_Mocks/Comentar';

const window = Dimensions.get('window');


export default function App() {
  const [fontCarregada] = useFonts({
    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold,
  })

  if (!fontCarregada) {
    return <View />
  }

  return (<>
    <SafeAreaView style = {estilo.container}>
     <StatusBar style = {{backgroundColor:'#E4F4CD'}}/>
      <Rotas/>
      {/*<Login {...Login_mock} />*/}
      {/* <Registra {...Registrar_mocks}/> */}
      {/* <Recuperar {...Recuperar_mock} /> */}
      {/* <Validacao {...Validacao_Mock}/> */}
      {/* <Mudar_Senha {...Mudar_Mock}/> */}
      {/* <Email {...Email_mocks}/> */}
      {/* <Meus_Posts {...Posts_mocks}/> */}
      {/* <Comentar_evento {...Comentar_mocks}/> */}
      </SafeAreaView>
      <SafeAreaView style = {estilo.barradeBaixo}/>

    </>
  );
}

const estilo = StyleSheet.create(
{
  container: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor:'#E4F4CD'
  },
  barradeBaixo:
  {
    backgroundColor:'#649469',
    flex:0,
  }
}
);