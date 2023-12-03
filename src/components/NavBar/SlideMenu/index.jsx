import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseIcon, Container } from './styles';

export default function SlideMenu({ $isVisible, setIsVisible }) {
  console.log($isVisible);
  const navigate = useNavigate();

  const handleClick = destiny => {
    setIsVisible(false);
    navigate(destiny);
  };

  return (
    <Container $isVisible={$isVisible}>
      <CloseIcon onClick={() => setIsVisible(false)} />
      <div>
        <button type="submit" onClick={() => handleClick('/')}>
          <h1>Pedidos</h1>
        </button>
        <button type="submit" onClick={() => handleClick('/kitchen')}>
          {' '}
          <h1>Cozinha</h1>
        </button>
        <button type="submit" onClick={() => handleClick('/pickup')}>
          {' '}
          <h1>Retirada</h1>
        </button>
      </div>
    </Container>
  );
}
