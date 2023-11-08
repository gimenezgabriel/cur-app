import { StyleSheet } from "react-native";
import {colors} from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    cameraButtom: {
        backgroundColor: colors.tertiary,
        height: 50,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    textProfile: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        fontSize: 18,
        marginTop: 10,
    }
})