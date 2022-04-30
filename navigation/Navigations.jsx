import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Loading from '../screens/Loading';
import Menu from '../screens/Menu';
import Noteview from '../screens/Noteview';
import NoteAdd from '../screens/NoteAdd';
import NoteEdit from '../screens/NoteEdit';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={Register}
         options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Loading" component={Loading}
         options={{
          headerShown: false
        }}  />
        <Stack.Screen name="Menu" component={Menu} 
        options={{
          title: "Notes",
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerBackVisible: false,
          headerStyle:{
            backgroundColor: '#f4dc72',
          }
        }}/>
        <Stack.Screen name="NoteView" component={Noteview}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#f4dc72',
          }
        }}/>
        <Stack.Screen name="NoteAdd" component={NoteAdd}
        options={{
          title: "Add a Note",
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle:{
          backgroundColor: '#f4dc72',
          }}} />
          <Stack.Screen name="NoteEdit" component={NoteEdit}
        options={{
          title: "Edit a Note",
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle:{
          backgroundColor: '#f4dc72',
          }}} />
    </Stack.Navigator>
  )
}

export default Navigations
