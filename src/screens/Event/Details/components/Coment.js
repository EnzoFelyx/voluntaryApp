import React from "react";
import { SafeAreaView, View } from "react-native";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Title from "../../../../components/Title";
import Texto from "../../../../components/texto";

export default function Corpo({ subtitle, legenda, input, botao }) {
    return <SafeAreaView>
        <View style={{ marginLeft: 12 }}>
            <Title entrada={subtitle} tipo={"subtitle"} />
            <Texto>{legenda}</Texto>
        </View>
        <Input entrada={input} tipo={3} />
        <Button texto={botao} tipo={6} />
    </SafeAreaView>
}

