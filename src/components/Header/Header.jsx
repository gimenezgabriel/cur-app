import { Text, View, TouchableOpacity } from 'react-native'

import React from 'react'
import styles from './Header.style'

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default Header