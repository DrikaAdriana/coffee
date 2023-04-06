import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/RootState';
import { FetchApiCoffees } from '../services/FetchApiCoffees';

const ComponenteFetchCoffees: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCoffees() {
      const data = await FetchApiCoffees('Iced');
      dispatch({ type: 'SET_COFFEES', payload: data });
    }
    getCoffees();
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.coffee.loading);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h2>Coffees:</h2>
    </div>
  );
};

export default ComponenteFetchCoffees;