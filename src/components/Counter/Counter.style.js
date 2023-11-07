import { StyleSheet } from "react-native"
import {colors} from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
    },
    counterContainer: {
      flexDirection: "row",
      backgroundColor: "white",
      justifyContent: "space-between",
      height: 50,
      marginTop: 50,
    },
    counterButtons: {
      backgroundColor: colors.secondary,
      width: "33%",
      justifyContent: "center",
      alignItems: "center",
    },
    signs: {
      fontSize: 35,
    },
    input: {
      backgroundColor: "white",
      width: "80%",
      height: 30,
    },
    inputContainer: {
      flexDirection: "row",
      marginVertical: 10,
      padding: 10,
    },
  });
