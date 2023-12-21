import { useNavigation } from "@react-navigation/native";
import React from "react";
import { profile } from "../../../../config/text.json";
import Option from "../../../components/Option";

export default function Interactions() {

    const navigation = useNavigation();
    const { made, subscribed, posts, config } = profile.buttons

    return (
        <>
            <Option
                texto={made}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <Option
                texto={subscribed}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
            <Option
                texto={posts}
                acao={() => { navigation.navigate('Meus Posts') }}
            />

            <Option
                texto={config}
                acao={() => {/*  navigation.navigate('Meus Eventos Criados') */ }}
            />
        </>
    );
}
