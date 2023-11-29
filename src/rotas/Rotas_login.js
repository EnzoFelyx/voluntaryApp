import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Recuperar_mock from "../mocks/Login_Mocks/Recuperar_mock";
import Login from "../telas/Login_Telas/Login/Login";
import Recuperar from "../telas/Login_Telas/Recuperar/Recuperar";
import Registra from "../telas/Login_Telas/Registrar/Registra";
import Mudar_Senha from "../telas/Login_Telas/Validacao/Validacao";
import Rotas from "./Rotas";

const Stack = createNativeStackNavigator();

export default function RotasLogin() {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions=
                {{ headerShown: false }}
            >
                <Stack.Screen name="Login">
                    {() => <Login />}
                </Stack.Screen>

                <Stack.Screen name="Mudar Senha">
                    {() => <Mudar_Senha />}
                </Stack.Screen>

                <Stack.Screen name="Recuperar">
                    {() => <Recuperar {...Recuperar_mock} />}
                </Stack.Screen>

                <Stack.Screen name="Registrar">
                    {() => <Registra />}
                </Stack.Screen>

                <Stack.Screen name="Logado" component={Rotas} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}