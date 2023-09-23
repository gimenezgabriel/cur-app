import { Pressable, Text, View, Image } from 'react-native'

import {Card} from '../../../../components'
import React from 'react'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation}) => {

const {title, src} = category

  return (
<Pressable 
onPress={() => navigation.navigate('Products', {title})}
>

    <Card style={styles.cardContainer}>
    <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={category.src}
          />
        </View>
        <Text style={styles.text}>{category.title}</Text>
    </Card>
</Pressable>
  )
}

export default CategoryItem

