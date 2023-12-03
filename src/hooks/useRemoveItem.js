import { cartStore } from '../store/CartStore';

export const useRemoveItem = () => {
  const { productsArray, setProductsArray, setAmountPay, totalAmountPay } = cartStore();

  return {
    removeItemFromCart: product => {
      const productsArrayFiltered = productsArray.filter(element => element.productId !== product.productId);
      setProductsArray(productsArrayFiltered);
      setAmountPay(totalAmountPay - product.amountPay);
    },
  };
};
