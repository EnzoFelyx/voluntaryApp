import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import loginImagem from '../../../../assets/loginTelas/login.png';
import Background from '../../../components/Background';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import { Modal } from '../../../components/Modal';
import Screen from '../../../components/Screen';
import Account from './components/Account';
import Interactions from './components/Interactions';

const MODAL = {
    NONE: 0,
    BEM_VINDO: 1,
};

export default function Login() {

    const [showModal, setShowModal] = useState(MODAL.NONE);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(MODAL.BEM_VINDO);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Screen>
                <Image imagem={loginImagem} tipo={"loginImagem"} />
                <Background back={"backOne"}>
                    <Account />
                    <Interactions />
                </Background>
            </Screen>

            <Modal
                title="Bem vindo ao Voluntary!"
                subtitle="Estamos felizes de ter você aqui!"
                visible={showModal === MODAL.BEM_VINDO}
                onClose={() => setShowModal(MODAL.NONE)}
            >
                <View style={{ marginVertical: 12, marginTop: 30 }}>
                    <View style={{ paddingRight: 8, marginHorizontal: 12, marginBottom: 12 }}>
                        <Text style={{ color: 'white', marginBottom: 16 }}>
                            Este aplicativo é um projeto de estudo feito para mostrar como
                            seria uma rede social focada em ações voluntárias e solidárias.
                        </Text>

                        <Text style={{ color: 'white' }}>
                            Entre como convidado ou crie uma nova conta para navegar pelo aplicativo. Divirta-se!
                        </Text>
                    </View>

                    <Button texto={'Vamos lá!'} tipo={1} acao={() => setShowModal(MODAL.NONE)} />
                </View>
            </Modal>
        </>
    );
}
