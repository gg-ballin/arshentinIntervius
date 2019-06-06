import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { Title, Row, Button, Input  } from '../components'

class NewTicket extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : '',
            description : ''
        }

    }


    render() {
        let { title, description } = this.state
        return (
            <View style={ styles.container }>
            
                <Row style={{ padding: 20, paddingTop: 35, backgroundColor: '#fff' }}>
                    <TouchableOpacity activeOpacity={ 1 } onPress={ ()=> Actions.pop() }>
                        <Image source={ require('../assets/icons/back.png') } style={ styles.backIcon } resizeMode="contain" />
                    </TouchableOpacity>
                    <Title text="Registrar Ticket" />
                </Row>

                <Row style={ styles.field }>
                    <View style={{ flexDirection: 'row' }}>
                        <Button 
                            style={ styles.btnText }
                            styleText={{ color: 'rgb(141,154,163)', fontFamily: 'Lato-Regular' }}
                            onPress={ ()=> alert('Title') }
                            text="Título" 
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Button 
                            style={ styles.btnText }
                            styleText={{ color: 'rgb(141,154,163)', fontFamily: 'Lato-Regular' }}
                            onPress={ ()=> alert('Description') }
                            text="Descripción" 
                        />
                    </View>
                                    
                </Row>

                <Button 
                    style={ styles.btnRegister }
                    styleText={{ fontFamily: 'Lato-Bold' }}
                    disabled
                    onPress={ ()=> alert('Pressed') }
                    text="REGISTRAR" 
                />
                
            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    field: { 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        paddingHorizontal: 30, 
        flex: 4 
    },
    list: {
        padding: 22
    },
    backIcon: {
        height: 21,
        width: 25,
        marginRight: 20
    },
    btnRegister : { 
        height: 54, 
        borderBottomWidth: 0, 
        flex: 1  
    },
    btnText : { 
        height: 54, 
        borderBottomWidth: 0, 
        flex: 1, 
        alignItems: 'flex-start'  
    }
};

const mapStateToProps = (state) =>({
  ...state,
})

export default connect(mapStateToProps)(NewTicket)