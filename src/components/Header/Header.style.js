import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary ,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: '#ffffff',
    },
})