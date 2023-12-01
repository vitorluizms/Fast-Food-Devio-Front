import React from 'react';
import { Container, InnerCircle, LeftDiv, RightDiv, SelectTopping } from './styled';
import { useSelectTopping } from '../../hooks/useSelectTopping';

export default function Topping({ product, clicked, setClicked }) {
  const { toggleTopping } = useSelectTopping();
  function handleClick() {
    toggleTopping(product, clicked, setClicked);
  }

  return (
    <Container>
      <LeftDiv>
        <figure>
          <img src={product.image} alt={product.id} />
        </figure>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </LeftDiv>
      <RightDiv>
        <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 100)}</h3>
        <SelectTopping onClick={() => handleClick()}>
          <InnerCircle
            $isClicked={clicked.some(object => {
              return object.id === product.id;
            })}
          />
        </SelectTopping>
      </RightDiv>
    </Container>
  );
}
