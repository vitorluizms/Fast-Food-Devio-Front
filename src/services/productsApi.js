import axios from 'axios';

export async function getProducts() {
  const products = await axios.get(`${import.meta.env.VITE_API_URL}/products`, { timeout: 15000 });

  return products;
}
