import React from "react";
import { View } from "react-native";
import Title from "../../../../components/Title";
import Texto from "../../../../components/texto";
import Line from "../../../../components/Line";
import Owner from "../../../../components/Owner";
import { estilos } from "./estilos";

export default function Comentario() {
    return <>
        <Line />
        <View style={{ marginVertical: 16, left: -6 }}>
            <Owner
                image={{ uri: 'https://avatars.githubusercontent.com/u/118745996?s=400&u=7de50dc54a3c0e6957101d8dd9be3a98fdc4c773&v=4' }}
                nome={'Thiago Marangoni'}
                pessoa={'person'}
                /* type="Explorar" */
            />
            <View style={estilos.comentario}>
                <Texto>{'É inspirador ajudar as crianças da nossa comunidade que precisam de apoio e solidariedade!'}</Texto>
            </View>
        </View>

        <Line />
        <View style={{ marginVertical: 16, left: -6 }}>
            <Owner
                image={{ uri: 'https://github.com/user-attachments/assets/1c7e23d5-f00c-40d0-bdb8-e522a99b3b3c' }}
                nome={'Matheus Ferreira'}
                pessoa={'person'}
                /* type="Explorar" */
            />
            <View style={estilos.comentario}>
                <Texto>{'Apoiar as crianças em situação de necessidade é um gesto que faz toda a diferença.'}</Texto>
            </View>
        </View>

        <Line />
        <View style={{ marginVertical: 16, left: -6 }}>
            <Owner
                image={{ uri: 'https://github.com/user-attachments/assets/ccf927a7-3b9a-49da-b4ce-83bfeca0a723' }}
                nome={'Camela Pires'}
                pessoa={'person'}
                /* type="Explorar" */
            />
            <View style={estilos.comentario}>
                <Texto>{'Achei muito interessante essa proposta de ser solidário com as crianças da nossa região que estão em necessidade!'}</Texto>
            </View>
        </View>

        <Line />
        <View style={{ marginVertical: 16, left: -6 }}>
            <Owner
                image={{ uri: 'https://github.com/user-attachments/assets/79d6c6c2-57de-49a5-843e-a67c35306055' }}
                nome={'André Barretos'}
                pessoa={'person'}
                /* type="Explorar" */
            />
            <View style={estilos.comentario}>
                <Texto>{'Ser solidário com as crianças da nossa região é um ato de amor e cuidado!!!'}</Texto>
            </View>
        </View>

        
    </>
}

