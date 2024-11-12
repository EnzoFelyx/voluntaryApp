import { useNavigation } from '@react-navigation/native';
import { EllipsisVertical, Plus } from 'lucide-react-native';
import { React } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Interaction from '../../../components/Interation';
import Owner from '../../../components/Owner';
import { useEventos } from '../../../hooks/useHome';
import { estilos } from './estilos';

export default function Explore() {

    const dadosEventos = useEventos();

    const navigation = useNavigation();

    const DescricaoFormated = (descricao) => {

        if (descricao.length < 100) {
            return <Text style={{ fontWeight: '400' }}>{' '}
                {descricao}
            </Text>
        }
        else {
            const corteInicial = descricao.slice(0, 100);
            const ultimoEspaco = corteInicial.lastIndexOf(" ");

            return <>
                <Text style={{ fontWeight: '400' }}>{' '}
                    {corteInicial.slice(0, ultimoEspaco)}
                    <Text style={{ fontWeight: '600' }}>{' '}
                        ...Ler mais
                    </Text>
                </Text>
            </>
        }
    };

    const renderItem = ({ item }) => (

        <View style={estilos.container}>
            <View style={estilos.owner}>
                <Owner
                    image={{ uri: item.imagemCriadorEvento }}
                    nome={item.criadorEvento}
                    type='Explorar'
                    pessoa={'person'}
                    acao={() => {
                        navigation.navigate('OtherProfile', {
                            perfil: item.imagemCriadorEvento,
                            nome: item.criadorEvento
                        });
                    }}
                />
                <View style={estilos.interaction}>
                    <TouchableOpacity>
                        <Plus size={23} color={'black'} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <EllipsisVertical size={23} color={'black'} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={estilos.legenda}>
                <Text style={{ fontWeight: '600' }}>{item.nomeEvento}:
                    {DescricaoFormated(item.descricao)}
                </Text>
            </TouchableOpacity>

            <Interaction
                tipo={'subsEvento'}
                imagem={{ uri: item.imagemEvento }}
                styleImg={'imagemEvento'}
                texto={''}
                acao={() => navigation.navigate('Detalhes', { item })}
            />
        </View>
    )

    return (
        <FlatList
            data={dadosEventos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
        />
    )
}