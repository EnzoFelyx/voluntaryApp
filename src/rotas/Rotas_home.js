import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Perfil_outro_usuario from "../telas/Perfil_Telas/Perfil/Perfil_outro_usuario";
import Home from "../telas/Usuario_Telas/Home/Home";

const Stack = createNativeStackNavigator();

export default function HomeRotas() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackHome'>
            {() => <Home />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes" component={Detalhes_eventos} />
        <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario} />
    </Stack.Navigator>
    )
}