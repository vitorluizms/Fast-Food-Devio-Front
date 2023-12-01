import { itemStore } from '../store/ProductStore';

export const useSelectTopping = () => {
  const { totalPayProduct, setTotalPayProduct } = itemStore();

  return {
    toggleTopping: (product, clicked, setClicked) => {
      let array = [...clicked];
      if (
        array.some(object => {
          console.log(object);
          return product.id === object.id;
        })
      ) {
        setTotalPayProduct(product.price, 'subtraction');
        array = array.filter(element => element !== product);
      } else {
        setTotalPayProduct(product.price, 'sum');
        array.push(product);
      }

      setClicked(array);
    },
  };
};
