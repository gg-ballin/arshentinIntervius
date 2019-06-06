import React from 'react';
import { TouchableOpacity, Image } from 'react-native'

const Tab = (props) => {
    return (
        <TouchableOpacity activeOpacity={ .5 } onPress={ props.action } style={ props.style }>
           <Image style={{ ...styles.icon, ...props.imgStyle }} source={ props.img } />
        </TouchableOpacity>
    )
}

const styles = {
    tab : {
        flex: 1, 
        
    },
    icon : {
        height: 24,
        width: 24,
    }
}


 export default Tab