import { useNavigation } from "@react-navigation/native";
import React from "react";
import { perfil } from "../../../../config/text.json";
import Option from "../../../components/Option";

export default function Interactions() {

    const navigation = useNavigation();
    const { criados, posts, email, senha, config } = perfil.conta.botoes

    return (
        <>
            <Option
                texto={criados}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <Option
                texto={posts}
                acao={() => { navigation.navigate('Meus Posts') }}
            />
            <Option
                texto={email}
                acao={() => { navigation.navigate('Email') }}
            />
            <Option
                texto={senha}
                acao={() => { navigation.navigate('Mudar Senha') }}
            />
            <Option
                texto={config} />
        </>
    );
}
