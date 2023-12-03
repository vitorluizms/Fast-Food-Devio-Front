import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonOrderController,
  ButtonsContainer,
  ObservationContainer,
  OrderContainer,
  OrderDescription,
  OrderDescriptionContainer,
  StyledCheck,
  StyledClose,
} from './styles';
import { deleteOrder, finishOrder, getOrders } from '../../../services/ordersApi';
import { orderStore } from '../../../store/OrderStore';
import { modalStore } from '../../../store/ModalStore';

export default function Order({ order }) {
  const { setIsLoadingModalOpen } = modalStore();
  const { setOrders } = orderStore();
  const [haveDescription, setHaveDescription] = useState(false);
  const [description, setDescription] = useState('');
  const productsArray = order.products.map(element => `${element.quantity}x ${element.product.name}`);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const descriptionArray = [];

    order.products.forEach(element => {
      console.log(element);
      if (!element.observation || element.observation.length === 0) {
        console.log(element.observation);
      } else {
        setHaveDescription(true);
        descriptionArray.push(element.observation);
      }
    });

    setDescription(descriptionArray.join(' '));
  }, []);

  async function handleClick(type) {
    try {
      setLoading(true);
      setIsLoadingModalOpen(true);
      if (type === 'delete') {
        await deleteOrder(order.id);
        toast('Pedido cancelado!');
      } else {
        await finishOrder(order.id);
        toast('Pedido finalizado!');
      }
      setOrders(await getOrders());
    } catch (err) {
      if (err.response?.data.length === 0) {
        toast.error('Houve um erro');
      } else {
        toast.error(err.response.data);
      }
    }
    setLoading(false);
    setIsLoadingModalOpen(false);
  }
  return (
    <OrderDescriptionContainer $haveDescription={haveDescription}>
      <OrderContainer $haveDescription={haveDescription}>
        <OrderDescription>
          <figure>
            <img src={order.products[0].product.image} alt={order.products[0].name} />
          </figure>
          <div>
            <h2>{`${order.id} - ${order.client}`}</h2>
            <p>{productsArray.join(', ')}</p>
          </div>
        </OrderDescription>
        <ButtonsContainer>
          <ButtonOrderController type="close" onClick={() => handleClick('delete')} disabled={isLoading}>
            <StyledClose />
          </ButtonOrderController>
          <ButtonOrderController type="check" onClick={() => handleClick('finish')} disabled={isLoading}>
            <StyledCheck />
          </ButtonOrderController>
        </ButtonsContainer>
      </OrderContainer>
      <ObservationContainer $haveDescription={haveDescription}>
        <h2>Observações:</h2>
        <div>{description}</div>
      </ObservationContainer>
    </OrderDescriptionContainer>
  );
}
