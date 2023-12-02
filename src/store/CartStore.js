import { create } from 'zustand';

export const cartStore = create(set => {
  return {
    amountPaid: 0,
    name: '',
    totalAmountPay: 0,
    productsArray: [],
    cart: [],
    setCart: item => set(state => ({ cart: item })),
    setProductsArray: item => set(state => ({ productsArray: item })),
    setAmountPay: item => set(stater => ({ totalAmountPay: item })),
    setName: name => set(state => ({ name: name })),
    setAmountPaid: value => set(state => ({ amountPaid: value })),
  };
});
