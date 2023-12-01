import { create } from 'zustand';

export const useNavBarState = create(set => {
  return {
    buttonSelected: 'orders',
    toggleButton: item => set(state => ({ buttonSelected: item })),
  };
});
