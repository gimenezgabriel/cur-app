import { StyleSheet } from "react-native";
import {colors} from '../../../../constants/Colors'

export default styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text: {
    fontFamily: 'OpenSansBold',
    color: colors.quaternary,
    fontSize: 16
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width:48, 
    height: 48, 
  },
});