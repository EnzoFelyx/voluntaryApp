import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";

import Seus_eventos from "../telas/Evento_Telas/Seus_eventos/Seus_eventos";

import Seus_eventos_mocks from "../mocks/Evento_Mocks/Seus_eventos";

import Criar_eventos from "../telas/Evento_Telas/Criar_evento/Criar_eventos"

import Perfil_outro_usuario from "../telas/Perfil_Telas/Perfil/Perfil_outro_usuario"


import Perfil from "../telas/Perfil_Telas/Perfil/Perfil"
import Perfil_mocks from "../mocks/Perfil_Mocks/Perfil_mocks"


const Stack = createNativeStackNavigator();

export default function SeusEventosRotas() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='SeusEventos'>
            {() => <Seus_eventos {...Seus_eventos_mocks} />}
        </Stack.Screen>

        <Stack.Screen name="Detalhes" component={Detalhes_eventos}/>
        

        <Stack.Screen name='CriarEvento' component={Criar_eventos} />

        <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario}/>


    </Stack.Navigator>
    )
}