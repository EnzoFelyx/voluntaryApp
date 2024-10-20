import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Perfil from '../screens/Perfil/MyProfile';

const Stack = createNativeStackNavigator();

export default function Perfilrotas() {
    return (<Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="MyPerfil" component={Perfil} />

        <Stack.Screen name="OtherProfile" component={Perfil} />
    </Stack.Navigator>
    )
}