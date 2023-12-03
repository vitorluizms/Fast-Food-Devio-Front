import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonOrderController,
  ButtonsContainer,
  OrderContainer,
  OrderDescription,
  StyledCheck,
  StyledClose,
} from './styles';
import { deleteOrder, finishOrder, getOrders } from '../../../services/ordersApi';
import { orderStore } from '../../../store/OrderStore';

export default function Order({ order }) {
  const { setOrders } = orderStore();
  const productsArray = order.products.map(element => `${element.quantity}x ${element.product.name}`);
  const [isLoading, setLoading] = useState(false);

  async function handleClick(type) {
    try {
      setLoading(true);
      if (type === 'delete') {
        await deleteOrder(order.id);
        toast('Pedido cancelado!');
      } else {
        await finishOrder(order.id);
        toast('Pedido finalizado!');
      }
      setOrders(await getOrders());
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (err.response?.data.length === 0) {
        toast.error('Houve um erro');
      } else {
        toast.error(err.response.data);
      }
    }
  }
  if (order.isFinished === false) {
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
          <ButtonOrderController type="close" onClick={() => handleClick('delete')} disabled={isLoading}>
            <StyledClose />
          </ButtonOrderController>
          <ButtonOrderController type="check" onClick={() => handleClick('finish')} disabled={isLoading}>
            <StyledCheck />
          </ButtonOrderController>
        </ButtonsContainer>
      </OrderContainer>
    );
  }
}
