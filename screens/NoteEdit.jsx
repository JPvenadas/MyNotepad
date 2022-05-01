import React,{useLayoutEffect, useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { string } from 'yup'
import { useFocusEffect } from '@react-navigation/native'
import { BackHandler } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

const NoteEdit = ({route,navigation}) => {

  const [Loggeduser, setUser] = useState("")
  const [InitialNote, setInitialNote] = useState({header:'',note:''})
  const [database, setDatabase] = useState("")

  const [Header, setHeader] = useState("")
  const [note, setNote] = useState("")

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

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(database))
    } catch (e) {
    console.log(e)
    }
  }
 
  useLayoutEffect(()=>{
    getData()
    setInitialNote(route.params.item)
    setUser(route.params.user)
  },[])
  useEffect(()=>{
    setNote(InitialNote.note)
    setHeader(InitialNote.header)
  },[InitialNote])

  return (
    <ScrollView>
      <View>
        <View style={styles.headContainer}>
        <TextInput
          style={styles.input1}
          defaultValue = {InitialNote.header}
          onChangeText={val => setHeader(val)}
          placeholder="Header" />
        <Button buttonStyle={styles.saveBTN}
        icon={<Icon name="save" color="#fff"/>}
        onPress={()=>{
          let updateDB = database
          updateDB.users.map(user=>{
            user.notes.map(item =>{
              if(InitialNote.key == item.key){
                item.key = InitialNote.key
                item.date = InitialNote.date
                item.header = Header
                item.note = note
                setUser(user)
                setDatabase(updateDB)
                storeData()
                navigation.navigate("Menu", user)
              }
            })
          })
        }}/>
        </View>
        <TextInput
          multiline
          style={styles.input2}
          defaultValue = {InitialNote.note}
          onChangeText={val => setNote(val)}
          textAlignVertical='top'
          placeholder="Write the Note Here..." />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input1:{
    backgroundColor: "#f8ee95ce",
    padding: 15,
    marginTop: 20,
    marginRight: 0,
    borderRadius: 5,
    flex: 10,
    margin: 15,
  },
  input2:{
    backgroundColor: "#f8ee95ce",
    padding: 19,
    fontSize: 16,
    margin: 15,
    borderRadius: 5,
    marginTop: 0,
    minHeight: 500,
  },
  headContainer: {
    flexDirection: 'row'
  },
  saveBTN: {
    padding: 19,
    fontSize: 16,
    flex: 2,
    margin: 18,
    backgroundColor:  "#ddb74ffc",
  }
})

export default NoteEdit