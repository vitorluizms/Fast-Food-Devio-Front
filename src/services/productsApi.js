import axios from 'axios';

export async function getProducts() {
  let products = [];
  await axios
    .get(`${import.meta.env.VITE_API_URL}/products`, { timeout: 15000 })
    .then(response => (products = response))
    .catch(response => console.log(response));

  return products;
}
