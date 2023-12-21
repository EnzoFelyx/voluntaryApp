import { Quicksand_400Regular, Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';
import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Login_Routes from './src/routes/Login_Routes'
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
      <SafeAreaView style={estilo.container}>
        <StatusBar backgroundColor={'#E4F4CD'} barStyle={'dark-content'}/>
        <Login_Routes />
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