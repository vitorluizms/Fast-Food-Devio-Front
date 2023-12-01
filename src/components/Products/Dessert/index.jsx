import React, { useEffect, useRef } from 'react';
import { ProductSection } from '../Combo/styles';
import { productStore } from '../../../store/ProductsStore';
import { ProductListContainer } from '../styles';
import ProductComponent from '..';
import { refStore } from '../../../store/useRefScroll';

export default function DessertComponent() {
  const { products } = productStore();
  const { setScrollTargets } = refStore();
  const target = useRef(null);

  useEffect(() => {
    setScrollTargets('Dessert', target);
  }, [setScrollTargets]);

  return (
    <ProductSection ref={target}>
      <article>
        <h2>Hambúrgueres</h2>
      </article>
      <ProductListContainer>
        {products?.map(element => {
          if (element.type === 'Dessert') {
            return <ProductComponent key={element.id} product={element} />;
          } else {
            return null;
          }
        })}
      </ProductListContainer>
    </ProductSection>
  );
}
