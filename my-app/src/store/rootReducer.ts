import { combineReducers } from 'redux';
import { CoffeeState } from './CoffeeState';
import coffeeReducer from './coffeeReducer';



export interface RootState {
  coffee: CoffeeState;
}

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;