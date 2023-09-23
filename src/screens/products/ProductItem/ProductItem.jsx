import { Pressable, Text, View, Image } from 'react-native'

import React from 'react'
import styles from './ProductItem.style'
import { Card } from '../../../components'

const ProductItem = ({ product, navigation}) => {

  return (
<Pressable 
onPress={() => navigation.navigate('Details', {product: product})}
>

    <Card style={styles.cardContainer}>
    <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={product.images[0]}
          />
        </View>
        <Text style={styles.text}>{product.title}</Text>
    </Card>
</Pressable>
  )
}

export default ProductItem

