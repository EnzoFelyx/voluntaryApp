import React from "react";

import { NavigationContainer,View } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //importa
import { MaterialCommunityIcons } from '@expo/vector-icons';
//importando paginas da TabBar.
//Eventos
import Seus_eventos from "./telas/Evento_Telas/Seus_eventos/Seus_eventos";
//Home
import Home from "./telas/Usuario_Telas/Home/Home";
//Buscar 
import Pesquisar_eventos from "./telas/Evento_Telas/Pesquisar_eventos/Pesquisar_eventos";
//Perfil
import Perfil from "./telas/Perfil_Telas/Perfil/Perfil";

//importar mocks
import Seus_eventos_mocks from "./mocks/Evento_Mocks/Seus_eventos"
import Home_mocks from "./mocks/Home_mocks";
import Pesquisar_eventos_mocks from "./mocks/Evento_Mocks/Pesquisar_eventos"
import Perfil_mocks from "./mocks/Perfil_Mocks/Perfil_mocks";


const Tab = createBottomTabNavigator();

export default function Rotas ()
{

return <NavigationContainer>
    
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: '#ffff', //selecionado
        activeBackgroundColor:'#649469',
        inactiveTintColor:'#D3d3d3', // n selecionado
        inactiveBackgroundColor:'#649469',
        style:
        {
        height:70,
        borderBottomStartRadius:20
        },
        labelStyle: //estilo dos botões
        {   
            width:'100%',
            fontWeight:'bold',
            fontSize:16,
            lineHeight:21,
            paddingBottom:10,
            backgroundColor:'#649469'
        },
        keyboardHidesTabBar: 'true',
         //esconde a tab bar quando abre o teclado
    }}>


        <Tab.Screen name="Eventos"  
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="account-group" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }}>
            {(props) => <Seus_eventos {...Seus_eventos_mocks} />} 
        </Tab.Screen> 

        <Tab.Screen name = "Home"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="home-account" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }}>
            {(props) => <Home {...Home_mocks} />} 
        </Tab.Screen>

        <Tab.Screen name = "Buscar"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="magnify" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }}>
            {(props) => <Pesquisar_eventos {...Pesquisar_eventos_mocks}/>}
        </Tab.Screen>

        <Tab.Screen name = "Perfil"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="account-outline" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }}>
            {(props) => <Perfil {...Perfil_mocks}/>}
        </Tab.Screen>

    </Tab.Navigator>

</NavigationContainer>

}