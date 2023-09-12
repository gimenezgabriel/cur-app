import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './Searchinput.style'

const Searchinput = ({ onSearch }) => {
    const [value, setvaleu] = useState('')

    const search = () => {
        onSearch(value)
    }

    const clearInput = () => {
        setvaleu('');
        onSearch('')
    }

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input}
        value={value} 
        onChangeText={setValue} 
        placeholder='Search product' 
        />
        <Pressable onPress={search}>
            <AntDesign name='search1' size={25} color={'black'} />
        </Pressable>
        <Pressable onPress={clearInput}>
            <AntDesign name='closecircleo' size={25} color={'black'} />
        </Pressable>
    </View>
  )
}

export default Searchinput

const styles = StyleSheet.create({})