import { StyleSheet, TextInput, View } from "react-native"

function Inputs({ children }) {
    return <View style={estilos.box}
    >{children}</View>
}

function Field({ ...rest }) {
    return <TextInput style={estilos.texto}
        placeholderTextColor={"gray"}
        cursorColor={"white"}
        {...rest}
    />
}

Inputs.Field = Field

const estilos = StyleSheet.create({

    box: {
        flex: 1,
        minHeight: 64,
        maxHeight: 64,
        borderRadius: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 16,

    },
    texto: {
        flex: 1,
        fontSize: 18, //
        fontWeight: '400',
    }
})

export { Inputs }

