import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Detalhes_mock from "../mocks/Evento_Mocks/Detalhes_mock";

import Seus_eventos from "../telas/Evento_Telas/Seus_eventos/Seus_eventos";

import Seus_eventos_mocks from "../mocks/Evento_Mocks/Seus_eventos";

import Criar_eventos from "../telas/Evento_Telas/Criar_evento/Criar_eventos"

import Perfil from "../telas/Perfil_Telas/Perfil/Perfil"
import Perfil_mocks from "../mocks/Perfil_Mocks/Perfil_mocks"


const Stack = createNativeStackNavigator();

export default function SeusEventosRotas()
{   
    return(<Stack.Navigator
            screenOptions={{
            headerShown:false}}
            >
        <Stack.Screen name='SeusEventos'>
        {() => <Seus_eventos {...Seus_eventos_mocks} />} 
        </Stack.Screen>

        <Stack.Screen name='Detalhes'>
        {() => <Detalhes_eventos {...Detalhes_mock} />}
        </Stack.Screen>

        <Stack.Screen name='CriarEvento' component={Criar_eventos}/>

        <Stack.Screen name='PerfilCriadorEvento'>
        {() => <Perfil {...Perfil_mocks}/>}
        </Stack.Screen> 
        
        </Stack.Navigator>
    )
}