import React, { Component } from 'react';

import './App.css';

import { Router, Route, browserHistory, IndexRoute } from  'react-router';
import { Provider } from 'react-redux';

import store from './redux/store';

import { Dashboard } from './containers';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>

          <Router history={ browserHistory } >
            <Route path="/">

              <IndexRoute 
                component={ Dashboard } 
              />

            </Route>
          
          </Router>

      </Provider>
    )
  }
}

export default App;

