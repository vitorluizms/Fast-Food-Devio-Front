import { create } from 'zustand';

export const modalStore = create(set => {
  return {
    isModalOpen: false,
    setIsModalOpen: boolean => set(state => ({ isModalOpen: boolean })),
  };
});
