import React,{useLayoutEffect, useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { string } from 'yup'


const NoteAdd = ({route,navigation}) => {
  
  const [date, setDate] = useState("")
  const [userKey, setUserKey] = useState("")
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
 
  useEffect(()=>{
    getData()
    setUserKey(route.params.key)
    let curdate = new Date()
    setDate(curdate.toDateString())
  },[])

  return (
    <ScrollView>
      <View>
        <View style={styles.headContainer}>
        <TextInput
          style={styles.input1}
          onChangeText={val => setHeader(val)}
          placeholder="Header" />
        <Button buttonStyle={styles.saveBTN}
        icon={<Icon name="save" color="#fff"/>}
        onPress={()=>{
          let updateDB = database
          updateDB.users.map(user=>{
            if(user.key == userKey){
              const newnote = {
                key: Math.random(),
                header: Header,
                note: note,
                date: date
              }
              user.notes = [...user.notes,newnote]
             setDatabase(updateDB)
             storeData()
             navigation.navigate("Menu", user)
            }
          })
        }}/>
        </View>
        
        <TextInput
          multiline
          style={styles.input2}
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

export default NoteAdd
