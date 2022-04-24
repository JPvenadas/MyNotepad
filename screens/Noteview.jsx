import React, {useLayoutEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const Noteview = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route.params.header}`
    });
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}> 
      <ScrollView>
        <Text style={styles.text}>{route.params.note}</Text>
      </ScrollView>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteContainer:{
    backgroundColor: "#f8ee95ce",
    borderRadius: 7,
    width: '90%',
    height: '95%',
  },
  text:{
    paddingVertical: 30,
    paddingHorizontal: 15,
  }
})
export default Noteview
