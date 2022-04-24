import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navigation/Navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {
  
  
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
   
  );
}

export default App;