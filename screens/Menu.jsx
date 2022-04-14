import React, {useLayoutEffect} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { Global } from '../styles/GlobalStyles';

const Menu = ({route, navigation}) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
        icon={<Icon name='add' color="#fff"/>}
        buttonStyle={{
          backgroundColor: 'transparent',
        }} onPress={() => {navigation.navigate('NoteAdd',route.params)}}/>
      ),
      headerLeft: ()=>(
        <Button 
        icon={<Icon name='menu' color="#fff"/>}
        buttonStyle={{
          backgroundColor: 'transparent',
        }} onPress={() => {}}/>
      )
    });
  }, [navigation]);
  return (
    <View style={Global.container}>
        <Text>{JSON.stringify(route.params)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})
export default Menu
