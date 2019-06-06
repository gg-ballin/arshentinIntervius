import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

// Reducers
import * as reducer from './reducers'

const reducers = combineReducers({ ...reducer })

export default createStore(reducers, applyMiddleware(thunk))