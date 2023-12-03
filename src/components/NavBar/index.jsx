import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, OrderButton, StyledIcon, NavBar, KitchenButton, PickUpButton, StyledMenu } from './styles';
import SlideMenu from './SlideMenu';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [controlMenu, setControlMenu] = useState(false);

  return (
    <>
      <SlideMenu $isVisible={controlMenu} setIsVisible={setControlMenu} />
      <Container>
        <Link to="/">
          <div>
            <StyledIcon />
            <h1>fastfood</h1>
          </div>
        </Link>
        <NavBar>
          <StyledMenu onClick={() => setControlMenu(true)} />
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
    </>
  );
}
