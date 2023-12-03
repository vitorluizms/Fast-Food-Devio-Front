import { cartStore } from '../store/CartStore';

export const useGenerateProductObject = () => {
  const { setProductsArray, productsArray, setAmountPay, totalAmountPay } = cartStore();
  return {
    generateProductObject: ({ product, toppings, observation, quantity, amountPay }) => {
      const toppingsArrayString = toppings.map(element => `1x ${element.name}`);
      const arrayOfObjects = [...productsArray];

      let body = {
        productId: product.id,
        toppings: toppingsArrayString.join(', '),
        observation,
        quantity,
        amountPay,
      };
      console.log(body);

      arrayOfObjects.push(body);
      setProductsArray(arrayOfObjects);
      setAmountPay(totalAmountPay + amountPay);
    },
  };
};
