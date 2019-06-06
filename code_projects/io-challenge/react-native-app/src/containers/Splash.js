import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../assets/logo.png'


export default class Splash extends Component {

    componentDidMount(){
        Platform.OS === 'android' && StatusBar.setTranslucent(true)

        setTimeout(() => Actions.HOME(), 2500);
    }
    render() {
        return (
            <View style={ styles.container }>
                <Image source={ Logo } resizeMode="contain" style={ styles.img } />
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img : {
      height: 56
  }
});
