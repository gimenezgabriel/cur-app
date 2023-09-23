import { StyleSheet } from 'react-native'
import { colors } from '../../constants/Colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal:5,
  },
  description: {
    marginHorizontal:5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal:5,
  },
})