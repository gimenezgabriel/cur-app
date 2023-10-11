import {FlatList, View} from 'react-native'

import { Header } from '../../components'
import { CategoryItem } from './Components'
import React from 'react'
import styles from './Home.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetCategoriesQuery } from '../../services/shopApi'

const Home = ( {navigation, route}) => {
  const { data, isLoading } = useGetCategoriesQuery()
  return (
    <SafeAreaView style={styles.container}>
    <Header title={'Categorias'} navigation={navigation} name={route.name}/>
    {!isLoading && (
    <FlatList
    data={data}
    keyExtractor={category => category.title}
    renderItem={({ item }) => (
    <CategoryItem
     category={item}
     navigation={navigation}
     />
     )}
    />
    )}
    </SafeAreaView>
  )
}

export default Home

