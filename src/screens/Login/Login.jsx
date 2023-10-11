import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import styles from './Login.styles'

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text>Login to start</Text>
            <TextInput style={styles.inputEmail}/>
            <TextInput style={styles.inputEmail}/>
            <Pressable style={styles.loginBotton}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
            <Text>No have an acount?</Text>
            <Pressable style={styles.loginBotton}>
                <Text style={{color: 'white'}}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login