import { View, Text } from 'react-native'
import React from 'react'
import styles from './Order.styles'
import Counter from '../../components/Counter'

const Orders = () => {
  return (
    <View styles={styles.container}>
      <Counter />
      <Text>Consultas</Text>
    </View>
  )
}

export default Orders