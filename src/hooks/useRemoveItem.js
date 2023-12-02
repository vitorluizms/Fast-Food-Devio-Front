import { cartStore } from '../store/CartStore';

export const useRemoveItem = () => {
  const { productsArray, setProductsArray, setAmountPay, totalAmountPay } = cartStore();

  return {
    removeItemFromCart: product => {
      const productsArrayFiltered = productsArray.filter(element => element.productId !== product.productId);
      setProductsArray(productsArrayFiltered);
      console.log(product);
      setAmountPay(totalAmountPay - product.amountPay);
    },
  };
};
