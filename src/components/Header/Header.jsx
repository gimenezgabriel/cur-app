import { Text, View, TouchableOpacity } from 'react-native'

import React from 'react'
import styles from './Header.style'

const Header = ({ name, title, navigation }) => {
  return (
    <View style={styles.container}> 
    {name !== 'Home' &&
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.bakButtonText}
          >Back</Text>
        </TouchableOpacity>
}
      <View style={styles.headerContainer}>
      <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default Header