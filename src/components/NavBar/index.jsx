import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, OrderButton, StyledIcon, NavBar, KitchenButton, PickUpButton } from './styles';
import { useNavBarState } from '../../store/NavBarButton';

export default function Navbar() {
  const { buttonSelected, toggleButton } = useNavBarState();
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
          $state={buttonSelected}
          onClick={() => {
            toggleButton('orders');
            navigate('/');
          }}
        >
          Pedidos
        </OrderButton>
        <KitchenButton
          $state={buttonSelected}
          onClick={() => {
            toggleButton('kitchen');
            navigate('/kitchen');
          }}
        >
          Cozinha
        </KitchenButton>
        <PickUpButton
          $state={buttonSelected}
          onClick={() => {
            toggleButton('pickUp');
            navigate('/pickup');
          }}
        >
          Retirada
        </PickUpButton>
      </NavBar>
    </Container>
  );
}
