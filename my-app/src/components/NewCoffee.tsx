import { useState } from 'react';
import { Coffee } from '../types/Coffee';
import { createCoffee } from '../services/coffeeService';
import CoffeeForm from './coffee/CoffeeForm';

const NewCoffee = () => {
  const [coffee, setCoffee] = useState<Coffee>({
    name: '',
    type: '',
    description: '',
    imageUrl: '',
    servingSize: '',
    hotOrCold: '',
  });

  const handleSave = async (newCoffee: Coffee) => {
    const savedCoffee = await createCoffee(newCoffee);
    setCoffee(savedCoffee);
  };

  return (
    <div>
      <h2>New Coffee</h2>
      <CoffeeForm coffee={coffee} onSave={handleSave} />
    </div>
  );
};

export default NewCoffee;