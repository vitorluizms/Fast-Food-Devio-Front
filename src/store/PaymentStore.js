import { create } from 'zustand';

export const paymentStore = create(set => {
  return {
    type: '',
    isPaid: false,
    setIsPaid: boolean => set(state => ({ isPaid: boolean })),
    setType: type => set(state => ({ type })),
  };
});
