import { cartStore } from '../store/CartStore';

export const useFormatCurrency = value => {
  const { amountPaid, setAmountPaid } = cartStore();

  return {
    formattedValue: (value, setAmountPaidNumber) => {
      const numericValue = value.replace(/[^0-9]/g, '');
      const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }).format(numericValue / 100);

      setAmountPaid(formattedValue);
      setAmountPaidNumber(numericValue);
    },
  };
};
