import { StyleSheet } from "react-native"
import {colors} from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
    },
    input: {
        color: colors.primary,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.secondary,
        width: '80%',
        fontSize: 20,
    }
})