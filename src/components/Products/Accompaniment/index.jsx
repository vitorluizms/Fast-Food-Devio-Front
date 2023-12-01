import React, { useEffect, useRef } from 'react';
import { ProductSection } from '../Combo/styles';
import { productStore } from '../../../store/ProductsStore';
import { ProductListContainer } from '../styles';
import ProductComponent from '..';
import { refStore } from '../../../store/useRefScroll';

export default function AccompanimentComponent() {
  const { products } = productStore();
  const { setScrollTargets } = refStore();
  const target = useRef(null);

  useEffect(() => {
    setScrollTargets('Accompaniment', target);
  }, [setScrollTargets]);

  return (
    <ProductSection ref={target}>
      <article>
        <h2>Acompanhamentos</h2>
      </article>
      <ProductListContainer>
        {products?.map(element => {
          if (element.type === 'Accompaniment') {
            return <ProductComponent key={element.id} product={element} />;
          } else {
            return null;
          }
        })}
      </ProductListContainer>
    </ProductSection>
  );
}
