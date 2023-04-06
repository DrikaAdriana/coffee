import axios from 'axios';

const getCoffees = async (type?: string) => {
  try {
    const response = await axios.get(`/api/coffees${type ? `?type=${type}` : ''}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching coffees');
  }
};

export default getCoffees;