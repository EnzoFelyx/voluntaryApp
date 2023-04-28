import React from "react";
import { View, StyleSheet } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Botao from '../../../../componentes/Botao';
import Texto from "../../../../componentes/texto";
import Imagem from "../../../../componentes/Imagem";
import pessoas from "../../../../../assets/buscar/pessoas.png";

export default function Eventos({ subtitulo, evento1, evento2, evento3 }) {
   return <>
        <View>
            <Titulo entrada={subtitulo.subtitle} />
            <Botao tipo={3} texto={
                <View style={{ flexDirection: "row" }}>
                    <Texto style={estilos.nome}>{evento2.nome}</Texto>
                </View>

            }
                acao={() => { }} />
            <View style={{ flexDirection: "row" }}>
                <Texto style={estilos.local}>{evento1.localEvento}</Texto>
                <View style={{
                    flexDirection: "row", marginLeft: "auto",
                    marginRight: 8,
                }}>
                    <Imagem imagem={pessoas} tipo={'icone'} />
                    <Texto style={estilos.contador}>{evento1.contPessoas}</Texto>
                </View>
            </View>
        </View>
    </> 
}

const estilos = StyleSheet.create({
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
    contador: {
    }, 
})