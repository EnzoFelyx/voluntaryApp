/* import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Details from '../screens/Event/Details/Details'
import Search from '../screens/Search/Search'

const Stack = createNativeStackNavigator();

export default function Search_Routes() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackBuscar'>
            {() => <Search />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes" component={Details} />
    </Stack.Navigator>
    )
}
 */