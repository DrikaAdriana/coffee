import axios from 'axios';

const API_URL = 'https://api.sampleapis.com/coffee';

const getCoffeeApi= async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/id/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCoffeeApi;