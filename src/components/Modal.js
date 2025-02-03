import { BlurView } from "expo-blur"
import { X } from "lucide-react-native"
import {
    Modal as RNModal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"


export function Modal({
    title,
    subtitle = "",
    onClose,
    children,
    ...rest
}) {
    return (
        <RNModal transparent animationType="fade" {...rest}>
            <BlurView
                style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "white"}}
                intensity={8}
                tint="light"
                experimentalBlurMethod="dimezisBlurView"
            >
                <View style={estilos.box}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 5, }}>
                        <Text style={estilos.titulo}>{title}</Text>

                        {onClose && (
                            <TouchableOpacity activeOpacity={0.7} onPress={onClose} style={{ marginRight: 8 }}>
                                <X color="#495057" size={20} />
                            </TouchableOpacity>
                        )}
                    </View>

                    {subtitle.trim().length > 0 && (
                        <Text style={{ color: "#3D3D3D", marginTop: 16, marginLeft: 8, }}>
                            {subtitle}
                        </Text>
                    )
                    }

                    {children}
                </View >
            </BlurView >
        </RNModal >
    )
}


const estilos = StyleSheet.create({

    container: {
    },
    box: {
        backgroundColor: "white",
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        borderTopWidth: 1,
        borderColor: "white",
        paddingHorizontal: 12,
        paddingTop: 30,
        paddingBottom: 50
    },
    texto: {
        color: "black",
        fontWeight: "500",
        fontSize: 20,
    },
    titulo: {
        color: "#495057",
        fontWeight: "500",
        fontSize: 26,
        marginLeft: 8
    }
})

