import { StyleSheet } from "react-native"

export const Global = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
        input: {
            padding: 10,
            width: '100%',
            backgroundColor: '#d7d7d7',
            borderRadius: 6
        },
        button:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 6,
            backgroundColor: '#dda640'
        },
        subButton:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 8,
            backgroundColor: '#ecbc62'
        },
        inputContainer: {
            marginVertical: 5,
            width: '80%',
            display: 'flex',
        },
        error: {
            color: 'red',
            fontSize: 10,
            alignSelf: 'flex-start',
        }

    }
)