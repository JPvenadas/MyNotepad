import React, {useState, useEffect} from 'react'
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Global } from '../../styles/GlobalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const validation = yup.object({
  email: yup.string().required('Please Input your Username'),
  password: yup.string().required('Please Input your Password')
});


const LoginForm = ({Register, onLogin}) => {

  const [database, setDatabase] = useState("")
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('database')
      if(value != null) {
       setDatabase(JSON.parse(value))
      }
    } catch(e) {
     console.log(e)
    }
  }

  useEffect(()=>{
    getData()
  },[database])
  return (
    <View style={styles.Container}>
      <Formik
        initialValues={
          {
            email: '',
            password: '',
          }}
        onSubmit={
          (values) => {
           let variable
            database.users.map((user) => {
              if (values.email == user.email && values.password == user.password){
                onLogin(user)
                variable = true
              }
            }) 
            !variable? Alert.alert('Login Error', 'Wrong Username and Password'): ''; 
          }
        }
        validationSchema={validation}
      >{
        ({handleSubmit,handleChange,values, errors, touched})=>(
          <View style={styles.form}>

            <Text style={styles.title}>
              <Text style={styles.subtitile1}>My</Text> <Text style={styles.subtitile2}>Notepad</Text>
            </Text>

            <View style={Global.inputContainer}>
              <TextInput
                style={Global.input}
                onChangeText={handleChange('email')}
                placeholder='Username' />
              {errors.email && touched.email ?
                <Text style={Global.error}>{errors.email}</Text> :
                null
              }
            </View>
            <View style={Global.inputContainer}>
              <TextInput
                style={Global.input}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                placeholder='Password' />
              {errors.password && touched.password ?
                <Text style={Global.error}>{errors.password}</Text> :
                null
              }
            </View>
            <View style={Global.inputContainer}>
              <Button
                buttonStyle={Global.button}
                title='Login'
                onPress={() => {
                  errors.email ? Alert.alert('Oops!!!',errors.email) :
                  errors.password ? Alert.alert('Oops!!!',errors.password) : ''
                handleSubmit()
                }} />
            </View>
            <Text>or</Text>
            <View style={Global.inputContainer}>
              <Button
                buttonStyle={Global.subButton}
                title="Signup"
                onPress={()=>{Register()}}/>
            </View>
          </View>)
      }
      </Formik>

   </View>
)}

const styles = StyleSheet.create({
  Container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 'auto'
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  inputContainer: {
    marginVertical: 5,
    width: '80%',
    display: 'flex',
  },
  error: {
    color: 'red',
    fontSize: 10,
    alignSelf: 'flex-start',
  },
  title:{
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  subtitile1:{
    color: '#535455',
  },
  subtitile2:{
    color: '#e8bc43'
  }
})

export default LoginForm
