import React from "react";
import { TouchableOpacity } from "react-native";
import Default from '../../../../../assets/perfil/FotoDefault.png';
import Imagem from '../../../../componentes/Imagem';
import Titulo from '../../../../componentes/Titulo';

export default function Topo({ title }) {
    return <>
        <Titulo entrada={title} tipo={"Titulo"}/>
        <TouchableOpacity>
            <Imagem imagem={Default} tipo={"RegistrarFoto"} />
        </TouchableOpacity>
    </>
}
