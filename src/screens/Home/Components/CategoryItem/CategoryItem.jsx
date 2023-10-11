import { Pressable, Text, View, Image } from 'react-native'

import {Card} from '../../../../components'
import React from 'react'
import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shop/shopSlice'

const CategoryItem = ({ category, navigation}) => {
  const dispatch = useDispatch()

const {title} = category

  return (
<Pressable 
onPress={() => {
  dispatch(setCategorySelected(category))
  navigation.navigate('Products', {title: title})}}
>

    <Card style={styles.cardContainer}>
    <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            src={category.src}
          />
        </View>
        <Text style={styles.text}>{category.title}</Text>
    </Card>
</Pressable>
  )
}

export default CategoryItem

