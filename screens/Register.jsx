import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, 
  Button, TextInput,
  ScrollView, StyleSheet } from 'react-native'
import { Global } from '../styles/GlobalStyles'
import RegisterForm from '../components/Register/RegisterForm'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;


const Register = ({navigation}) => {
  function navigatelogin(){
    navigation.navigate('Login')
  }
  function navigateLoading(user){
    navigation.navigate('Loading',user)
  }
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
      height: windowHeight,
      justifyContent: 'center',
    }
  }
)
export default Register
