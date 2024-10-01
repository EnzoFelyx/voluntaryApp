import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { newEvent } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Texto from "../../../../components/texto";

import { Calendar } from "../../../../components/Calendar";

import dayjs from "dayjs";
import { Modal } from "../../../../components/Modal";
import { calendarUtils } from "../../../../utils/calendarUtils";
import { estilos } from "./estilos";
import SecondStep from "./SecondStep";

const MODAL = {
    NONE: 0,
    CALENDAR: 1,
    TIME: 2,
}

export default function FirstStep() {

    const { name, nameLeg, date, dateLeg, start } = newEvent.page1

    const [showModal, setShowModal] = useState(MODAL.NONE)
    const [showContinue, setShowContinue] = useState(false)
    const [selectedDates, setSelectedDates] = useState({})


    const [Ename, setName] = useState();
    const [Edate, setDate] = useState();
    const [Estart, setStart] = useState();


    function handleSelectDate(selectedDay) {
        const dates = calendarUtils.orderStartsAtAndEndsAt({
            startsAt: selectedDates.startsAt,
            selectedDay,
        })
        setSelectedDates(dates)
    }

    return (
        <>
            <View style={estilos.input}>
                <Texto>{name}</Texto>
                <Input
                    entrada={nameLeg}
                    tipo={'1'}
                    valor={Ename}
                    onChangeText={setName}
                    editable={!showContinue}
                />

            </View>

            <View style={estilos.smallInput}>

                <View style={estilos.container}
                    onPressIn={() => setShowModal(MODAL.CALENDAR)}
                >

                    <Texto>{date}</Texto>
                    <Input
                        onPressIn={() => setShowModal(MODAL.CALENDAR)}
                        focado={() => Keyboard.dismiss()}
                        entrada={dateLeg}
                        tipo={2}
                        editable={!showContinue}
                        valor={Edate ? `${Edate.day}/${Edate.month}/${Edate.year}` : ""}
                        onChangeText={setDate} />
                </View>

                <View style={estilos.container}>
                    <Texto>{start}</Texto>
                    <Input
                        onPressIn={() => setShowModal(MODAL.TIME)}
                        entrada={"HH"}
                        tipo={2}
                        valor={Estart}
                        onChangeText={setStart}
                        keyType="numeric"
                        editable={!showContinue}
                        leght={2}
                    />
                </View>

            </View >

            {showContinue === false ? (
                <Button
                    acao={() => {
                        if (Ename && Edate && Estart) {
                            setShowContinue(true);
                        }
                    }}
                    texto={"Continuar"}
                    tipo={1}
                />
            ) : (<>
                <View style={{ marginTop: 12, marginBottom: 24 }}>
                    <Button
                        acao={() => {
                            if (Ename && Edate && Estart) {
                                setShowContinue(false);
                            }
                        }}
                        texto={"Alterar dados evento"}
                        tipo={2}
                    />
                </View>
                <SecondStep />
            </>
            )
            }


            <Modal
                title="Seleciona data"
                subtitle="Selecione a data do evento"
                visible={showModal === MODAL.CALENDAR}
                onClose={() => setShowModal(MODAL.NONE)}
            >
                <View style={estilos.modal}>
                    <Calendar
                        minDate={dayjs().toISOString()}
                        onDayPress={handleSelectDate}
                        markedDates={selectedDates.dates}
                    />
                    <View style={estilos.botao}>
                        <Button
                            acao={() => {
                                setDate(selectedDates.startsAt);
                                setShowModal(MODAL.NONE);
                            }}
                            texto={"Confirmar"}
                            tipo={1}
                        />
                    </View>
                </View>
            </Modal>

        </>
    );
}
