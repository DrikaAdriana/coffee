import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../pages/store'
import { fetchCoffees } from "./store/coffeeSlice";

const FetchCoffees: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.coffee.loading);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Coffees loaded successfully!</p>
      )}
    </div>
  );
};

export default FetchCoffees;