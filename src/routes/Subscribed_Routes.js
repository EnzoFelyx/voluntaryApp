import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewEvent from '../screens/Event/NewEvent/NewEvent'
import Details from '../screens/Event/Details/Details'
import Subscribed from '../screens/Subscribed/Subscribed'
import Maps from '../screens/Event/Maps';
import Perfil_outro_usuario from "../screens/Profile/Perfil_outro_usuario";
import FinalStep from "../screens/Event/NewEvent/components/FinalStep";

const Stack = createNativeStackNavigator();

export default function SeusEventosRotas() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen name='SeusEventos'>
            {() => <Subscribed />}
        </Stack.Screen>

        <Stack.Screen name="CriarEvento" component={NewEvent} />

        <Stack.Screen name="Maps" component={Maps} />

        <Stack.Screen name="FinalStep" component={FinalStep} />


        <Stack.Screen name='Detalhes' component={Details} />

        <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario} />


    </Stack.Navigator>
    )
}