import { BadgeCheck, Images, Info, Map } from 'lucide-react-native';
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { estilos } from "./estilos";

export default function Interactions() {

    const Interact = ({ Icon }) =>
        <TouchableOpacity>
            <Icon color="green" size={30} />
        </TouchableOpacity>


    return <View style={estilos.icones}>
        <Interact Icon={BadgeCheck} />
        <Interact Icon={Map} />
        <Interact Icon={Images} />
        <Interact Icon={Info} />
    </View>
}