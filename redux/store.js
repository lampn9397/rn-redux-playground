import { createStore, applyMiddleware, combineReducers } from 'redux';

import authReducer from './authModule/reducers';
import { middlewares } from './middlewares';

const rootReducer = combineReducers({ authReducer });

export default createStore(rootReducer, applyMiddleware(...middlewares));
