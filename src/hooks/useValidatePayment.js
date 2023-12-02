import { toast } from 'react-toastify';
import { paymentStore } from '../store/PaymentStore';

export const useValidatePayment = () => {
  const { setIsPaid } = paymentStore();
  return {
    validatePayment: (body, type) => {
      let validate = false;
      if (type === 'credit' || type === 'debit') validateCardFormat(body, setIsPaid, validate);
      else validateMoneyFormat(body, setIsPaid, validate);

      return validate;
    },
  };
};

const validateCardFormat = (state, setIsPaid, validate) => {
  if (state.number.length !== 19 || state.name.length === 0 || state.cvc.length !== 3 || state.expiry.length !== 5)
    setIsPaid(false);
  else {
    setIsPaid(true);
    validate = true;
  }
};

const validateMoneyFormat = (body, setIsPaid, validate) => {
  console.log(body);
  if (Number(body.amountPaid) < body.amountToPay) {
    setIsPaid(false);
  } else {
    setIsPaid(true);
    validate = true;
  }
};
