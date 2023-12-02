import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Feed/styles';
import {
  AmountPayContainer,
  ClientInfo,
  CodeContainer,
  NameInputContainer,
  PaymentResume,
  ProductsContainer,
  ResumeContainer,
  StyledIcon,
  TitleContainer,
} from './styles';
import Navbar from '../../components/NavBar/index';
import { cartStore } from '../../store/CartStore';
import { Item } from '../../components/Resume/Item';
import { getOrders } from '../../services/ordersApi';
import { orderStore } from '../../store/OrderStore';

export default function PaymentPage() {
  const { productsArray, totalAmountPay, name, setName } = cartStore();
  const { orders, setOrders } = orderStore();
  const navigate = useNavigate();

  useEffect(() => {
    ordersApi();
  }, []);

  async function ordersApi() {
    setOrders(await getOrders());
  }

  return (
    <>
      <Navbar />
      <Container>
        <TitleContainer>
          <StyledIcon />
          <h1>Pagamento</h1>
        </TitleContainer>
        <PaymentResume>
          <article>
            <h2>Resumo da compra</h2>
          </article>
          <ResumeContainer>
            <ProductsContainer>
              {productsArray.map(element => (
                <Item key={element.productId} item={element} />
              ))}
            </ProductsContainer>
            <AmountPayContainer>
              <h4>Total do pedido:</h4>
              <h1>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalAmountPay / 100)}
              </h1>
            </AmountPayContainer>
          </ResumeContainer>
          <ClientInfo>
            <NameInputContainer>
              <h2>Nome do cliente</h2>
              <input
                id="name"
                name="name"
                placeholder="Primeiro nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </NameInputContainer>
            <CodeContainer>
              <h2>Código</h2>
              <input value={orders.length === 0 ? 1 : orders[orders.length - 1].id + 1} />
            </CodeContainer>
          </ClientInfo>
        </PaymentResume>
      </Container>
    </>
  );
}
