import React, {useLayoutEffect, useState, useEffect, useRef} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, InteractionManager} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { Global } from '../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Menu = ({route, navigation}) => {
  const [notes, setnotes] = useState()
  const [database, setDatabase] = useState()
  const [userkey, setUserkey] = useState()
  
  useEffect(()=>{
  
    let active = true
      if (active) {
        setNotes()
      }
    return ()=>{
      active= false
    }
    
  },[])

  useFocusEffect(
    React.useCallback(() => {
    let active = true
      if (active) {
        setNotes()
      }
    return ()=>{
      active= false
    }
    }, [route])
  )

  const deleteitem = (key) =>{
    let updatedDB = database.users
    let upload= updatedDB.map((user) => {
      user.key,
      user.email,
      user.firstname,
      user.lastname,
      user.password,
      user.notes = user.notes.filter(note => note.key != key)
    }
   );
    setDatabase({users: upload})
    storeData()
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
    try {
      const value = await AsyncStorage.getItem('database')
      if(value != null) {
       setDatabase(JSON.parse(value))
      }
    } catch(e) {
     console.log(e)
    }
  }

  const setNotes = async () =>{
    setUserkey(route.params.key)
    await getData()
    database.users.map(user =>{
      if(user.key == userkey){
        setnotes(user.notes)
      }
  })
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
      <Text>{JSON.stringify(notes)}</Text>
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
