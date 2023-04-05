import axios from 'axios';

const API_URL = 'https://api.sampleapis.com/coffee';

interface ICoffee {
  id: number;
    name: string;
    description: string;
    type: string
}

const updateCoffee = async (coffee: ICoffee) => {
  try {
    const response = await axios.put(`${API_URL}/id/${coffee.id}`, coffee);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default updateCoffee;