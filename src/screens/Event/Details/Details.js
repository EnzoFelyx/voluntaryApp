import React, { useState } from 'react';
import Background from '../../../components/Background';
import Screen from '../../../components/Screen';
import Top from '../../../components/Top';
import Body from './components/Body';
import Interactions from './components/Interactions';
import Overview from './components/Overview';


export default function Details({ route }) {

    const { item } = route.params;
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
        <Screen>
            <Top Foto={{ uri: imagem }} fotoEstilo={"fotoEvento"} tipo={"Welcome"} />
            <Background back={"backThree"}>
                <Overview nome={nome} local={local} data={data} hora={horaEvento} organizadoraFoto={organizadoraFoto} organizadora={criadorEvento} />
                <Interactions />
                <Body descricao={descricao} participantes={participantes} idEvento={idEvento} />
            </Background>
        </Screen>
    )
}