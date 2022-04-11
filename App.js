import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navigation/Navigations';



function App() {
  return (
    <NavigationContainer>
      <Navigations/>
    </NavigationContainer>
  );
}

export default App;