import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo à lista de cafés!</h1>
      <Link to="/coffees">Ver cafés</Link>
    </div>
  );
};

export default Home;