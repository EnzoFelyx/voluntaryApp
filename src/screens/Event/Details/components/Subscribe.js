import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import useTop from '../../../../hooks/useTop';
import { criarAmrEvento } from '../../../../services/requests/eventos';
import { UserEvent } from "../../../../services/requests/usuario";

export default function Subscribe({ idEvento }) {

    const dadosDoUsuario = useTop();
    const navigation = useNavigation()
    const [verificaResultado, setVerificaResultado] = useState();

        async function criarAmr() {
    
            const resultado = await criarAmrEvento(
                dadosDoUsuario.id,
                idEvento
            );
            navigation.goBack()
        };

    async function verf() {

        const resultado = await UserEvent(
            dadosDoUsuario.id,
            idEvento
        );
        if (resultado === 'encontrado') {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        async function fetchData() {
            const resultado = await verf();
            setVerificaResultado(resultado);
        }
        fetchData();
    },);

    /* console.log(verificaResultado) */

    if (verificaResultado == false) {
        return <Button texto={'Inscrever-se'}
            tipo={2}
        acao={criarAmr} />
    }
    else {
        return <Button texto={'Desinscrever'}
            tipo={9}
    /* acao={criarAmr} */ />
    }
}
