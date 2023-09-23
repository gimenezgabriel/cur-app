import { Text, View, Image } from 'react-native'

import React from 'react'
import {Header} from '../../components'
import styles from './Details.style'

const Details = ({route, navigation}) => {
  const {product} = route.params
  console.log("🚀 ~ file: Details.jsx:9 ~ Details ~ product:", product.images[0])
  return (
<View style={styles.container}>
    <Header title={'Detalle'} navigation={navigation}/>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={product.images[0]} />
    </View>
    <Text style={styles.title}>{product.title}</Text>
    <Text>{product.description}</Text>
    <Text style={styles.price}>Matricula: {product.cardnumber}</Text>
</View>
  )
}

export default Details