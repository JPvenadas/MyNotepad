import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const LoginLottie = () => {
  return (
    <View style={styles.container}>
        <Image source={
          require('../../assets/notepad.png')}
    style={styles.image}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      marginBottom: 30,
    },
    image: {
       width: '70%',
       height: 180,
      },
})
export default LoginLottie
