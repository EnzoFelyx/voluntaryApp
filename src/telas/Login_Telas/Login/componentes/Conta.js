import React from "react";
import Input from '../../../../componentes/Input';
import Titulo from '../../../../componentes/Titulo';

export default function Conta({ title, nome, senha }) {
    return <>
        <Titulo entrada={title} />
        <Input entrada={nome} />
        <Input entrada={senha} senha={true} />
    </>
}
