import React from 'react';
import { 
    TextInput,
    View
 } from 'react-native'

 const Input = (props) => (
     <View style={ styles.row }>
        <TextInput 
            value={ props.value }
            autoFocus
            autoCorrect={ false }
            onChangeText={ text => props.onChange(text) }
            style={{ ...styles.input, ...props.classStyle }} 

            {...props}
        />
     </View>
 )

 const styles = {
    row: {
        flexDirection: 'row'
    },
    input : {
        backgroundColor : '#fff',
        minHeight: 54,
        flex: 1,
        justifyContent: 'center',
        fontSize: 18, 
        color : 'rgb(141,154,163)',
        fontFamily: 'Avenir'
    }
 }


 export default Input