import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Global } from '../../styles/GlobalStyles'
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage'

const validation = yup.object({
    confirmpassword: yup.string().required('Confirmation Required')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    email: yup.string().required('Email address is required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            'Invalid email address'),
    firstname: yup.string().required(' Firstname Required'),
    password: yup.string().required('Password Required')
    .oneOf([yup.ref('confirmpassword')], 'Your passwords do not match.'),
    lastname: yup.string().required('Lastname Required'),
     
});

export function RegisterForm({Register, Login}) {
         
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
    const store = async () => {
        try {
          await AsyncStorage.setItem('database', JSON.stringify(database))
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
    useEffect(()=>{
        store()
    },[database])

      return (
          <View style={styles.Container}>
              <Text style={styles.title}>Create an account</Text>
              <Formik
                  initialValues={
                      {
                          firstname: '',
                          lastname: '',
                          email: '',
                          password: '',
                          confirmpassword: ''
                      }}
                  onSubmit={
                      (values, errors) => {
                          const newuser = {   key: Math.random(),
                            firstname: values.firstname,
                            lastname: values.lastname,
                            email: values.email,
                            password: values.password,
                            notes: []
                        }
                          setDatabase({
                              users: [...database.users, newuser]
                          })
                          Register(newuser)
                      }
                  }
                  validationSchema = {validation}
              >
                  {({ handleChange, handleSubmit, values, errors, touched }) => (
                      <View style={styles.form}>
                          <View style={Global.inputContainer}>
                          <TextInput 
                          style={Global.input}
                          onChangeText={handleChange('firstname')}  
                          placeholder='FirstName' />

                              {errors.firstname && touched.firstname ? 
                                  <Text style={Global.error}>{errors.firstname}</Text> :
                                  null
                              }
                              
                         </View>
                         <View style={Global.inputContainer}>
                          <TextInput 
                          style={Global.input}
                          onChangeText={handleChange('lastname')}  
                          placeholder='LastName' />
                        {errors.lastname && touched.lastname?
                        <Text style={Global.error}>{errors.lastname}</Text>:
                        null
                        }
                        </View>
                          <View style={Global.inputContainer}>
                          <TextInput
                          style={Global.input} 
                          onChangeText={handleChange('email')}  
                          placeholder='Email' />
                          
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
                          <TextInput 
                          style={Global.input}
                          onChangeText={handleChange('confirmpassword')} 
                          secureTextEntry={true}  
                          placeholder='Confirm Password' />
                         
                         {errors.confirmpassword && touched.confirmpassword ?
                                  <Text style={Global.error}>{errors.confirmpassword}</Text> :
                                  null
                              }

                          </View>

                          <View style={Global.inputContainer}>
                              <Button
                                  buttonStyle={Global.button}
                                  title='Register'
                                  onPress={()=>{
                                      errors.firstname? Alert.alert(errors.firstname):
                                      errors.lastname? Alert.alert(errors.lastname):
                                      errors.email? Alert.alert(errors.email):
                                      errors.password? Alert.alert(errors.password):
                                      errors.confirmpassword? Alert.alert(errors.confirmpassword): ''
                                      handleSubmit()}} />
                          </View>
                         <Text>or</Text>
                          <View style={Global.inputContainer}>
                              <Button
                                  buttonStyle={Global.subButton}
                                  title='Already Have an account?'
                                  onPress={()=>{Login()}}/>
                                  
                          </View>
                          <Text></Text>
                      </View>)
                  }
              </Formik>
          </View>
    )
  }


const styles = StyleSheet.create({
    Container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'auto'
    },
    title:{
        color: '#f5d170',
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom: 30,
        fontWeight: 'bold',
       
    },
    form:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
})

export default RegisterForm