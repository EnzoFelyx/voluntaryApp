import { Quicksand_400Regular, Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';
import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import RotasLogin from './src/rotas/Rotas_login';
const window = Dimensions.get('window');

export default function App() {

  const [fontCarregada] = useFonts({
    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold,
  })

  if (!fontCarregada) {
    return <View />
  }

  return (
    <>

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#E4F4CD'} barStyle='dark-content' />
        <RotasLogin />
      </SafeAreaView>
      <SafeAreaView style={estilo.barradeBaixo} />
    </>
  );
}

const estilo = StyleSheet.create(
  {
    container: {
      flex: 1,
      width: window.width,
      height: window.height,
    },
    barradeBaixo:
    {
      backgroundColor: '#649469',
      flex: 0,
    }
  }
);