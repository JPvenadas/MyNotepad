import React from 'react'
import { View, Text } from 'react-native'

const Menu = ({route}) => {
  return (
    <View>
        <Text>{JSON.stringify(route.params)}</Text>
    </View>
  )
}

export default Menu
