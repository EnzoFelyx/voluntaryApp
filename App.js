import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
  useFonts
} from '@expo-google-fonts/quicksand';
import React from 'react';
import { StatusBar, View } from 'react-native';

import Login_Routes from './src/routes/Login_Routes';
import MyProfile from './src/screens/Perfil/MyProfile';



export default function App() {

  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
    Quicksand_500Medium,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
      {/* <Login_Routes /> */}
      <MyProfile />
    </View>
  );
}
