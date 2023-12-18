import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detalhes_eventos from "../telas/Evento_Telas/Detalhes_eventos/Detalhes_eventos";
import Pesquisar_eventos from "../telas/Evento_Telas/Pesquisar_eventos/Pesquisar_eventos";

const Stack = createNativeStackNavigator();

export default function BuscarRotas() {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='StackBuscar'>
            {() => <Pesquisar_eventos />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes" component={Detalhes_eventos} />
    </Stack.Navigator>
    )
}
