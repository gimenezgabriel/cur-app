import { Text, View } from 'react-native'

import React from 'react'
import {Header} from '../../components'
import styles from './Details.style'

const Details = ({product}) => {
  return (
<View style={styles.container}>
    <Header title={'Detalle'} />
</View>
  )
}

export default Details