import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, OrderButton, StyledIcon, NavBar, KitchenButton, PickUpButton } from './styles';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Link to="/">
        <div>
          <StyledIcon />
          <h1>fastfood</h1>
        </div>
      </Link>
      <NavBar>
        <OrderButton
          $state={location.pathname}
          onClick={() => {
            navigate('/');
          }}
        >
          Pedidos
        </OrderButton>
        <KitchenButton
          $state={location.pathname}
          onClick={() => {
            navigate('/kitchen');
          }}
        >
          Cozinha
        </KitchenButton>
        <PickUpButton
          $state={location}
          onClick={() => {
            navigate('/pickup');
          }}
        >
          Retirada
        </PickUpButton>
      </NavBar>
    </Container>
  );
}
