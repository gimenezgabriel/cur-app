import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary ,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 'auto',
    },
    headerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: '#ffffff',
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 5,

    },
    bakButtonText: {
        fontFamily: 'OpenSansBold',
        color: '#ffffff',
    }
})