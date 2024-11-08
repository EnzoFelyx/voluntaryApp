import { BadgeCheck, Images, Info, Map } from 'lucide-react-native';
import React, { useState } from "react";
import { Alert, Dimensions, FlatList, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal } from '../../../../components/Modal';
import Image from '../../../../components/Image';

import { estilos } from "./estilos";


const MODAL = {
    NONE: 0,
    SHOW_IMAGES: 1,
    FOCO_IMAGE: 2,
}


export default function Interactions({ coord, fotosE, isPublic }) {

    const [showModal, setShowModal] = useState(MODAL.NONE)
    const [foco, setFoco] = useState()

    const Interact = ({ Icon, acao }) =>
        <TouchableOpacity onPress={acao}>
            <Icon color="green" size={30} />
        </TouchableOpacity>

    const ampliar = (index) => {
        setFoco(index)
        setShowModal(MODAL.FOCO_IMAGE)
    };

    return <>
        <View style={estilos.icones}>
            <Interact Icon={BadgeCheck} />
            <Interact Icon={Map} />
            <Interact Icon={Images} acao={() => setShowModal(MODAL.SHOW_IMAGES)} />
            <Interact Icon={Info} acao={() => Alert.alert(isPublic ? 'O evento é um local público' : 'O evento é em um local privado')} />
        </View>

        <Modal
            title="Fotos do evento"
            subtitle="Imagens escolhidas pelo organizador"
            visible={showModal === MODAL.SHOW_IMAGES}
            onClose={() => setShowModal(MODAL.NONE)}
        >
            <View style={{ marginVertical: 12 }}>

                <View>
                    <FlatList
                        data={fotosE}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => ampliar(item)}
                                style={{
                                    overflow: "hidden",
                                    borderRadius: 15,
                                    borderWidth: 3,
                                    borderColor: "#E4F4CD",
                                }}>
                                <Image imagem={{ uri: item }} tipo={'fotosDetales'} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        contentContainerStyle={{ gap: 16, flex: 1, marginLeft: 8, }}
                    />

                </View>


                <TouchableOpacity
                    /*    style={styles.infoCaixa} */
                    onPress={() => {

                        setShowModal(MODAL.NONE)
                    }}
                >

                </TouchableOpacity>
            </View>

        </Modal>

        <Modal
            title=""
            subtitle=""
            visible={showModal === MODAL.FOCO_IMAGE}
            onClose={() => setShowModal(MODAL.SHOW_IMAGES)}
        >

            <ImageBackground
                source={{ uri: foco }}
                style={styles.imagemFundo}
                resizeMode="contain"
            >
            </ImageBackground>

        </Modal >
    </>
}

const styles = StyleSheet.create({
    imagemFundo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
});
