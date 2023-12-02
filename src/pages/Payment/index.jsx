import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Feed/styles';
import {
  AmountPayContainer,
  ClientInfo,
  CodeContainer,
  ContentContainer,
  InnerCircle,
  NameInputContainer,
  PaymentFormatContainer,
  PaymentResume,
  PaymentSelector,
  ProductsContainer,
  ResumeContainer,
  RightSide,
  SelectTopping,
  StyledCard,
  StyledIcon,
  StyledMoney,
  TitleContainer,
} from './styles';
import Navbar from '../../components/NavBar/index';
import { cartStore } from '../../store/CartStore';
import { Item } from '../../components/Resume/Item';
import { getOrders } from '../../services/ordersApi';
import { orderStore } from '../../store/OrderStore';
import PaymentForms from './PaymentForms';

export default function PaymentPage() {
  const { productsArray, totalAmountPay, name, setName } = cartStore();
  const { orders, setOrders } = orderStore();
  const navigate = useNavigate();
  const [paymentFormat, setPaymentFormat] = useState('');
  const formats = [
    { type: 'debit', icon: <StyledCard />, name: 'Débito' },
    { type: 'credit', icon: <StyledCard />, name: 'Crédito' },
    { type: 'money', icon: <StyledMoney />, name: 'Dinheiro' },
  ];

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
        <ContentContainer>
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
                  autoComplete="off"
                />
              </NameInputContainer>
              <CodeContainer>
                <h2>Código</h2>
                <div>{orders.length === 0 ? 1 : orders[orders.length - 1].id + 1}</div>
              </CodeContainer>
            </ClientInfo>
          </PaymentResume>
          <RightSide>
            <h2>Selecione a forma de pagamento: </h2>
            <PaymentFormatContainer>
              {formats.map(element => (
                <PaymentSelector key={element.type}>
                  <div>
                    {element.icon}
                    <h2>{element.name}</h2>
                  </div>
                  <SelectTopping onClick={() => setPaymentFormat(element.type)}>
                    <InnerCircle $isClicked={element.type === paymentFormat} />
                  </SelectTopping>
                </PaymentSelector>
              ))}
              <PaymentForms type={paymentFormat} />
            </PaymentFormatContainer>
          </RightSide>
        </ContentContainer>
      </Container>
    </>
  );
}
