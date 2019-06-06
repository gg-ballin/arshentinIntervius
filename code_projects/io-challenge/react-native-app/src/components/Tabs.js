import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Tab from './Tab'

const home = { action : ()=> Actions.HOME(), img : require('../assets/icons/home-active.png')}
const profile = { action : ()=> Actions.HOME(), img : require('../assets/icons/profile.png')}
    
 const Tabs = (props) => (
    <View style={{ ...styles.tabs }}>
        <Tab { ...home } />
        
        <Tab { ...profile } />
    </View>
)

 const styles = {
    tabs : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54,
        paddingHorizontal: 40,
        backgroundColor: '#fff'
    }
 }


 export default Tabs