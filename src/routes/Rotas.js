import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Search_Routes from "./Search_Routes";
import Home_Routes from "./Home_Routes";
import Perfilrotas from "./Rotas_perfil";
import Subscribed_Routes from "./Subscribed_Routes";

const Tab = createBottomTabNavigator();

export default function Rotas() {

    return <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#ffff',
            tabBarActiveBackgroundColor: '#649469', //selecionado
            tabBarInactiveBackgroundColor: '#649469',
            tabBarInactiveTintColor: '#D3d3d3', // n selecionado
            TabBa: '#649469',
            style:
            {
                height: 70,
                borderRadius: 15,
            },
            labelStyle: //estilo dos botões
            {
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21,
                paddingBottom: 10,
                backgroundColor: '#649469'
            },
            keyboardHidesTabBar: 'true',
            //esconde a tab bar quando abre o teclado
        }}>

        <Tab.Screen name="Eventos"
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons
                        name="account-group"
                        color={'black'}
                        size={focused ? 35 : 30}
                        style={{ flex: 1, marginTop: 5 }} />
                )
            }} component={Subscribed_Routes} />

        <Tab.Screen name="Home"
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons
                        name="home-account"
                        color={'black'}
                        size={focused ? 35 : 30}
                        style={{ flex: 1, marginTop: 5 }} />
                )
            }} component={Home_Routes} />

        <Tab.Screen name="Buscar"
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons
                        name="magnify"
                        color={'black'}
                        size={focused ? 35 : 30}
                        style={{ flex: 1, marginTop: 5 }} />
                )
            }}
            component={Search_Routes} />

        <Tab.Screen name="Perfil"
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons
                        name="account-outline"
                        color={'black'}
                        size={focused ? 35 : 30}
                        style={{ flex: 1, marginTop: 5 }} />
                )
            }} component={Perfilrotas} />

    </Tab.Navigator>
}