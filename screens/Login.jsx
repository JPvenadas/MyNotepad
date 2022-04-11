import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = ({navigation}) => {
  return (
    <View>
        <Text>Hello WOrld</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}

export default Login
