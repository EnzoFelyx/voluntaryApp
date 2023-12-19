import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { pegarDadosUsuario } from '../servicos/requisicoes/usuario';

export default function useTopo() {

    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

    useEffect(() => {
        async function pegarUser() {
            const id = await AsyncStorage.getItem('id');
            if (!id) {
                return null;
            }
            const resultadouser = await pegarDadosUsuario(id);
            if (resultadouser) {
                setDadosDoUsuario(resultadouser);

            }
        }
        pegarUser();
    }, []);

    return dadosDoUsuario

}