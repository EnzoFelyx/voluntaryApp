import React from "react";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Linha from "../../../../componentes/Linha";
import Titulo from '../../../../componentes/Titulo';
export default function Pedido({ titulo, dados, BotaoRecupera }) {

    return <>
        <Titulo entrada={titulo.title} tipo={"Titulo"} />

        <Input legenda={dados.nome} entrada={dados.nomeInsert} />

        <Linha texto={dados.ou} />

        <Input legenda={dados.email} entrada={dados.emailInsert} />

        <Botao texto={BotaoRecupera.botao} tipo={1} />

    </>
}
