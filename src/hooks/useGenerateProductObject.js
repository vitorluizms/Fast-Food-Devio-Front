import { cartStore } from '../store/CartStore';

export const useGenerateProductObject = () => {
  const { setProductsArray, productsArray } = cartStore();
  return {
    generateProductObject: ({ product, toppings, observation, quantity }) => {
      console.log(toppings);
      const toppingsArrayString = toppings.map(element => `1x ${element.name}`);
      const arrayOfObjects = [...productsArray];

      let body = {
        productId: product.id,
        toppings: toppingsArrayString.join(', '),
        observation,
        quantity,
      };

      arrayOfObjects.push(body);
      setProductsArray(arrayOfObjects);
    },
  };
};
