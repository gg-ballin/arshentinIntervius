import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { Title, Row, Button, Card, Tabs, Tab } from '../components'

const News = (props) => !props.news ? null : props.news.map((item) => <Card id={ item.id } { ...item } />)

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter : 'news'
        }
    }

    renderList(){
        if(this.state.filter === 'events'){
            return <Title styles={{ alignSelf: 'center', fontSize: 18, marginTop: 45 }} text="No hay eventos" />
        }
        return <News news={ this.props.news.collection } />
    }

    render() {
        return (
            <View style={ styles.container }>
                <Row style={{ padding: 20, paddingTop: 35, backgroundColor: '#fff' }} >
                    <Title text="Bienvenido" />
                </Row>

                <Row>
                    <Button 
                        text="Novedades" 
                        disabled={ this.state.filter != 'news' } 
                        onPress={ ()=> this.setState({ filter: 'news' }) }
                    />
                    <Button 
                        text="Eventos" 
                        disabled={ this.state.filter != 'events' } 
                        onPress={ ()=> this.setState({ filter: 'events' }) }
                    />
                </Row>

                <ScrollView style={ styles.list }>
                    { this.renderList() }
                </ScrollView>


                
                <Tabs />

                <View style={{ position: 'absolute', height: 74, width: 70, bottom: 0, alignSelf: 'center' }}>
                    <Tab action={ ()=> Actions.NEW_TICKET() } img={ require('../assets/icons/add.png') } imgStyle={{ height: 67, width: 67 }} />
                </View>


                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(249,248,249)'
    },
    list: {
        padding: 22
    }
});


const mapStateToProps = (state) =>({
  ...state,
  news: state.news
})

export default connect(mapStateToProps)(Home)