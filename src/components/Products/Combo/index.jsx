import React, { useEffect, useRef } from 'react';
import { ProductSection } from './styles';
import { ProductListContainer } from '../styles';
import { productStore } from '../../../store/ProductsStore';
import ProductComponent from '..';
import { refStore } from '../../../store/useRefScroll';

export default function CombosComponent() {
  const { products } = productStore();
  const { setScrollTargets } = refStore();
  const target = useRef(null);

  useEffect(() => {
    setScrollTargets('Combo', target);
  }, [setScrollTargets]);

  return (
    <ProductSection ref={target}>
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
