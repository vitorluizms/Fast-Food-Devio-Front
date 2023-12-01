import axios from 'axios';
import { orderStore } from '../store/OrderStore';

export async function getOrders() {
  const { setOrders } = orderStore();
  axios
    .get(`${import.meta.env.VITE_API_URL}/orders`)
    .then(element => setOrders(element.data))
    .catch(element => console.log(element));
}
