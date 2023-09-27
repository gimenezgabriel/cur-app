import { StyleSheet } from 'react-native'
import { colors } from '../../constants/Colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontFamily: 'OpenSansBold',
    marginHorizontal:5,
    color: colors.quaternary,
  },
  description: {
    marginHorizontal:5,
    fontFamily: 'OpenSansMedium'
  },
  price: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal:5,
    fontFamily: 'OpenSansCondensedBold'
  },
})