import { Text, View, Image } from 'react-native'

import React from 'react'
import {Header} from '../../components'
import styles from './Details.style'

const Details = ({route}) => {
  const {product} = route.params
  return (
<View style={styles.container}>
    <Header title={'Detalle'} />
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={{ uri: product.images [0]}} />
    </View>
    <Text style={styles.title}>{product.title}</Text>
    <Text>{product.description}</Text>
    <Text style={styles.price}>{'$ ${product.price}'}</Text>
</View>
  )
}

export default Details