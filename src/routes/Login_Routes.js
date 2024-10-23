import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from '../screens/Welcome/Login/Login';
import Register from '../screens/Welcome/Register/Register';
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

export default function Login_Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions=
                {{ headerShown: false }}
            >
                <Stack.Screen name="Login">
                    {() => <Login />}
                </Stack.Screen>

                <Stack.Screen name="Registrar">
                    {() => <Register />}
                </Stack.Screen>

                <Stack.Screen name="Logado" component={Routes} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}