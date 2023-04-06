export const FETCH_COFFEES_FAILURE = "FETCH_COFFEES_FAILURE";

export const fetchCoffeesFailure = (error: any) => ({
  type: FETCH_COFFEES_FAILURE,
  payload: error
});