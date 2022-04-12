import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navigation/Navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';



function App() {
  
  const [users, setUsers] = useState([])

  return (
    <NavigationContainer>
      <Navigations/>
    </NavigationContainer>
  );
}

export default App;