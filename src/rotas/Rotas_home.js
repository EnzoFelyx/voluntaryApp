import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from"../telas/Usuario_Telas/Home/Home" ;
import Home_mocks from "../mocks/Home_mocks";


import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Detalhes_mock from "../mocks/Evento_Mocks/Detalhes_mock";


import Perfil_outro_usuario from "../telas/Perfil_Telas/Perfil/Perfil_outro_usuario"
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


        <Stack.Screen name="Detalhes" component={Detalhes_eventos}/>

        <Stack.Screen name='PerfilCriadorEvento' component={Perfil_outro_usuario}/>
        
        
        </Stack.Navigator>
    )
}