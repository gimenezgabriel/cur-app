import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useEffect } from 'react'
import * as Location from 'expo-location'
import { MapPreview } from '../../components'
import styles from './Location.style'

const LocationScreen = () => {
    const [location, setLocation] = useState({latitude: '', longitude: ''})
    const [error, setError] = useState('')


useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
        setError('Permission to access location was denied')
        return
    }
    let location = await Location.getCurrentPositionAsync({})
    setLocation({
        latitude : location?.coords.latitude,
        longitude : location?.coords.longitude,
    })
    })()
}, [])


  return (
    <View style={styles.container}>
      <Text>My adress</Text>
      {location ? (
      <View style={styles.withoutLocation}>
        <Text>
            Latitude: {location.latitude}, Longitude: {location.longitude}
            </Text>
            <MapPreview location={location}/>
      </View> 
      ) : (
         <View style={styles.withoutLocation}>
        <Text>{error}</Text>
        </View>
      )}
    </View>
)
}

export default LocationScreen