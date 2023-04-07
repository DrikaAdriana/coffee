import { ADD_COFFEE, CoffeeActionTypes, DELETE_COFFEE, UPDATE_COFFEE } from "../actions/coffeeActionTypes";
import Coffee from "../types/Coffee";

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
        coffees: [...state.coffees, action.payload],
      };
    case UPDATE_COFFEE:
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === action.payload.id ? action.payload : coffee
      );
      return {
        coffees: updatedCoffees,
      };
    case DELETE_COFFEE:
      const filteredCoffees = state.coffees.filter(
        (coffee) => coffee.id !== action.payload
      );
      return {
        coffees: filteredCoffees,
      };
    default:
      return state;
  }
};

export { coffeeReducer, CoffeeState };