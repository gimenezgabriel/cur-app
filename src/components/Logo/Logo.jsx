import React from 'react'
import { Image, View } from 'react-native'
import logo from '../../../assets/logo_cur.png'
import styles from './Logo.style'

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
    <Image
    style={styles.logoImage} 
    source={logo} 
    resizeMode='contain'
    />
    </View>
  )
}

export default Logo