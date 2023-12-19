import React from "react";
import { View } from "react-native";
import Image from '../../../../components/Image';
import Return from "../../../../components/Return";

export default function Topo({ imagem }) {
    return <>
        <View>
            <Image imagem={{ uri: imagem }} tipo={"fotoEvento"} />
            <Return />
        </View>
    </>
}