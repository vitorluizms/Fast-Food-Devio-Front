import { create } from 'zustand';

export const modalStore = create(set => {
  return {
    isLoadingModalOpen: false,
    isModalOpen: false,
    setIsModalOpen: boolean => set(state => ({ isModalOpen: boolean })),
    setIsLoadingModalOpen: boolean => set(state => ({ isLoadingModalOpen: boolean })),
  };
});
