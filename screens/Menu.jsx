import React, {useLayoutEffect, useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, InteractionManager} from 'react-native'
import { Button, Icon, withTheme } from 'react-native-elements';
import { Global } from '../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Menu = ({route, navigation}) => {
  const [notes, setnotes] = useState()
  const [database, setDatabase] = useState({})
  const [loggeduser, setLoggedUser] = useState()
  
  useFocusEffect(
    React.useCallback(() => {
    let active = true
      if (active) {
        setnotes(route.params.notes)
        setNotes()
      }
    return ()=>{
      active= false
    }
    }, [route])
  )


  const deleteitem = (key) =>{
    let updatedDB = database.users
    let newdb= updatedDB.map((user) => {
      user.key,
      user.email,
      user.firstname,
      user.lastname,
      user.password,
      user.notes = user.notes.filter(note => note.key != key)
    })
    setDatabase({users: newdb})
    storeData()
    route.params.notes = route.params.notes.filter(note => note.key != key)
    setnotes(route.params.notes)
    setNotes()
  }
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(database))
    } catch (e) {
    console.log(e)
    }
  }

  const getData = async () => {
    let value
    try {
       value = await AsyncStorage.getItem('database')
      if(value != null) {
       return JSON.parse(value)
      }
    } catch(e){
      return(null)
    }
  }

  const setNotes = async () =>{
    setDatabase(await getData())
    
  }

  const render = ({item}) =>{
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('NoteView', item)}}>
        <View style={styles.item}>
          <View>
            <Text style={styles.Title}>{item.header}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.buttonContainer}>
             
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
        icon={<Icon  name='power-off' type='font-awesome' color="#fff"/>}
        buttonStyle={{
          backgroundColor: 'transparent',
        }} onPress={() => {}}/>
      )
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View>
          <Image style={styles.icon} source={
            require('../assets/UserIcon.png')}/>
        </View>
        <View>
        <Text style={styles.Username}>
        {route.params.firstname} {route.params.lastname}
        </Text>
        <Text style={styles.email}>{route.params.email}</Text>
        </View>
      </View>
        <FlatList
        style={styles.notesContainer}
          data={notes}
          renderItem={render} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: 'flex-start',
    flex: 1,
  },
  item:{
    backgroundColor: "#faeea6",
    marginVertical: 5,
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
    fontSize: 16,
  },
  buttonContainer:{
    flexDirection: "row",
  },
  buttons:{
    borderRadius: 50,
    backgroundColor: "#fff",
    padding: 10,
    margin: 5
  },
  userContainer:{
    backgroundColor: "#979797",
    paddingHorizontal: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    height: 50,
    width: 50,
    backgroundColor: '#f6e29a',
    borderRadius: 2000,
    marginRight: 20,
  },
  Username:{
    color: '#f8e9b4',
    fontWeight: 'bold',
    fontSize: 16,
  },
  email:{
    color: 'white',
    fontSize: 13,
  },
  notesContainer: {
    margin: 15
  }
})
export default Menu
