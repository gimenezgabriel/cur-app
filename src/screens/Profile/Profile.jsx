import { View, Text, Pressable, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as ImagePicker from'expo-image-picker'
import styles from './Profile.styles'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authslice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const {localId} =useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

    
    const verifyCameraPermissions = async () => {
      const {granted} = await ImagePicker.requestCameraPermissionsAsync()
      if(!granted) {
        return false
      }
      return true
    }

    const pickImage = async () => {
      const isCameraOk = await verifyCameraPermissions()

      if (isCameraOk) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9,16],
          base64: true,
          quality: 0.4,
        })
        if(!result.canceled) {
          dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
        }
      }
    }


    const confirmImage = () => {
      triggerSaveProfileImage({image, localId})
      console.log(result)
    }

  return (
    <View style={styles.container}>
        {image ? (
          <Image source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode='cover'
          />
        ) : (
      <Image source={{ 
        uri: 'https://cdn-icons-png.flaticon.com/512/6326/6326055.png'
        }}
        style={styles.image}
        resizeMode='cover'
        />
        )}
        <Pressable style={styles.cameraButtom} onPress={pickImage} >
            <Text style={styles.textProfile}>Tomar foto de perfil</Text>
        </Pressable>
        <Pressable style={styles.cameraButtom} onPress={confirmImage} >
            <Text style={styles.textProfile}>confirmar</Text>
        </Pressable>
    </View>
  )
}

export default Profile


