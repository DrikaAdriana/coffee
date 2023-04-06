import { ADD_COFFEE, DELETE_COFFEE, UPDATE_COFFEE, CoffeeActionTypes } from "../actions/coffeeActionTypes";
import { Coffee } from '../models/Coffee';

export interface CoffeeState {
  coffees: Coffee[];
}

const initialState: CoffeeState = {
  coffees: [],
};

export const coffeeReducer = (
  state: CoffeeState = initialState,
  action: CoffeeActionTypes
): CoffeeState => {
  switch (action.type) {
    case ADD_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, action.payload],
      };
    case UPDATE_COFFEE:
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === action.payload.id ? action.payload : coffee
      );
      return {
        ...state,
        coffees: updatedCoffees,
      };
    case DELETE_COFFEE:
      const filteredCoffees = state.coffees.filter(
        (coffee) => coffee.id !== action.payload
      );
      return {
        ...state,
        coffees: filteredCoffees,
      };
    default:
      return state;
  }
};