import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../telas/Login_Telas/Login/Login";
import Login_mock from "../mocks/Login_Mocks/Login_mock";

import Mudar_Senha from "../telas/Login_Telas/Validacao/Validacao";
import Mudar_mock from "../mocks/Login_Mocks/Mudar_mock";

import Recuperar from "../telas/Login_Telas/Recuperar/Recuperar";
import Recuperar_mock from "../mocks/Login_Mocks/Recuperar_mock";

import Registra from "../telas/Login_Telas/Registrar/Registra";
import Registrar_mocks from "../mocks/Login_Mocks/Registrar_mocks";

import Rotas from "./Rotas";

const Stack = createNativeStackNavigator();

export default function RotasLogin()
{
    return(
    <NavigationContainer >
    <Stack.Navigator 
    screenOptions=
    {{headerShown:false}}
    >
        <Stack.Screen name = "Login">
            {()=> <Login {...Login_mock}/>}
        </Stack.Screen>

        <Stack.Screen name ="Mudar Senha">
            {()=> <Mudar_Senha {...Mudar_mock}/>}
        </Stack.Screen>

        <Stack.Screen name ="Recuperar">
            {()=> <Recuperar {...Recuperar_mock}/>}
        </Stack.Screen>

        <Stack.Screen name ="Registrar">
            {()=> <Registra {...Registrar_mocks}/>}
        </Stack.Screen>

        <Stack.Screen name ="Logado" component={Rotas}/>
            
    </Stack.Navigator>
    </NavigationContainer>
)
    
}