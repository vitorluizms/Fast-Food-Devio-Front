import { create } from 'zustand';

export const searchStore = create(set => {
  return {
    search: '',
    setSearch: item => set(state => ({ search: item })),
  };
});
