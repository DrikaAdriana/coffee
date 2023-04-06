export const FETCH_COFFEES_SUCCESS = "FETCH_COFFEES_SUCCESS";

export const fetchCoffeesSuccess = (coffees: any) => ({
  type: FETCH_COFFEES_SUCCESS,
  payload: coffees
});