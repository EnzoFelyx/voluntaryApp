import { useEffect, useState } from "react";
import { pegarDadosTodasOngs, pegarDadosTodosUsuarios, pegarDadosUsuario, pegarTodosEventos } from '../services/requests/home';
import { useIsFocused } from "@react-navigation/native";
import useTopo from './useTop';

export function useEventos() {

    const [dadosEventos, setDadosEventos] = useState({});

    const isFocus = useIsFocused();

    useEffect(() => {
        async function buscarDadosEventos() {

            const resultado = await pegarTodosEventos();
            if (resultado) {
                setDadosEventos(resultado);
            }
        }
        buscarDadosEventos();

    }, [isFocus]);
    return dadosEventos
}

export function useUsuarios() {

    const MyUser = useTopo();

    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

    useEffect(() => {
        async function buscarDadosUsuarios() {
            const resultadoUsers = await pegarDadosTodosUsuarios();
            if (resultadoUsers) {
                const filtrado = resultadoUsers.filter(item => item.id !== MyUser.id);
                const embaralhado = filtrado.sort(() => Math.random() - 0.5);
                const resultado = embaralhado.slice(0, 5);
                setDadosDoUsuario(resultado);
            }
        }
        buscarDadosUsuarios();
    }, [MyUser.id]);

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

export function UseProfile({ nome }) {

    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

    useEffect(() => {
        async function buscarUserProfile() {
            const resultadoProfile = await pegarDadosUsuario({ nome });
            if (resultadoProfile) {
                setDadosDoUsuario(resultadoProfile);
            }
        }
        buscarUserProfile();
    }, []);

    return dadosDoUsuario
}