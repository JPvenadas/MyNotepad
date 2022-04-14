import React, {useLayoutEffect, useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { Global } from '../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';

const Menu = ({route, navigation}) => {
  const [notes, setnotes] = useState()

  useFocusEffect(
    React.useCallback(() => {
      setnotes(route.params.notes)
    }, [route])
  )

  const render = ({item}) =>{
    return(
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.Title}>{item.header}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
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
    <View style={styles.container}>
      <FlatList
      data={notes}
      renderItem={render}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: 'flex-start',
    flex: 1,
    padding: 15
  },
  item:{
    backgroundColor: "#d5dc5683",
    marginVertical: 7,
    paddingVertical: 27,
    paddingHorizontal: 10,
  },
  date:{
    color: '#686868',
    fontSize: 12,
  },
  Title:{
    fontWeight: 'bold',
    color: '#5a5a5a',
    fontSize: 16
  }
})
export default Menu
