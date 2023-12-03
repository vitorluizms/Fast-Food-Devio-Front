import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonOrderController,
  ButtonsContainer,
  ObservationContainer,
  OrderContainer,
  OrderDescription,
  OrderDescriptionContainer,
  StyledClose,
} from '../Preparing/styles';

import { deliverOrder, getOrders } from '../../../services/ordersApi';
import { orderStore } from '../../../store/OrderStore';
import { modalStore } from '../../../store/ModalStore';

export default function Prepared({ order }) {
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

  async function handleClick() {
    try {
      setIsLoadingModalOpen(true);
      setLoading(true);
      await deliverOrder(order.id);
      setOrders(await getOrders());
      setLoading(false);
      toast.success('Pedido entregue!');
    } catch (err) {
      toast(err.response.data);
    }
    setIsLoadingModalOpen(false);
  }

  if (order.isFinished === true) {
    return (
      <OrderDescriptionContainer $haveDescription={haveDescription} $type="prepared">
        <OrderContainer $type="preparedWithObservation" $haveDescription={haveDescription}>
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
            <ButtonOrderController type="close" onClick={() => handleClick()} disabled={isLoading}>
              <StyledClose />
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
}
