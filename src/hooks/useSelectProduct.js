import { modalStore } from '../store/ModalStore';
import { itemStore } from '../store/ProductStore';
import { productStore } from '../store/ProductsStore';

export const useSelectProduct = () => {
  const { setProduct, productSelected } = itemStore();
  const { isModalOpen, setIsModalOpen } = modalStore();

  return {
    handleClick: item => {
      setIsModalOpen(!isModalOpen);
      setProduct(item);
    },
  };
};
