import { toast } from 'react-toastify';
import { paymentStore } from '../store/PaymentStore';

export const useValidatePayment = () => {
  const { setIsPaid } = paymentStore();
  return {
    validatePayment: (body, type) => {
      let validate = false;
      if (type === 'credit' || type === 'debit') validate = validateCardFormat(body, setIsPaid);
      else validate = validateMoneyFormat(body, setIsPaid);

      return validate;
    },
  };
};

const validateCardFormat = (state, setIsPaid) => {
  if (state.number.length !== 19 || state.name.length === 0 || state.cvc.length !== 3 || state.expiry.length !== 5) {
    setIsPaid(false);
    return false;
  } else {
    setIsPaid(true);
    return true;
  }
};

const validateMoneyFormat = (body, setIsPaid) => {
  if (Number(body.amountPaid) < body.amountToPay) {
    setIsPaid(false);
    return false;
  } else {
    setIsPaid(true);
    return true;
  }
};
