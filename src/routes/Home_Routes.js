import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Details from '../screens/Event/Details'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

export default function Home_Routes() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackHome'>
            {() => <Home />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes" component={Details} />
        {/* <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario} /> */}
    </Stack.Navigator>
    )
}