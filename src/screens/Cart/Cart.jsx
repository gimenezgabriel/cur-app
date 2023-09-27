import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import styles from './Cart.styles'
import datacart from '../../data/datacart'
import CartItem from './components/CartItem'

const Cart = () => {
const renderItem = () => <CartItem />


  return (
    <View style={styles.container}>
      <View>
        <FlatList 
        data={datacart} 
        keyExtractor={item => item.id} 
        renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text>
            Confirmar
          </Text>
          <View>
            <Text>{'Plus $100'}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart