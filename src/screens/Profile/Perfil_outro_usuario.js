import React, { useEffect, useState } from 'react';
import { ScrollView,View,Text,StyleSheet } from 'react-native';
import Background from '../../../componentes/Background';
import Interativos from './Componentes/Interativos';
import VisaoGeral from './Componentes/VisaoGeral';
import Meu_elo from './Componentes/Meu_elo';
import Voltar from '../../../componentes/Voltar';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/* import { pegarDadosUsuario } from '../../../servicos/requisicoes/usuario';
import { pegarEventosInscritos } from '../../../servicos/requisicoes/eventos';
import { pegarEventos } from '../../../servicos/requisicoes/eventos';
 */

export default function Perfil_outro_usuario({ route }) {/* 
    const { item } = route.params;
    let  [perfil, setFoto] = useState(item.imagemOng ?? item.perfil);
    let [nome, setNome] = useState(item.nomeOng ?? item.nome);
    let [id, setId] = useState(item.id);
    let [instagram, setInstagram] = useState(item.instagram);
    const navigation = useRoute();
    const [dadosEventos, setDadosEventos] = useState({});
    const [dadosAmarra, setDadosAmarra] = useState({});
    const [dadosDoUsuario, setDadosDoUsuario] = useState({});

  useEffect(() => {
    async function fetchData() {

      const resultadoIns = await pegarEventosInscritos(id);
      if (resultadoIns) {
        setDadosAmarra(resultadoIns);

        const eventosPromises = resultadoIns.map(async (inscricao) => {
          const resultado = await pegarEventos(inscricao.eventoId);
          return resultado;
        });

        const eventos = await Promise.all(eventosPromises);

        setDadosEventos(eventos);
      }
    }

    fetchData();
  }, []);
 
    return (
            
        <>
            <Background back={"fundo"}>
                <Background back={"quadrado2"}>
                <Voltar />
                    <VisaoGeral perfil={perfil} nome={nome}/>
                    <View style={estilos.perfilOption}>
                        <MaterialCommunityIcons name={"calendar-check"} size={30} color="black" style={{ marginLeft: 8, marginTop: 3}} />
                        <Text style={estilos.texto}>Eventos Inscritos : {dadosEventos.length}</Text>
                    </View>
                    <View style={estilos.perfilOption}>
                        <MaterialCommunityIcons name={"instagram"} size={30} color="black" style={{ marginLeft: 8, marginTop: 3}} />
                        <Text style={estilos.texto}>{instagram}</Text>
                    </View>   
                </Background>
            </Background>
        </>
    ) */
}




const estilos = StyleSheet.create({
    perfilOption: {

        marginTop:15,
        alignSelf: 'center',
        width: 342,
        height: 60,
        backgroundColor: "#E5ECB9",
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 8,
        marginBottom: 12,
        alignItems:'center'
    },

    texto: {
        textAlignVertical: 'center',
        marginLeft: 32,
        fontSize: 20,
        fontWeight: "bold",
    },
})