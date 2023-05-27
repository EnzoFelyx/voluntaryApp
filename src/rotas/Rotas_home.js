import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from"../telas/Usuario_Telas/Home/Home" ;
import Home_mocks from "../mocks/Home_mocks";


import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Detalhes_mock from "../mocks/Evento_Mocks/Detalhes_mock";


import Perfil from "../telas/Perfil_Telas/Perfil/Perfil"
import Perfil_mocks from "../mocks/Perfil_Mocks/Perfil_mocks"



const Stack = createNativeStackNavigator();

export default function HomeRotas()
{   
    return(<Stack.Navigator
            screenOptions={{
            headerShown:false}}
            >
        <Stack.Screen name='StackHome'>
        {() => <Home {...Home_mocks} />}
        </Stack.Screen>


        <Stack.Screen name='Detalhes'>
        {() => <Detalhes_eventos {...Detalhes_mock} />}
        </Stack.Screen>

        <Stack.Screen name='PerfilCriadorEvento'>
        {() => <Perfil {...Perfil_mocks}/>}
        </Stack.Screen> 

        <Stack.Screen name='PerfilOng'>
        {() => <Perfil {...Perfil_mocks}/>}
        </Stack.Screen> 

        
        </Stack.Navigator>
    )
}