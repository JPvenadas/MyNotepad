import React,{useLayoutEffect} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'


const NoteEdit= ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
        icon={<Icon name='send' color="#fff"/>}
        buttonStyle={{
          backgroundColor: 'transparent',
        }} onPress={() => {navigation.navigate('NoteEdit')}}/>
    )})
    });

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.input1}
          placeholder="Header" />
        <TextInput
          multiline
          style={styles.input2}
          textAlignVertical='top'
          placeholder="Write the Note Here..." />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input1:{
    backgroundColor: "#e3d47060",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    margin: 15,
  },
  input2:{
    backgroundColor: "#e3d47060",
    padding: 19,
    fontSize: 16,
    margin: 15,
    borderRadius: 5,
    marginTop: 0,
    minHeight: 500,
  }
})

export default NoteEdit