import React, { useEffect } from 'react';
import { KitchenContainer, PreparingContainer, Title } from './styles';
import Navbar from '../../components/NavBar';
import { orderStore } from '../../store/OrderStore';
import { getOrders } from '../../services/ordersApi';

export default function Kitchen() {
  const { orders } = orderStore();

  async function get() {
    await getOrders();
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
          <article></article>
        </PreparingContainer>
      </KitchenContainer>
    </>
  );
}
