import React, { useState } from 'react';
import { AmountPayContainer, PaymentFormContainer } from './style';
import { cartStore } from '../../../store/CartStore';
import { useFormatCurrency } from '../../../hooks/useFormatCurrency';

export default function PaymentForms({ type }) {
  const { amountPaid, totalAmountPay } = cartStore();
  const { formattedValue } = useFormatCurrency();
  const [amountPaidNumber, setAmountPaidNumber] = useState(0);

  function handleChange(e) {
    const inputValue = e.target.value;
    // Atualiza o estado apenas se o valor for numérico ou vazio

    formattedValue(inputValue, setAmountPaidNumber);
  }
  console.log(amountPaidNumber);

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
  }
}
