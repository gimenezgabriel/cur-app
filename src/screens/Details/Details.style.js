import { StyleSheet } from 'react-native'
import { colors } from '../../constants/Colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 60,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  imageContainer: {
    height: '40%',
    width: '50%',
  },
  image: {
    height: '100%',
    width: '100%',
    marginHorizontal: 'auto'
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
    marginVertical: 15,
    marginHorizontal:5,
    fontFamily: 'OpenSansCondensedBold'
  },
})