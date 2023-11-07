import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Order.styles'
import { useGetOrdersQuery } from '../../services/shopApi'

const Orders = () => {
  const {data, isLoading} = useGetOrdersQuery()

  return (
    <View styles={styles.container}>
      {!isLoading && (
        <FlatList styles={styles.listContainer}
        data={data} 
        renderItem={({item}) => (
        <Text>{item}</Text>
    )} key={item => item} 
    />
      )}
    </View>
  )
}

export default Orders