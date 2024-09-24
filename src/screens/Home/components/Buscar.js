import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { search } from "../../../../config/text.json";
import Screen from "../../../components/Screen";
import useSearch from "../../../hooks/useSearch";
import estilos from "./estilos";
import ListarBusca from "./ListarBusca";

export default function Buscar() {

    const { searchFor } = search.body
    const [nomeDoEvento, setNomeEvento] = useState('');
    const isFocused = useIsFocused();
    const lista = useSearch(nomeDoEvento);
    
    useEffect(() => {
        if (!isFocused) {
            setNomeEvento('');
        }
    }, [isFocused]);

    return (
        <Screen type={'static'}>
            <TextInput
                style={estilos.caixa}
                setNomeEvento={''}
                placeholder={searchFor}
                autoCapitalize="none"
                value={nomeDoEvento}
                onChangeText={setNomeEvento}
            />
            <View>
                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ marginBottom: 24 }}
                    scrollEnabled={false}
                    renderItem={({ item }) => <ListarBusca {...item} feedBack={item}
                    />
                    } />
            </View>
        </Screen>
    );
}
