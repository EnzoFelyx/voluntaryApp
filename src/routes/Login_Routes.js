import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from '../screens/Welcome/Login/Login';
import Path from '../screens/Recover/Path/Path'
import Register from '../screens/Welcome/Register/Register';
import Password from '../screens/Recover/Password/Password';
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

{/*                 <Stack.Screen name="Password">
                    {() => <Password />}
                </Stack.Screen>

                <Stack.Screen name="Path">
                    {() => <Path />}
                </Stack.Screen> */}

                <Stack.Screen name="Register">
                    {() => <Register />}
                </Stack.Screen>

                <Stack.Screen name="Logado" component={Routes} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}