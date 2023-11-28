import { StatusBar, SafeAreaView, View,Dimensions,StyleSheet } from 'react-native';
import React, { useEffect } from 'react'
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import api from './src/servicos/api'


import RotasLogin from './src/rotas/Rotas_login';
import Rotas from './src/rotas/Rotas';



const window = Dimensions.get('window');


export default function App() {

  useEffect(() =>  {
    async function pegarDardos (){
      const resultado = await api.get('/users')

    }
    pegarDardos()
  },[])
  



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
     <StatusBar backgroundColor={'#E4F4CD'}/>
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