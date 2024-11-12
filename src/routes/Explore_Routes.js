import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Explore from "../screens/Explore/Explore";
import Perfil from '../screens/Perfil/MyProfile';
import Details from '../screens/Event/Details/Details'

const Stack = createNativeStackNavigator();

export default function Explore_Routes() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackExplore'>
            {() => <Explore />}
        </Stack.Screen>

        <Stack.Screen name="Detalhes" component={Details} />

        <Stack.Screen name="OtherProfile" component={Perfil} />


    </Stack.Navigator>
    )
}