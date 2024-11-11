import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Explore from "../screens/Explore/Explore";

const Stack = createNativeStackNavigator();

export default function Home_Routes() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackExplore'>
            {() => <Explore />}
        </Stack.Screen>

    </Stack.Navigator>
    )
}