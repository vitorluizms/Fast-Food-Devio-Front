import React from 'react';
import {
  ButtonOrderController,
  ButtonsContainer,
  OrderContainer,
  OrderDescription,
  StyledCheck,
  StyledClose,
} from './styles';

export default function Order({ order }) {
  const productsArray = order.products.map(element => `${element.quantity}x ${element.product.name}`);
  console.log(productsArray);
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
        <ButtonOrderController type="close">
          <StyledClose />
        </ButtonOrderController>
        <ButtonOrderController type="check">
          <StyledCheck />
        </ButtonOrderController>
      </ButtonsContainer>
    </OrderContainer>
  );
}
