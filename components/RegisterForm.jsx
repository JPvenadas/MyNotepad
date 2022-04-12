import React, { Component } from 'react'
import { Text, TextInput, View, Alert, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Formik } from 'formik'
import * as yup from 'yup'

const validation = yup.object({
    confirmpassword: yup.string().required('Confirmation Required'),
    email: yup.string().required('Email address is required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            'Invalid email address'),
    firstname: yup.string().required(' Firstname Required'),
    password: yup.string().required('Password Required'),
    lastname: yup.string().required('Lastname Required'),
     
});



export class RegisterForm extends Component {
  render() {
      return (
          <View style={styles.Container}>
              <Text style={styles.title}>Register Account</Text>
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
                          console.log(values)
                          Alert.alert('Registration Successful')
                      }
                  }
                  validationSchema = {validation}
              >
                  {({ handleChange, handleSubmit, values, errors, touched }) => (
                      <View style={styles.form}>
                          <View style={styles.inputContainer}>
                          <TextInput 
                          style={styles.input}
                          onChangeText={handleChange('firstname')}  
                          placeholder='FirstName' />

                              {errors.firstname && touched.firstname ? 
                                  <Text style={styles.error}>{errors.firstname}</Text> :
                                  null
                              }
                              
                         </View>
                         <View style={styles.inputContainer}>
                          <TextInput 
                          style={styles.input}
                          onChangeText={handleChange('lastname')}  
                          placeholder='LastName' />
                        {errors.lastname && touched.lastname?
                        <Text style={styles.error}>{errors.lastname}</Text>:
                        null
                        }
                        </View>
                          <View style={styles.inputContainer}>
                          <TextInput
                          style={styles.input} 
                          onChangeText={handleChange('email')}  
                          placeholder='Email' />
                          
                          {errors.email && touched.email ?
                                  <Text style={styles.error}>{errors.email}</Text> :
                                  null
                              }

                          </View>
                          <View style={styles.inputContainer}>
                          <TextInput 
                          style={styles.input}
                          onChangeText={handleChange('password')} 
                          secureTextEntry={true} 
                           placeholder='Password' />
                         
                         {errors.password && touched.password ?
                                  <Text style={styles.error}>{errors.password}</Text> :
                                  null
                              }

                          </View>
                          <View style={styles.inputContainer}>
                          <TextInput 
                          style={styles.input}
                          onChangeText={handleChange('confirmpassword')} 
                          secureTextEntry={true}  
                          placeholder='Confirm Password' />
                         
                         {errors.confirmpassword && touched.confirmpassword ?
                                  <Text style={styles.error}>{errors.confirmpassword}</Text> :
                                  null
                              }

                          </View>

                          <View style={styles.inputContainer}>
                              <Button
                                  buttonStyle={styles.button}
                                  title='Register'
                                  onPress={()=>{
                                      errors.firstname? Alert.alert(errors.firstname):
                                      errors.lastname? Alert.alert(errors.lastname):
                                      errors.email? Alert.alert(errors.email):
                                      errors.password? Alert.alert(errors.password):
                                      errors.confirmpassword? Alert.alert(errors.confirmpassword): ''
                                      handleSubmit()}} />
                          </View>
                         
                          <View style={styles.inputContainer}>
                              <Button
                                  buttonStyle={styles.button}
                                  title='Already Have an account?'/>
                          </View>
                      </View>)
                  }
              </Formik>
          </View>
    )
  }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'auto'
    },
    error:{
        color: 'red',
        fontSize: 10,
        alignSelf: 'flex-start',

    },
    title:{
        color: '#277ef0',
        fontSize: 23,
        fontWeight: 'bold',
       
    },
    form:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    inputContainer:{
        marginVertical: 5,
        width: '80%',
        display: 'flex',
    },
    input: {
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: '#277ef0',
        borderRadius: 8
    },
    button:{
        width: '100%',
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 8
    }
})

export default RegisterForm