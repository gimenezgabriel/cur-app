import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary ,
        height: 60,
        width: '100%',
        justifyContent: 'center',

        alignItems: 'center',
        flexDirection: 'row',
    },
    headerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',

    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: '#ffffff',
    },
})