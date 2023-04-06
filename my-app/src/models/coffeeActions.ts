import { Coffee } from '../models/Coffee';

// Define action type constants
export const ADD_COFFEE = 'ADD_COFFEE';
export const DELETE_COFFEE = 'DELETE_COFFEE';
export const UPDATE_COFFEE = 'UPDATE_COFFEE';

// Define action interfaces
interface AddCoffeeAction {
  type: typeof ADD_COFFEE;
  payload: Coffee;
}

interface DeleteCoffeeAction {
  type: typeof DELETE_COFFEE;
  payload: number;
}

interface UpdateCoffeeAction {
  type: typeof UPDATE_COFFEE;
  payload: Coffee;
}

// Define action creators
export const addCoffee = (coffee: Coffee): AddCoffeeAction => ({
  type: ADD_COFFEE,
  payload: coffee,
});

export const deleteCoffee = (id: number): DeleteCoffeeAction => ({
  type: DELETE_COFFEE,
  payload: id,
});

export const updateCoffee = (coffee: Coffee): UpdateCoffeeAction => ({
  type: UPDATE_COFFEE,
  payload: coffee,
});

// Export action interfaces
export type CoffeeActionTypes = AddCoffeeAction | DeleteCoffeeAction | UpdateCoffeeAction;