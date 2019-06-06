import React from 'react';
import { 
    TouchableOpacity,
    Text
 } from 'react-native'





const Button = (props) => {
     let styles = getStyles(props)

     return (
         <TouchableOpacity 
            activeOpacity={ 1 }
            onPress={()=> props.onPress && props.onPress(props.text)} 
            style={{...styles.btn, ...props.styles}}>
    
                <Text style={{ ...styles.text, ...props.stylesText }} >{ props.text }</Text>

         </TouchableOpacity>
     )
 }

 const getStyles = (props) => ({
    btn : {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 2, 
        borderBottomColor: props.disabled ? 'rgb(141,154,163)' : 'rgb(0,181,204)',
        ...props.style
    },
    text : {
        color: props.disabled ? 'rgb(141,154,163)' : 'rgb(73,73,73)' ,
        fontSize: 15,
        fontFamily: props.disabled ? 'Lato-Regular' : 'Lato-Black',
        ...props.styleText
    }
 })

 export default Button