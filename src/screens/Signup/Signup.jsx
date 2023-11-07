import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './signup.styles'
import {useSignUpMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authslice'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerSignUp({
      email,
      password,
    })
    .unwrap()
    .then(result => {
      dispatch(setUser (result))
    })
    .catch(err => console.log(err))
  }


  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.textSign}>Signup to start</Text>
            <TextInput style={[styles.inputEmail, styles.placeholder]} placeholder='Nombre y Apellido' />
            <TextInput style={[styles.inputEmail, styles.placeholder]} placeholder='DNI' />
            <TextInput style={[styles.inputEmail, styles.placeholder]} placeholder='Telefono' />
            <TextInput style={[styles.inputEmail, styles.placeholder]} value={email} onChangeText={setEmail} placeholder='Email' />
            <TextInput style={[styles.inputEmail, styles.placeholder]} value={password} onChangeText={setPassword} placeholder='Contraseña' />
            <TextInput style={[styles.inputEmail, styles.placeholder]} value={confirmPass} onChangeText={setConfirmPass} placeholder='Confirmar Contraseña' />
            <Pressable style={styles.loginBotton} onPress={onSubmit}>
                <Text style={{color: 'white'}}>Sign up</Text>
            </Pressable>
            <Text style={styles.textAcount}>Ya tienes cuenta?</Text>
            <Pressable style={styles.loginBotton} 
            onPress={() => navigation.navigate("Login")}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Signup