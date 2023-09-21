import {FlatList, View} from 'react-native'

import { Header } from '../../components'
import { CategoryItem } from './Components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Header title={'Categories'} />
    <FlatList
    data={dataCategories}
    keyExtractor={category => category}
    renderItem={({ item }) => (
    <CategoryItem
     category={item}
     navigation={navigation}
     />
     )}
    />
    </SafeAreaView>
  )
}

export default Home

