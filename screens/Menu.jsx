import React, {useLayoutEffect, useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { Global } from '../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Menu = ({route, navigation}) => {
  const [notes, setnotes] = useState()
  const [database, setDatabase] = useState()

  useFocusEffect(
    React.useCallback(() => {
      setnotes(route.params.notes)
      getData()
    }, [route])
  )
  
  const deleteitem = (key) =>{
    setnotes(notes.filter(note => note.key != key))
  }

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

  const render = ({item}) =>{
    return(
      <TouchableOpacity>
        <View style={styles.item}>
          <View>
            <Text style={styles.Title}>{item.header}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.buttonContainer}>
             <Button 
             buttonStyle={styles.buttons}
             icon={<Icon  size={18} color='#989898' name='edit'/>}
             onPress={()=>{
             
             }}/>
             <Button
             buttonStyle={styles.buttons}
             icon={<Icon size={18} color='#949494' name='delete'/>}
             onPress={()=>{
              deleteitem(item.key)
             }}/>
          </View>
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
        icon={<Icon  name='menu' color="#fff"/>}
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date:{
    color: '#686868',
    fontSize: 12,
  },
  Title:{
    fontWeight: 'bold',
    color: '#5a5a5a',
    fontSize: 16
  },
  buttonContainer:{
    flexDirection: "row",
  },
  buttons:{
    borderRadius: 50,
    backgroundColor: "#fff",
    padding: 10,
    margin: 5
  }
})
export default Menu
