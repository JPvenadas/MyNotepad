import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, 
  Button, TextInput,
  ScrollView, StyleSheet } from 'react-native'
import { Global } from '../styles/GlobalStyles'
import RegisterForm from '../components/Register/RegisterForm'


const Register = ({navigation}) => {
  function navigatelogin(){
    navigation.navigate('Login')
  }
  function navigateLoading(){
    navigation.navigate('Loading')
  }
  return (
    <View style={Global.container}>
      <RegisterForm Register={navigateLoading} Login={navigatelogin}/>
    </View>
   
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#83c49e'
    }
  }
)
export default Register
