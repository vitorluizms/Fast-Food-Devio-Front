import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddToCart, CancelProduct, Container } from '../Feed/styles';
import {
  AmountPayContainer,
  ButtonContainer,
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
import { getLastOrder, getOrders, postOrderApi } from '../../services/ordersApi';
import { orderStore } from '../../store/OrderStore';
import PaymentForms from './PaymentForms';
import { useFetchData } from '../../hooks/usePostOrder';
import { paymentStore } from '../../store/PaymentStore';
import { useValidatePayment } from '../../hooks/useValidatePayment';
import { modalStore } from '../../store/ModalStore';
import LoadingModal from '../../modal/LoadingModal';

export default function PaymentPage() {
  const { productsArray, totalAmountPay, name, setName, setCode, code } = cartStore();
  const { setType } = paymentStore();
  const { setOrders } = orderStore();
  const { setIsLoadingModalOpen } = modalStore();
  const { postOrder } = useFetchData();
  const { validatePayment } = useValidatePayment();
  const navigate = useNavigate();
  const [paymentFormat, setPaymentFormat] = useState('');
  const [amountPaidNumber, setAmountPaidNumber] = useState(0);
  const formats = [
    { type: 'debit', icon: <StyledCard />, name: 'Débito' },
    { type: 'credit', icon: <StyledCard />, name: 'Crédito' },
    { type: 'money', icon: <StyledMoney />, name: 'Dinheiro' },
  ];
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  async function lastOrder() {
    try {
      const order = await getLastOrder();

      setCode(order.id);
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  useEffect(() => {
    setIsLoadingModalOpen(true);
    lastOrder();
    ordersApi();
    setName('');
    setIsLoadingModalOpen(false);
  }, []);

  const handlePayment = async () => {
    let paid = false;
    if (paymentFormat === 'credit' || paymentFormat === 'debit') {
      paid = validatePayment(state, paymentFormat);
    } else if (paymentFormat === 'money') {
      paid = validatePayment({ amountPaid: amountPaidNumber, amountToPay: totalAmountPay });
    }
    console.log(paid);
    if (paid === false) {
      toast.error('Pagamento inválido!');
    } else {
      try {
        const body = postOrder({ name, amountPay: totalAmountPay, products: productsArray });
        await postOrderApi(body);

        toast.success('Pedido feito com sucesso!');
        navigate('/');
      } catch (error) {
        toast.error(`Pedido recusado por causa de: ${error.response.data}`);
      }
    }
  };

  async function ordersApi() {
    setOrders(await getOrders());
  }

  return (
    <>
      <Navbar />
      <Container>
        <LoadingModal />
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
                <div>{!code ? 0 : code + 1}</div>
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
                  <SelectTopping
                    onClick={() => {
                      setPaymentFormat(element.type);
                      setType(element.type);
                    }}
                  >
                    <InnerCircle $isClicked={element.type === paymentFormat} />
                  </SelectTopping>
                </PaymentSelector>
              ))}
              <PaymentForms
                type={paymentFormat}
                state={state}
                setState={setState}
                amountPaidNumber={amountPaidNumber}
                setAmountPaidNumber={setAmountPaidNumber}
              />
            </PaymentFormatContainer>
            <ButtonContainer>
              <CancelProduct onClick={() => navigate('/')}>Cancelar</CancelProduct>
              <AddToCart onClick={async () => handlePayment()}>Finalizar pedido</AddToCart>
            </ButtonContainer>
          </RightSide>
        </ContentContainer>
      </Container>
    </>
  );
}
