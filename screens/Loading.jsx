import React from 'react'
import { View, Text } from 'react-native'
import { Global } from '../styles/GlobalStyles'
import LottieView from 'lottie-react-native'

const Loading = ({route, navigation}) => {
  setTimeout(()=>{
    navigation.pop()
    navigation.navigate('Menu',route.params)
  },3000)
  
  return (
    <View style={Global.container}>
      <LottieView
        source={require('../assets/9619-loading-dots-in-yellow.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  )
}

export default Loading
