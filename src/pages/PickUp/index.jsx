import React, { useEffect } from 'react';
import Navbar from '../../components/NavBar';
import { KitchenContainer, OrdersContainer, PreparedContainer, PreparingContainer } from '../Kitchen/styles';
import LoadingModal from '../../modal/LoadingModal';
import { orderStore } from '../../store/OrderStore';
import { modalStore } from '../../store/ModalStore';
import { getOrders } from '../../services/ordersApi';
import { ClientName, Title } from './styled';

export default function PickUp() {
  const { orders, setOrders } = orderStore();
  const { setIsLoadingModalOpen } = modalStore();

  const get = async () => {
    setOrders(await getOrders());
  };

  useEffect(() => {
    setIsLoadingModalOpen(true);
    get();
    setIsLoadingModalOpen(false);
  }, []);
  return (
    <>
      <Navbar />
      <KitchenContainer>
        <LoadingModal />
        <PreparingContainer>
          <article>
            <Title>Preparando</Title>
          </article>
          <OrdersContainer>
            {orders.map(element =>
              element.isFinished === true ? '' : <ClientName $state="preparing">{element.client}</ClientName>,
            )}
          </OrdersContainer>
        </PreparingContainer>
        <PreparedContainer>
          <article>
            <Title>Pronto:</Title>
          </article>
          <OrdersContainer>
            {orders.map(element =>
              element.isFinished === true ? <ClientName $state="prepared">{element.client}</ClientName> : '',
            )}
          </OrdersContainer>
        </PreparedContainer>
      </KitchenContainer>
    </>
  );
}
