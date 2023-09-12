import {FlatList, View} from 'react-native'

import { Header } from '../../components'
import { CategoryItem } from './Components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'

const Home = () => {
  return (
    <View style={styles.container}>
    <Header title={'Categories'} />
    <FlatList
    data={dataCategories}
    keyExtractor={category => category}
    renderItem={({ item }) => <CategoryItem category={item} />}
    />
    </View>
  )
}

export default Home

