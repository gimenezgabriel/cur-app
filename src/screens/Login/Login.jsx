import { View, Text, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from './Login.styles'
import {useLoginMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authslice'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ triggerLogin, result ] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password)
    triggerLogin({
      email,
      password,
    })
    console.log(result)
    if(result.isSuccess) {
      dispatch(setUser(result))
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.textLogin}>Login to start</Text>
            <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail}/>
            <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword}/>
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