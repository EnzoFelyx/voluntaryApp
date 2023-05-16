import { StatusBar, SafeAreaView, View } from 'react-native';
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


import Login_mock from './src/mocks/Login_Mocks/Login_mock';
import Pesquisar_eventos_mocks from './src/mocks/Evento_Mocks/Pesquisar_eventos';
import Registrar_mocks from './src/mocks/Login_Mocks/Registrar_mocks';
import Seus_eventos_mocks from './src/mocks/Evento_Mocks/Seus_eventos';
import Home_mocks from './src/mocks/Home_mocks';
import Recuperar_mock from './src/mocks/Login_Mocks/Recuperar_mock';
import Detalhes_mock from './src/mocks/Evento_Mocks/Detalhes_mock';
import Validacao_Mock from './src/mocks/Login_Mocks/Validacao_mock';
import Mudar_Mock from './src/mocks/Login_Mocks/Mudar_mock';
import Email_mocks from './src/mocks/Perfil_Mocks/Email_mocks';
import Posts_mocks from './src/mocks/Perfil_Mocks/Posts_mocks';
import Comentar_mocks from './src/mocks/Evento_Mocks/Comentar';
import Perfil_mocks from './src/mocks/Perfil_Mocks/Perfil_mocks';

export default function App() {
  const [fontCarregada] = useFonts({
    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold,
  })

  if (!fontCarregada) {
    return <View />
  }

  return (
    <SafeAreaView >

      {/* <Comentar_evento {...Comentar_mocks}/> */}
      {/* <Seus_eventos {...Seus_eventos_mocks}/> */}
      {/* <Login {...Login_mock} /> */}
      {/* <Registra {...Registrar_mocks}/> */}
      {/* <Recuperar {...Recuperar_mock} /> */}
      {/* <Validacao {...Validacao_Mock}/> */}
      {/* <Mudar_Senha {...Mudar_Mock}/> */}
      {/* <Email {...Email_mocks}/> */}
      {/* <Meus_Posts {...Posts_mocks}/> */}

      
      {/* <Pesquisar_eventos {...Pesquisar_eventos_mocks} /> */}
      <Home {...Home_mocks} />
      {/* <Criar_eventos/> */}
      {/* <Perfil {...Perfil_mocks}/>  */}
      {/* <Detalhes_eventos {...Detalhes_mock} /> */}

    </SafeAreaView>
  );
}
