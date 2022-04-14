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
  function navigateLoading(user){
    navigation.navigate('Loading',user)
  }
  return (
    <ScrollView >
      <View style={styles.container}>
      <RegisterForm Register={navigateLoading} Login={navigatelogin}/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      height: 700,
      justifyContent: 'center',
    }
  }
)
export default Register
