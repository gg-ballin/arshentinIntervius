import React from 'react';
import { Text, View, Image } from 'react-native'

 const Card = (props) => {
     return (
        <View key={ props.id } style={ styles.card }>
            
            <Image source={{ uri : props.img }}  style={{ height: 200, borderRadius: 8 }} />

            <View style={ styles.container }>

                <Text style={ styles.title }>
                    { props.title }
                </Text>

                <Text style={ styles.description }>
                    { props.description }
                </Text>

            </View>
            
        </View>
     )
 }

 const styles = {
    card : {
        borderRadius: 3,
        flexDirection: 'column'
    },
    container : {
        backgroundColor: '#fff',
        padding: 15,
        elevation: 1,
        marginTop: -10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
        
    },
    description: {
        color: 'rgb(141, 154, 163)',
        fontSize: 14,
        marginTop: 5,
        lineHeight: 21,
        fontFamily: 'Lato-Medium'
    },
    title: {
        color: 'rgb(73,73,73)',
        fontSize: 14,
        fontFamily: 'Lato-Bold'
    }
 }


 export default Card