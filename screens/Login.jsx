import React from 'react'
import { View,
   Text, Button, ScrollView, 
   StyleSheet } from 'react-native'
import LoginLottie from '../components/login/LoginLottie'
import LoginForm from '../components/login/LoginForm'
import { Global } from '../styles/GlobalStyles'

const Login = ({navigation}) => {
 const navigateRegister = () =>{
   navigation.navigate('Register')
 }
 const navigateLoading = (user) =>{
   console.log(user)
  navigation.navigate('Loading',user)
}

  return (
    <View style={Global.container}>
        <LoginLottie/>
        <LoginForm Register={navigateRegister} onLogin={navigateLoading}/>
    </View>
  )
}

export default Login
