import React from "react";
import Titulo from '../../../../componentes/Titulo';
import Default from '../../../../../assets/FotoDefault.png';
import Imagem from '../../../../componentes/Imagem';

export default function Topo({ title }) {
    return <>
        <Titulo entrada={title} />
        <Imagem imagem={Default} tipo={"RegistrarFoto"}/>
    </>
}
