import { create } from 'zustand';

export const cartStore = create(set => {
  return {
    productsArray: [],
    cart: [],
    setCart: item => set(state => ({ cart: item })),
    setProductsArray: item => set(state => ({ productsArray: item })),
  };
});
