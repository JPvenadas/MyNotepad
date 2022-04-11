import React from 'react'
import { View, Text, Button } from 'react-native'

const Register = ({navigation}) => {
  return (
    <View>
          <Text>Register Screen</Text>
          <Button
              title="Register"
              onPress={() => navigation.navigate('Loading')}
          />
          <Button
              title="Already have an account?"
              onPress={() => navigation.navigate('Login')}
          />
    </View>
  )
}

export default Register
