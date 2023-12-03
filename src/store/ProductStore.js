import { create } from 'zustand';

export const itemStore = create(set => {
  return {
    totalPayProduct: 0,
    productSelected: {},
    setProduct: item => set(state => ({ productSelected: item, totalPayProduct: item.price })),
    setTotalPayProduct: (value, type) =>
      set(state => ({
        totalPayProduct: type === 'substraction' ? state.totalPayProduct - value : state.totalPayProduct + value,
      })),
  };  
});
