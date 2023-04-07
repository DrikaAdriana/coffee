import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/RootState';
import { FetchApiCoffees } from '../services/FetchApiCoffees';

interface Props {
  coffeeType: string;
}

const ComponenteFetchCoffees: React.FC<Props> = ({ coffeeType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCoffees = async () => {
      try {
        const data = await FetchApiCoffees(coffeeType);
        dispatch({ type: 'SET_COFFEES', payload: data });
      } catch (error) {
        console.error('Error fetching coffees:', error);
      }
    };
    getCoffees();
  }, [dispatch, coffeeType]);

  const loading = useSelector((state: RootState) => state.coffee.loading);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h2>Coffees:</h2>
      {/* Renderizar a lista de cafés aqui */}
    </div>
  );
};

export default ComponenteFetchCoffees;