import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import Button from "../../../../components/Button";
import useTop from '../../../../hooks/useTop';
import { criarAmrEvento, deletAmrEvento, deleteEvento } from '../../../../services/requests/eventos';
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
        if (resultado == 'Sucesso') {
            Alert.alert(
                "Inscrição confirmada!",
                "Você se inscreveu no evento com sucesso."
            );
            navigation.goBack()
        }
        else {
            Alert.alert(
                "Erro ao se inscrever!",
                "Algo deu errado ao se inscrever nesse evento."
            );
        }
    };

    async function deletAmr() {
        Alert.alert(
            "Confirmação de Desinscrição",
            "Você realmente deseja se desinscrever do evento?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Ação cancelada"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: async () => {
                        const resultado = await deletAmrEvento(
                            dadosDoUsuario.id,
                            idEvento
                        );
                        if (resultado === 'Sucesso') {
                            Alert.alert(
                                "Desinscrito do evento!",
                                "Você não faz mais parte desse evento."
                            );
                            navigation.goBack();
                        } else {
                            Alert.alert(
                                "Erro ao se desinscrever!",
                                "Algo deu errado ao se desinscrever nesse evento."
                            );
                        }
                    }
                }
            ],
            { cancelable: true }
        );
    }

    async function apagarEvento() {
        Alert.alert(
            "Cancelar evento",
            "Você realmente deseja cancelar este evento?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Ação cancelada"),
                    style: "cancel"
                },
                {
                    text: "Apagar",
                    onPress: async () => {
                        const resultado = await deleteEvento(
                            dadosDoUsuario.id,
                            idEvento
                        );
                        if (resultado === 'Sucesso') {
                            Alert.alert(
                                "Evento excluido com sucesso!",
                                "O evento foi você criou foi cancelado."
                            );
                            console.log('apagou')
                            navigation.goBack();
                        } else {
                            Alert.alert(
                                "Erro ao excluir evento!",
                                "Algo deu errado ao apagar esse evento."
                            );
                        }
                    }
                }
            ],
            { cancelable: true }
        );
    }

    async function verf(id) {

        const resultado = await UserEvent(
            id,
            idEvento
        );

        if (resultado === 'mine') {
            return 'Deletar';
        }

        else if (resultado === 'encontrado') {
            return 'encontrado';
        }

        else if (resultado === 'new')
            return 'Sub'
    };

    useEffect(() => {
        async function fetchData() {
            if (dadosDoUsuario.id && verificaResultado === undefined) {
                const resultado = await verf(dadosDoUsuario.id);
                setVerificaResultado(resultado);
            }
        }
        fetchData();
    }, [dadosDoUsuario.id, verificaResultado]);


    if (verificaResultado === 'Deletar') {
        return <Button texto={'Cancelar meu evento'}
            tipo={9}
            acao={apagarEvento}
        />
    }

    else if (verificaResultado === 'Sub') {
        return <Button texto={'Inscrever-se'}
            tipo={2}
            acao={criarAmr} />
    }
    else if (verificaResultado === 'encontrado') {
        return <Button texto={'Desinscrever'}
            tipo={9}
            acao={deletAmr} />
    }
}
