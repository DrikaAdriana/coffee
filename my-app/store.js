import { createStore } from 'redux/dist/redux.min.js'
import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
