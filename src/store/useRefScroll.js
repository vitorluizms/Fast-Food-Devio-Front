import { create } from 'zustand';

export const refStore = create(set => {
  return {
    scrollTargets: {},
    setScrollTargets: (key, ref) => set(state => ({ scrollTargets: { ...state.scrollTargets, [key]: ref } })),
  };
});
