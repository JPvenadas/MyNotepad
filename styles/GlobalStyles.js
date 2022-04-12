import { StyleSheet } from "react-native"

export const Global = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignContent: 'center'
          },
        input: {
            padding: 10,
            width: '100%',
            borderWidth: 1,
            borderColor: '#e8905a',
            borderRadius: 8
        },
        button:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 8,
            backgroundColor: '#ea8647'
        },
        subButton:{
            width: '100%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 8,
            backgroundColor:'#eea476'
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