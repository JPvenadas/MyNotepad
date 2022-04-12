import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, 
  Button, TextInput,
  ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RegisterForm from '../components/RegisterForm'


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
    <ScrollView> 
          <Text>Register Screen</Text>
          
          <Button
              title="Register"
              onPress={() => navigation.navigate('Loading')}
          />
          <Button
              title="Already have an account?"
              onPress={() => navigation.navigate('Login')}
          />
          <RegisterForm/>
    </ScrollView>
  )
}

export default Register
