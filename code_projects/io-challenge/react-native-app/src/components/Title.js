import React from 'react';
import { Text } from 'react-native'

 const Title = (props) => {
     let styles = getStyles(props);
     return <Text style={ styles.title } >{ props.text }</Text>
 }

 const getStyles = (props) => ({
    title : {
        color: 'rgb(73,73,73)',
        fontSize: 24,
        fontFamily: 'Lato-Black',
        ...props.styles
    }
 })


 export default Title