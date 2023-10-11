import { View, Text, Pressable } from 'react-native'
import styles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.name}>{item.title}</Text>
        </View>
        <View style={styles.details}>
            <View>
                <Text>{item.quantity}</Text>
                <Text>{item.price}</Text>
            </View>
            <Pressable>
                <Feather name="trash" size={24} color={"red"} />
            </Pressable>
        </View>
    </View>
  )
}

export default CartItem