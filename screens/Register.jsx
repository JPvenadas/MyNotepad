import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'


const Register = ({navigation}) => {
    const [database, setDatabase] = useState("")
    
    const storeData = async () => {
      const value = {
        users:[]
    }
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('database', jsonValue)
        getData()
      } catch (e) {
      console.log(e)
      }
    }

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('database')
        if(value !== null) {
         setDatabase(JSON.parse(value))
        }
        if(value === null){
         storeData();
        }
      } catch(e) {
       console.log(e)
      }
    }
    

    useEffect(()=>{
      getData()
    },[])

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
