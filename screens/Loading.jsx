import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.production.min'


const Loading = ({navigation}) => {
  setTimeout(()=>{
    navigation.pop()
    navigation.navigate('Menu')
  },3000)

  return (
    <View>
        <Text>Loading</Text>
    </View>
  )
}

export default Loading
