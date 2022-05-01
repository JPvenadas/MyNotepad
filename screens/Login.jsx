import React from 'react'
import { View,
   Text, Button, ScrollView, 
   StyleSheet } from 'react-native'
import LoginLottie from '../components/login/LoginLottie'
import LoginForm from '../components/login/LoginForm'
import { Global } from '../styles/GlobalStyles'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
 const navigateRegister = () =>{
   navigation.navigate('Register')
 }
 const navigateLoading = (user) =>{
  navigation.navigate('Loading',user)
}

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <LoginLottie/>
        <LoginForm Register={navigateRegister} onLogin={navigateLoading}/>
      </View>
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: windowHeight,
    minHeight: 650
  }
})
export default Login
