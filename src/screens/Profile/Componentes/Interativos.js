import { useNavigation } from "@react-navigation/native";
import React from "react";
import { perfil } from "../../../../../config/text.json";
import PerfilOption from "../../../../componentes/PerfilOption";

export default function Interativos() {

    const navigation = useNavigation();
    const { criados, posts, email, senha, config } = perfil.conta.botoes

    return (
        <>
            <PerfilOption
                texto={criados}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <PerfilOption
                texto={posts}
                acao={() => { navigation.navigate('Meus Posts') }}
            />
            <PerfilOption texto={email}
                acao={() => { navigation.navigate('Email') }}
            />
            <PerfilOption texto={senha}
                acao={() => { navigation.navigate('Mudar Senha') }}
            />
            <PerfilOption texto={config} />
        </>
    );
}
