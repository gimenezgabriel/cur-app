import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './signup.styles'
import {useSignUpMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authslice'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignUp({
      email,
      password,
    })
    console.log('resultado', result)
    if(result.isSuccess) {
      dispatch(setUser (result))
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.textSign}>Signup to start</Text>
            <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail} />
            <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword} />
            <TextInput style={styles.inputEmail} value={confirmPass} onChangeText={setConfirmPass} />
            <Pressable style={styles.loginBotton} onPress={onSubmit}>
                <Text style={{color: 'white'}}>Sign up</Text>
            </Pressable>
            <Text style={styles.textAcount}>Already have an acount?</Text>
            <Pressable style={styles.loginBotton}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Signup