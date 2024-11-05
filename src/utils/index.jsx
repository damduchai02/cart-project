import axios from 'axios';

const productionUrl = 'https://67205521e7a5792f0531257f.mockapi.io/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price.toFixed(2));

  return dollarsAmount;
};
