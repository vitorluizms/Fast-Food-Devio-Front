import { create } from 'zustand';

export const productStore = create(set => {
  return {
    products: [],
    setProducts: item => set(state => ({ products: item })),
  };
});
