import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import Header from '../components/Header'

const CategoriesList = ({category, navigation}) => {

return (
<>
    <Header title={category} navigation={navigation}/>
    <View style={styles.container}>
        <Text>Categories List</Text>
    </View>
</>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})