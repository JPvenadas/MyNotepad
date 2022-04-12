import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.production.min'
import { Global } from '../styles/GlobalStyles'

const Loading = ({navigation}) => {
  setTimeout(()=>{
    navigation.pop()
    navigation.navigate('Menu')
  },3000)

  return (
    <View style={Global.container}>
        
    </View>
  )
}

export default Loading
