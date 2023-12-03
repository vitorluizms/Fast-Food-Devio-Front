import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonOrderController,
  ButtonsContainer,
  OrderContainer,
  OrderDescription,
  StyledClose,
} from '../Preparing/styles';

import { deliverOrder, getOrders } from '../../../services/ordersApi';
import { orderStore } from '../../../store/OrderStore';

export default function Prepared({ order }) {
  const { setOrders } = orderStore();
  const productsArray = order.products.map(element => `${element.quantity}x ${element.product.name}`);
  const [isLoading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      await deliverOrder(order.id);
      setOrders(await getOrders());
      setLoading(false);
      toast.success('Pedido entregue!');
    } catch (err) {
      toast(err.response.data);
    }
  }

  if (order.isFinished === true) {
    return (
      <OrderContainer>
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
    );
  }
}
