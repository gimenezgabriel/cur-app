import { StyleSheet } from "react-native";
import {colors} from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail:{
        width: '95%',
        borderWidth: 2,
        borderColor: colors.secondary,
        height: 40,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    loginBotton:{
        backgroundColor: colors.primary,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSign:{
        fontFamily: 'OpenSansBold',
    color: colors.tertiary,
    fontSize: 18 
    },
    textAcount:{
        fontFamily: 'OpenSansBold',
    color: colors.quaternary,
    fontSize: 12 
    },
})