import { combineReducers } from 'redux';
import coffeeReducer from './coffeeSlice';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;