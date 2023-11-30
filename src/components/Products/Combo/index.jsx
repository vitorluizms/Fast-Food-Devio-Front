import React from 'react';
import { ProductSection } from './styles';
import { ProductListContainer } from '../styles';
import { productStore } from '../../../store/ProductsStore';
import ProductComponent from '..';

export default function CombosComponent() {
  const { products } = productStore();
  return (
    <ProductSection>
      <article>
        <h2>Combos</h2>
      </article>
      <ProductListContainer>
        {products !== undefined
          ? products?.map(element => {
              if (element.type === 'Combo') {
                return <ProductComponent key={element.id} product={element} />;
              } else {
                return null;
              }
            })
          : ''}
      </ProductListContainer>
    </ProductSection>
  );
}
