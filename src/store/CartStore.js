import { create } from 'zustand';

export const cartStore = create(set => {
  return {
    cart: [],
    setCart: item => set(state => ({ cart: item })),
  };
});
