import { combineReducers } from 'redux';
import { coffeeReducer, CoffeeState } from './coffeeReducer';

export interface RootState {
  coffee: CoffeeState;
}

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;