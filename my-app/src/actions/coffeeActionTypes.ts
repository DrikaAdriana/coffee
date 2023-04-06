export const ADD_COFFEE = 'ADD_COFFEE';
export const DELETE_COFFEE = 'DELETE_COFFEE';
export const UPDATE_COFFEE = 'UPDATE_COFFEE';

export interface Coffee {
  id: number;
  name: string;
  description: string;
}

export interface AddCoffeeAction {
  type: typeof ADD_COFFEE;
  payload: Coffee;
}

export interface DeleteCoffeeAction {
  type: typeof DELETE_COFFEE;
  payload: number;
}

export interface UpdateCoffeeAction {
  type: typeof UPDATE_COFFEE;
  payload: Coffee;
}

export type CoffeeActionTypes =
  | AddCoffeeAction
  | DeleteCoffeeAction
  | UpdateCoffeeAction;