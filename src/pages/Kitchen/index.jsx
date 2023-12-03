import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { KitchenContainer, OrdersContainer, PreparedContainer, PreparingContainer, Title } from './styles';
import Navbar from '../../components/NavBar';
import { orderStore } from '../../store/OrderStore';
import { getOrders } from '../../services/ordersApi';
import Order from '../../components/Orders/Preparing';
import Prepared from '../../components/Orders/Prepared';

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
            {orders.map(element => (element.isFinished === false ? <Order key={element.id} order={element} /> : ''))}
          </OrdersContainer>
        </PreparingContainer>
        <PreparedContainer>
          <article>
            <Title>Pronto:</Title>
          </article>
          <OrdersContainer>
            {orders.map(element => (element.isFinished === true ? <Prepared key={element.id} order={element} /> : ''))}
          </OrdersContainer>
        </PreparedContainer>
      </KitchenContainer>
    </>
  );
}
