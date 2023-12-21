import { useEffect, useState } from "react";
import { pegarDadosTodasOngs, pegarDadosTodosUsuarios, pegarTodosEventos } from '../services/requests/home';

export function useEventos() {

    const [dadosEventos, setDadosEventos] = useState({});

    useEffect(() => {
        async function buscarDadosEventos() {

            const resultado = await pegarTodosEventos();
            if (resultado) {
                setDadosEventos(resultado);
            }
        }
        buscarDadosEventos();

    }, []);
    return dadosEventos
}

export function useUsuarios() {

    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

    useEffect(() => {
        async function buscarDadosUsuarios() {

            const resultadoUsers = await pegarDadosTodosUsuarios();
            if (resultadoUsers) {
                setDadosDoUsuario(resultadoUsers);
            }
        }
        buscarDadosUsuarios();
    }, []);

    return dadosDoUsuario
}

export function UseOngs() {

    const [dadosOng, setDadosOng] = useState({});

    useEffect(() => {
        async function buscarDadosOngs() {
            const resultadoOngs = await pegarDadosTodasOngs();
            if (resultadoOngs) {
                setDadosOng(resultadoOngs);
            }
        }
        buscarDadosOngs();
    }, []);

    return dadosOng
}