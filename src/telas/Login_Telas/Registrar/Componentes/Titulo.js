import React from "react";
import Titulo from '../../../../componentes/Titulo';
import Default from '../../../../../assets/perfil/FotoDefault.png';
import { TouchableOpacity, View } from "react-native";
import Imagem from '../../../../componentes/Imagem';

export default function Topo({ title }) {
    return <>
        <Titulo entrada={title} />
        <TouchableOpacity>
            <Imagem imagem={Default} tipo={"RegistrarFoto"} />
        </TouchableOpacity>
    </>
}
