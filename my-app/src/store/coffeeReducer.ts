import { CoffeeActionTypes, ADD_COFFEE, DELETE_COFFEE, UPDATE_COFFEE } from '../actions/coffeeActions';
import { Coffee} from './CoffeeState';

interface CoffeeState {
  coffees: Coffee[];
  loading: boolean;
  error: string | null;
  type: string;
}

const initialState: CoffeeState = {
  coffees: [],
  loading: false,
  error: null,
  type: "",
};

const coffeeReducer = (state = initialState, action: CoffeeActionTypes): CoffeeState => {
  switch (action.type) {
    case ADD_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, action.payload],
      };
    case DELETE_COFFEE:
      return {
        ...state,
        coffees: state.coffees.filter((coffee) => coffee.id !== action.payload),
      };
    case UPDATE_COFFEE:
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === action.payload.id ? action.payload : coffee
      );
      return {
        ...state,
        coffees: updatedCoffees,
      };
    default:
      return state;
  }
};

export default coffeeReducer;