import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Loading from '../screens/Loading';
import Menu from '../screens/Menu';
import Noteview from '../screens/Noteview';
import NoteEdit from '../screens/NoteEdit';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="NoteView" component={Noteview} />
        <Stack.Screen name="NoteEdit" component={NoteEdit} />
    </Stack.Navigator>
  )
}

export default Navigations
