import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Mudar_senha from '../screens/Recover/Password/Password'
import Email from '../screens/Recover/Email/Email'
import Perfil from '../screens/Profile/Profile'

import Pesquisar_eventos_mocks from "../mocks/Perfil_Mocks/Pesquisar_eventos";
import Search from '../screens/Search/Search'

import Posts_mocks from "../mocks/Perfil_Mocks/Posts_mocks";
/* import Meus_Posts from "../telas/Perfil_Telas/Meus_Posts/Meus_Posts"; */




const Stack = createNativeStackNavigator();

export default function Perfilrotas() {
    return (<Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='StackPerfil'>
            {() => <Perfil />}
        </Stack.Screen>

        <Stack.Screen name='Meus Eventos Criados'>
            {() => <Search {...Pesquisar_eventos_mocks} />}
        </Stack.Screen>
{/* 
        <Stack.Screen name='Meus Posts'>
            {() => <Meus_Posts {...Posts_mocks} />}
        </Stack.Screen> */}

        <Stack.Screen name='Email'>
            {() => <Email />}
        </Stack.Screen>

        <Stack.Screen name='Mudar Senha'>
            {() => <Mudar_senha />}
        </Stack.Screen>


    </Stack.Navigator>
    )
}