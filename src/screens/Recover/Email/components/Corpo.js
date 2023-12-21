import React from "react";
import { View } from "react-native";
import { perfil } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Input from '../../../../components/Input';
import Title from "../../../../components/Title";

export default function Corpo() {

    const { subtitle, legendaNova, inputEmail, legendaSenha, inputSenha, botao } = perfil.email.corpo
    return <>
        <View >
            <Title entrada={subtitle} tipo={"Titulo"} />
            <Input entrada={inputEmail} legenda={legendaNova} />
            <Input entrada={inputSenha} legenda={legendaSenha} senha={true} />
            <Button texto={botao} tipo={1} />
        </View>
    </>
}
