
import { Dispatch } from "redux";
import { fetchCoffeesRequest, fetchCoffeesSuccess, fetchCoffeesFailure } from './index';
import { getCoffees } from "../services/coffeeService";

const fetchCoffees = (type?: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(fetchCoffeesRequest());
    const coffeeType = typeof type === 'string' ? type : '';
    getCoffees(coffeeType)
      .then((response) => {
        const coffees = response.data;
        dispatch(fetchCoffeesSuccess(coffees));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCoffeesFailure(errorMsg));
      });
  };
};

export default fetchCoffees;