import Coffee from '../store/Coffee';

export const ADD_COFFEE = 'ADD_COFFEE';

interface AddCoffeeAction {
  type: typeof ADD_COFFEE;
  payload: Coffee;
}

export const addCoffee = (coffee: Coffee): AddCoffeeAction => ({
  type: ADD_COFFEE,
  payload: coffee,
});