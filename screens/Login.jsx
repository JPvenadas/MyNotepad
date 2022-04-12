import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

const Login = ({navigation}) => {
  return (
    <ScrollView>
        <Text>Hello WOrld</Text>
        
       <Button
        title="Login"
        onPress={() => navigation.navigate('Loading')}
      />
      <Button
         title="Doesn't have an account yet?"
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  )
}

export default Login
