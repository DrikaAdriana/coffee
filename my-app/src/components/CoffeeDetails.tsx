import React from 'react';
import { Coffee } from '../store/CoffeeState';

interface Props {
  coffee: Coffee;
}

const CoffeeDetails: React.FC<Props> = ({ coffee }) => {
  return (
    <div>
      <h2>{coffee.name}</h2>
      <p>Type: {coffee.type}</p>
      <p>Description: {coffee.description}</p>
    </div>
  );
};

export default CoffeeDetails;