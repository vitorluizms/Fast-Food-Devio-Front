import { cartStore } from '../store/CartStore';

export const useRemoveItem = () => {
  const { productsArray, setProductsArray } = cartStore();

  return {
    removeItemFromCart: product => {
      const productsArrayFiltered = productsArray.filter(element => element.productId !== product.productId);
      setProductsArray(productsArrayFiltered);
    },
  };
};
