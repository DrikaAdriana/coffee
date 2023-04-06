import { ADD_COFFEE, CoffeeActionTypes, DELETE_COFFEE, UPDATE_COFFEE } from "../actions/coffeeActionTypes";
import { Coffee } from "../types/Coffee";

interface CoffeeState {
  coffees: Coffee[];
}

const initialState: CoffeeState = {
  coffees: [],
};

const coffeeReducer = (
  state = initialState,
  action: CoffeeActionTypes
): CoffeeState => {
  switch (action.type) {
    case ADD_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, {...action.payload}],
      };
    case UPDATE_COFFEE:
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === action.payload.id ? action.payload : coffee
      );
      return {
        ...state,
        coffees: updatedCoffees as Coffee[],
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

export default coffeeReducer;