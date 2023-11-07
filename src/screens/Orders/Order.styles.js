import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
        backgroundColor: colors.tertiary
    }
})