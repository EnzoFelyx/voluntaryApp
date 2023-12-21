import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewEvent from '../screens/Event/NewEvent'
import Details from '../screens/Event/Details'
import Subscribed from '../screens/Subscribed'
/* import Perfil_outro_usuario from "../telas/Perfil_Telas/Perfil/Perfil_outro_usuario"; */

const Stack = createNativeStackNavigator();

export default function SeusEventosRotas() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='SeusEventos'>
            {() => <Subscribed/>}
        </Stack.Screen>

        <Stack.Screen name="Detalhes" component={NewEvent} />


        <Stack.Screen name='CriarEvento' component={Details} />

        {/* <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario} /> */}


    </Stack.Navigator>
    )
}