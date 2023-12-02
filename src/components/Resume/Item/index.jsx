import React from 'react';
import { productStore } from '../../../store/ProductsStore';
import { ItemContainer, LeftSideItem, RemoveItem } from './styles';
import { useRemoveItem } from '../../../hooks/useRemoveItem';

export function Item({ item }) {
  const { products } = productStore();
  const { removeItemFromCart } = useRemoveItem();
  const product = products?.filter(element => element.id === item.productId);
  return (
    <ItemContainer>
      <LeftSideItem>
        <RemoveItem onClick={() => removeItemFromCart(item)} />
        <h4>
          {`${item.quantity}x ${product[0].name}`} {item.toppings.length > 0 ? `, Adicionais: ${item.toppings}` : ''}
        </h4>
      </LeftSideItem>
      <h4>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.amountPay / 100)}</h4>
    </ItemContainer>
  );
}
