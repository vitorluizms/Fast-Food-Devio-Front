import axios from 'axios';
import { orderStore } from '../store/OrderStore';

export async function getOrders() {
  let orders = [];
  await axios
    .get(`${import.meta.env.VITE_API_URL}/orders`)
    .then(element => (orders = element.data))
    .catch(element => console.log(element));

  return orders;
}
