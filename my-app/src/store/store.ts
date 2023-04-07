import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeeSlice';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;