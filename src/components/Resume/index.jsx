import React from 'react';
import { AmountPayContainer, ResumeContainer } from '../../modal/styles';
import { cartStore } from '../../store/CartStore';
import { Item } from './Item';
import { AmountPay, ListContainer } from './styles';

export function Resume() {
  const { productsArray, totalAmountPay } = cartStore();

  return (
    <ResumeContainer>
      <ListContainer>
        {productsArray.map(element => (
          <Item item={element} key={element.productId} />
        ))}
      </ListContainer>
      <AmountPayContainer>
        <h4>Total do pedido: </h4>
        <AmountPay>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalAmountPay / 100)}
        </AmountPay>
      </AmountPayContainer>
    </ResumeContainer>
  );
}
