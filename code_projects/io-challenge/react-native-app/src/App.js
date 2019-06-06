
import React, { Component } from 'react';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { Provider, connect } from 'react-redux';

const RouterWithRedux = connect()(Router);

// Redux Store
import  store  from './redux/store'

import {
    Splash,
    Home,
    NewTicket
} from './containers'

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <RouterWithRedux>
            <Scene key="root" hideNavBar >

                <Scene key="SPLASH" component={ Splash } />

                <Scene key="HOME" component={ Home } type="reset"  />

                <Scene key="NEW_TICKET" component={ NewTicket }  />

            </Scene>
          </RouterWithRedux>
        </Provider>
    )
  }
}
