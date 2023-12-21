import { useEffect, useState } from "react";
import { buscarEvento } from "../services/requests/eventos";

export default function useSearch(termoDeBusca) {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            if (termoDeBusca.trim() === "") {
                setLista([]);
            } else {
                const retorno = await buscarEvento(termoDeBusca);
                setLista(retorno);
            }
        } catch (error) {
            console.error("Erro ao buscar ao buscar evento:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [termoDeBusca]);

    return lista;
}
