import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { KitchenContainer, OrdersContainer, PreparingContainer, Title } from './styles';
import Navbar from '../../components/NavBar';
import { orderStore } from '../../store/OrderStore';
import { getOrders } from '../../services/ordersApi';
import Order from '../../components/Orders';

export default function Kitchen() {
  const { orders, setOrders } = orderStore();
  console.log(orders);

  async function get() {
    try {
      const response = await getOrders();
      setOrders(response);
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Navbar />
      <KitchenContainer>
        <PreparingContainer>
          <article>
            <Title>Preparando:</Title>
          </article>
          <OrdersContainer>
            {orders.map(element => (
              <Order key={element.id} order={element} />
            ))}
          </OrdersContainer>
        </PreparingContainer>
      </KitchenContainer>
    </>
  );
}
