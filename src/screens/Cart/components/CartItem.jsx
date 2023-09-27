import { View, Text, Pressable } from 'react-native'
import styles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'

const CartItem = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.name}>Doctor</Text>
        </View>
        <View style={styles.details}>
            <View>
                <Text>Fecha de consulta</Text>
                <Text>Horario de consulta</Text>
            </View>
            <Pressable>
                <Feather name="trash" size={24} color={"red"} />
            </Pressable>
        </View>
    </View>
  )
}

export default CartItem