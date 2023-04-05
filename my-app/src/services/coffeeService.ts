import axios from "axios";

export const getCoffees = (type: string) => {
  const url = type === "hot" ? "https://api.sampleapis.com/coffee/hot" : "https://api.sampleapis.com/coffee/iced";
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCoffeeById = (id: number) => {
  const url = `https://api.sampleapis.com/coffee/${id}`;
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateCoffee = (id: number, coffee: any) => {
  const url = `https://api.sampleapis.com/coffee/${id}`;
  return axios.put(url, coffee)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createCoffee = (coffee: any) => {
  const url = `https://api.sampleapis.com/coffee`;
  return axios.post(url, coffee)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteCoffee = (id: number) => {
  const url = `https://api.sampleapis.com/coffee/${id}`;
  return axios.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};