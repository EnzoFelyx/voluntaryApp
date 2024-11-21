import { useEffect, useState } from "react";
import { pegarDadosTodosUsuarios } from '../services/requests/home';
import useTopo from './useTop';
import { sugestoes } from "../services/requests/usuario";
import { useIsFocused } from "@react-navigation/native";

export function useSugestoes(other = false) {

    const MyUser = useTopo();

    const isFocused = useIsFocused();

    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

    useEffect(() => {
        async function buscarDadosUsuarios() {
            const resultadoUsers = await sugestoes(MyUser.id);
            if (resultadoUsers) {
                const filtrado = resultadoUsers.filter(item => item.id !== MyUser.id);
                if (!other) {
                    setDadosDoUsuario(filtrado);
                }
                else {
                    const newFilter = filtrado.filter(item => item.id !== other);
                    setDadosDoUsuario(newFilter)
                }
            }
        }
        buscarDadosUsuarios();
    }, [MyUser.id, isFocused]);

    return dadosDoUsuario
}

