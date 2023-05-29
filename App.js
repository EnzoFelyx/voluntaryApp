import { StatusBar, SafeAreaView, View,Dimensions,StyleSheet } from 'react-native';
import React from 'react'
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import RotasLogin from './src/rotas/Rotas_login';
import Rotas from './src/rotas/Rotas';



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
    <SafeAreaView style = {estilo.container}>
     <StatusBar style = {{backgroundColor:'#E4F4CD'}}/>
      <RotasLogin/>
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