import axios from 'axios';
import { toast } from 'react-toastify';

export async function getOrders() {
  let orders = [];
  await axios
    .get(`${import.meta.env.VITE_API_URL}/orders`)
    .then(element => (orders = element.data))
    .catch(element => console.log(element));

  return orders;
}

export async function postOrderApi(body) {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, body);

  return response.data;
}
