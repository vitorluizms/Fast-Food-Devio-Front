import React, { useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {
  AmountPayContainer,
  BigInput,
  CardInfos,
  CreditCardForm,
  InputCVC,
  InputValidThru,
  InputsSmall,
  PaymentFormContainer,
} from './style';
import { cartStore } from '../../../store/CartStore';
import { useFormatCurrency } from '../../../hooks/useFormatCurrency';
import { paymentStore } from '../../../store/PaymentStore';

export default function PaymentForms({ type, state, setState, amountPaidNumber, setAmountPaidNumber }) {
  const { setType } = paymentStore();
  const { amountPaid, totalAmountPay } = cartStore();
  const { formattedValue } = useFormatCurrency();

  useEffect(() => {
    setType(type);
  }, [type]);

  const handleChange = e => {
    const inputValue = e.target.value;

    formattedValue(inputValue, setAmountPaidNumber);
  };

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'number') {
      const inputValue = value?.replace(/[^0-9]/g, '');
      const valueWithSpace = inputValue.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
      const maxDigits = 19;
      const sanitizedValue = valueWithSpace.slice(0, maxDigits);
      setState(prev => ({ ...prev, number: sanitizedValue }));
    } else if (name === 'name') {
      const sanitazedValue = value?.replace(/[0-9]/g, '');
      setState(prev => ({ ...prev, name: sanitazedValue }));
    } else if (name === 'cvc') {
      const maxDigits = 3;
      const inputValue = value?.replace(/[^0-9]/g, '');
      const sanitizedValue = inputValue.slice(0, maxDigits);
      setState(prev => ({ ...prev, cvc: sanitizedValue }));
    } else if (name === 'expiry') {
      const maxDigits = 5;
      const inputValue = value?.replace(/[^0-9]/g, '');
      const formattedNumber = inputValue.replace(/^(.{2})/, '$1/');
      const sanitazedValue = formattedNumber.slice(0, maxDigits);
      setState(prev => ({ ...prev, expiry: sanitazedValue }));
    }
  };

  const handleInputFocus = evt => {
    setState(prev => ({ ...prev, focus: evt.target.name }));
    // formattedValue(0, setAmountPaidNumber);
  };

  if (type === 'money') {
    return (
      <PaymentFormContainer>
        <AmountPayContainer>
          <h2>Valor entregue</h2>
          <input value={amountPaid} type="text" onChange={e => handleChange(e)} placeholder="Digite um valor" />
        </AmountPayContainer>
        <AmountPayContainer>
          <h2>Troco</h2>
          <div>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format((amountPaidNumber - totalAmountPay) / 100)}
          </div>
        </AmountPayContainer>
      </PaymentFormContainer>
    );
  } else if (type === 'credit' || type === 'debit') {
    return (
      <CreditCardForm>
        <Cards number={state.number} name={state.name} expiry={state.expiry} cvc={state.cvc} focused={state.focus} />
        <form>
          <CardInfos>
            <BigInput
              type="text"
              name="number"
              placeholder="Número do cartão"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength={19}
              required
            />
            <BigInput
              type="text"
              name="name"
              placeholder="Nome do titular"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <InputsSmall>
              <InputValidThru
                type="text"
                name="expiry"
                placeholder="Validade"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={5}
                required
              />
              <InputCVC
                type="text"
                name="cvc"
                placeholder="CVV"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={3}
                required
              />
            </InputsSmall>
          </CardInfos>
        </form>
      </CreditCardForm>
    );
  }
}
