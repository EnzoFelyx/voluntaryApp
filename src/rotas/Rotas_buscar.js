import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Pesquisar_eventos from "../telas/Evento_Telas/Pesquisar_eventos/Pesquisar_eventos";
import Pesquisar_eventos_mocks from "../mocks/Evento_Mocks/Pesquisar_eventos"

import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Detalhes_mock from "../mocks/Evento_Mocks/Detalhes_mock";

const Stack = createNativeStackNavigator();

export default function BuscarRotas()
{   
    return(<Stack.Navigator 
        screenOptions={{
        headerShown:false}}
        >
        <Stack.Screen name='StackBuscar'>
        {() => <Pesquisar_eventos {...Pesquisar_eventos_mocks} />}
        </Stack.Screen>


        <Stack.Screen name='Detalhes'>
        {() => <Detalhes_eventos {...Detalhes_mock} />}
        </Stack.Screen>
        
        </Stack.Navigator>
    )
}
