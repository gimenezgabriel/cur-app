import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AuthStackNavigator from './AuthstackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage, setUser } from '../features/auth/authslice'
import { fetchSession } from '../db'

const MainNavigator = () => {
    const {user, localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetProfileImageQuery(localId)

useEffect(() => {
  if (data) {
dispatch(setCameraImage(data.image))
  }
}, [data])

useEffect(() => {
  (async () => {
    try {
      const session = await fetchSession();
      if(session.rows.length) {
        const user = session.rows._array[0]
        dispatch(setUser(user))
      }
    } catch (error) {
    }
  })()
}, [])

  

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator



 