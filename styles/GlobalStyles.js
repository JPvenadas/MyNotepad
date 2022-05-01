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
            backgroundColor: '#e2e2e2',
            borderRadius: 3
        },
        button:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 3,
            backgroundColor: '#e3b73d'
        },
        subButton:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 3,
            backgroundColor: '#979797'
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