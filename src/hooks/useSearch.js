import { searchStore } from '../store/SearchStore';
import { refStore } from '../store/useRefScroll';

export const useSearch = () => {
  const { setSearch } = searchStore();
  const { scrollTargets } = refStore();

  return {
    searchProduct: item => {
      const target = scrollTargets[item];

      if (target && target.current) {
        target.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
  };
};
