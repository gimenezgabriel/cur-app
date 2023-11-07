import { View, Text, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from './Login.styles'
import {useLoginMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authslice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ triggerLogin, result ] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
    .unwrap()
    .then(result => {
      dispatch(setUser(result))
      insertSession({
        localId: result.localId,
        email: result.email,
        token: result.idToken,
      
    })
      .then(result => console.log(result)) 
      .catch(error => console.log(error.message))
    })
  }


  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.textLogin}>Login to start</Text>
            <TextInput style={[styles.inputEmail, , styles.placeholder]} value={email} onChangeText={setEmail} placeholder='Email' placeholderStyle={styles.placeholder}/>
            <TextInput style={[styles.inputEmail, styles.placeholder]} value={password} onChangeText={setPassword} placeholder='Contraseña' placeholderStyle={styles.placeholder}/>
            <Pressable style={styles.loginBotton} onPress={onSubmit}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
            <Text style={styles.textAcount}>No have an acount?</Text>
            <Pressable style={styles.loginBotton} onPress={() => navigation.navigate("Signup")}>
                <Text style={{color: 'white'}}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login