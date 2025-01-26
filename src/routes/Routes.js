import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Explore_Routes from "./Explore_Routes";
import Home_Routes from "./Home_Routes";
import Profile_Routes from "./Profile_Routes";
import Subscribed_Routes from "./Subscribed_Routes";


const Tab = createBottomTabNavigator();

export default function Routes() {

    return <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#9fe801',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                height: 50,
                paddingBottom: 5,
            },
            keyboardHidesTabBar: 'true',
        }}
        initialRouteName='Home'
    >
        <Tab.Screen name="Eventos"
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons
                            name="account-group"
                            color={color}
                            size={30}
                        />
                    }
                    return <MaterialCommunityIcons
                        name="account-group-outline"
                        color={color}
                        size={25}
                    />
                }
            }} component={Subscribed_Routes} />

        <Tab.Screen name="Home"
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={30}
                        />
                    }
                    return <MaterialCommunityIcons
                        name="home-outline"
                        color={color}
                        size={25}
                    />
                }
            }} component={Home_Routes} />

        <Tab.Screen name="Explorar"
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons
                            name="compass"
                            color={color}
                            size={30}
                        />
                    }
                    return <MaterialCommunityIcons
                        name="compass-outline"
                        color={color}
                        size={25}
                    />
                }
            }}
            component={Explore_Routes} />

        <Tab.Screen name="Perfil"
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={30}
                        />
                    }
                    return <MaterialCommunityIcons
                        name="account-outline"
                        color={color}
                        size={25}
                    />
                }
            }} component={Profile_Routes} />

    </Tab.Navigator>
}