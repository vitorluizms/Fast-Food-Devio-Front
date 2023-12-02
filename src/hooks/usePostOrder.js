import { toast } from 'react-toastify';

export const useFetchData = () => {
  return {
    postOrder: body => {
      const sanitazedProductsArray = body.products?.map(element => {
        if (element.toppings.length === 0 && element.observation.length > 0) {
          return {
            productId: element.productId,
            quantity: element.quantity,
            observation: element.observation,
          };
        } else if (element.toppings.length > 0 && element.observation.length === 0) {
          return {
            productId: element.productId,
            quantity: element.quantity,
            toppings: element.toppings,
          };
        } else if (element.toppings.length === 0 && element.observation.length === 0) {
          return {
            productId: element.productId,
            quantity: element.quantity,
          };
        } else {
          return {
            productId: element.productId,
            quantity: element.quantity,
            observation: element.observation,
            toppings: element.toppings,
          };
        }
      });

      const newBody = {
        client: body.name,
        amountPay: body.amountPay,
        products: sanitazedProductsArray,
      };

      return newBody;
    },
  };
};
