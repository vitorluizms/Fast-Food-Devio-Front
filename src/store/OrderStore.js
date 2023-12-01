import { create } from 'zustand';

export const orderStore = create(set => {
  return {
    orders: [],
    setOrders: orders => set(state => ({ orders: orders })),
  };
});
