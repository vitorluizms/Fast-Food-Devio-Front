import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { KitchenContainer, OrdersContainer, PreparedContainer, PreparingContainer, Title } from './styles';
import Navbar from '../../components/NavBar';
import { orderStore } from '../../store/OrderStore';
import { getOrders } from '../../services/ordersApi';
import Order from '../../components/Orders/Preparing';
import Prepared from '../../components/Orders/Prepared';
import LoadingModal from '../../modal/LoadingModal';
import { modalStore } from '../../store/ModalStore';

export default function Kitchen() {
  const { orders, setOrders } = orderStore();
  const { setIsLoadingModalOpen } = modalStore();
  console.log(orders);

  async function get() {
    try {
      setIsLoadingModalOpen(true);
      const response = await getOrders();
      setOrders(response);
    } catch (err) {
      toast.error(err.response.data);
    }
    setIsLoadingModalOpen(false);
  }

  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Navbar />
      <KitchenContainer>
        <LoadingModal />
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
