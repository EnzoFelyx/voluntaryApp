import React from "react";
import { recuperar } from '../../../../../config/text.json';
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Linha from "../../../../componentes/Linha";
import Titulo from '../../../../componentes/Titulo';
export default function Pedido() {

    const { title, nome, nomeInsert, email, emailInsert, ou, botao } = recuperar;

    return <>
        <Titulo entrada={title} tipo={"Titulo"} />

        <Input legenda={nome} entrada={nomeInsert} />

        <Linha texto={ou} />

        <Input legenda={email} entrada={emailInsert} />

        <Botao texto={botao} tipo={1} />

    </>
}
