import axios from 'axios';
axios.defaults.baseURL = 'https://65d5d859f6967ba8e3bcbe47.mockapi.io/';

export const getCars = async (page = 1, limit = 12) => {
  const response = await axios.get('advert', {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

export const getFilterCars = async data => {
  const make = data.make;
  const response = await axios.get('advert', {
    params: {
      make,
    },
  });
  return response.data;
};
