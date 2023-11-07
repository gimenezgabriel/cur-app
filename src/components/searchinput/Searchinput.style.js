import { StyleSheet } from "react-native"
import {colors} from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
        marginHorizontal: 20,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.primary,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.secondary,
        width: '95%',
        fontSize: 20,
    }
})