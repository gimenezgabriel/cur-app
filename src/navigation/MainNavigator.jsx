import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import AuthStackNavigator from './AuthstackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const MainNavigator = () => {
    // const [user, setuser] = useState(null)
    const user = useSelector(state => state.auth.user)
  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator