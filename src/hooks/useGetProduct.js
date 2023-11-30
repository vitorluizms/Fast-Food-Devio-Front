import { getProducts } from '../services/productsApi';
import { productStore } from '../store/ProductsStore';

export function useGetProducts() {
  const { setProducts } = productStore();

  return {
    getProducts: async () => {
      const products = await getProducts();
      setProducts(products.data);
    },
  };
}
