import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Reducers
import * as reducer from './reducers'

const reducers = combineReducers({ ...reducer })

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


export default store