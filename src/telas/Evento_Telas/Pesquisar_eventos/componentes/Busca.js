import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import Caixa from '../../../../componentes/Caixa';
import Icone from "../../../../componentes/Icone";
import Titulo from '../../../../componentes/Titulo';
import Botao from '../../../../componentes/Botao';
import Texto from "../../../../componentes/texto";
import Imagem from "../../../../componentes/Imagem";
import pessoas from "../../../../../assets/buscar/pessoas.png";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useEffect, Alert } from "react-native";
import { buscarEvento } from "../../../../servicos/requisicoes/eventos";
import useBusca from "../../../../hooks/useBusca";

export default function Busca({ search, subtitulo }) {

    const navigation = useNavigation();

    const [nomeDoEvento, setNomeEvento] = useState('');
    const lista = useBusca(nomeDoEvento);

    console.log(lista)


    return (
        <SafeAreaView>
            <View style={Caixa.caixa}>
                <TextInput
                    style={estilos.caixaInput}
                    setNomeEvento={''}
                    placeholder="Busque por Evento"
                    autoCapitalize="none"
                    value={nomeDoEvento}
                    onChangeText={setNomeEvento}
                />
                {/* <Icone icone={"magnify"} tamanho={24} tipo={"pesquisa"} acao={busca} /> */}
            </View>

            <View>
                <View>
                    {lista.length > 0 && (
                        <>
                            <Titulo entrada={subtitulo.subtitle} tipo={"Titulo"} />
                            <FlatList
                                data={lista}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View>
                                        <Botao
                                            tipo={3}
                                            texto={
                                                <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                                                    <Texto style={estilos.nome}>{item.nomeEvento}</Texto>
                                                </View>
                                            }
                                            acao={() => navigation.navigate('Detalhes', { item })}
                                        />
                                        <View style={{ flexDirection: "row" }}>
                                            <Texto style={estilos.local}>{item.localEvento}</Texto>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    marginLeft: "auto",
                                                    marginRight: 20,
                                                }}
                                            >
                                                <Imagem imagem={pessoas} tipo={"icone"} />
                                                <Texto style={estilos.contador}>{item.contPessoas}</Texto>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    caixa: {
        fontSize: 18,
        flexDirection: "row",
    },
    nome: {
        fontWeight: "bold",
        fontSize: 16,
    },
    data: {
        marginLeft: "auto",
        marginRight: 8,
        fontSize: 14,
        textAlign: 'right',
    },
    local: {
        textAlign: 'right',
        marginHorizontal: 8,
    },
    contador: {},
});
