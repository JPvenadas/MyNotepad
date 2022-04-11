import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = ({navigation}) => {
  return (
    <View>
        <Text>Hello WOrld</Text>
        
       <Button
        title="Login"
        onPress={() => navigation.navigate('Loading')}
      />
      <Button
         title="Doesn't have an account yet?"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}

export default Login
