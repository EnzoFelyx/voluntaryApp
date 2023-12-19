import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './componentes/Topo';
import Cabecario from './componentes/Cabecario';
import Corpo from './componentes/Corpo';
import Interativos from './componentes/Interativos';
import { useState } from 'react';


export default function Detalhes_eventos({ route }) {

    const { item } = route.params;
    console.log(item)
    const [imagem, setImagem] = useState(item.imagemEvento);
    const [nome, setNome] = useState(item.nomeEvento);
    const [local, setLocal] = useState(item.localEvento);
    const [data, setData] = useState(item.dataEvento);
    const [organizadoraFoto, setorganizadoraFoto] = useState(item.imagemCriadorEvento);
    const [descricao, setDescricao] = useState(item.descricao);
    const [participantes, setParticipantes] = useState(item.contPessoas);
    const [idEvento, setIdEvento] = useState(item.id)
    const [criadorEvento, setCriadorEvento] = useState(item.criadorEvento)
    const [horaEvento, setHoraEvento] = useState(item.horaEvento)

    return (
        <Background back={"fundo"}>
            <ScrollView>
                <Topo imagem={imagem} />
                <Background back={"quadrado3"}>
                    <Cabecario nome={nome} local={local} data={data} hora={horaEvento} organizadoraFoto={organizadoraFoto} organizadora={criadorEvento} />
                    <Interativos />
                    <Corpo descricao={descricao} participantes={participantes} idEvento={idEvento} />
                </Background>
            </ScrollView>
        </Background>
    )
}