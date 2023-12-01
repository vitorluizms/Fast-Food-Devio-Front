import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { StyledModal } from './styles';
import { modalStore } from '../store/ModalStore';
import { productStore } from '../store/ProductsStore';

export default function ModalComponent() {
  const { isModalOpen, setIsModalOpen } = modalStore();
  const { products } = productStore();
  const modalRef = useRef(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <StyledModal
      ref={modalRef}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      {products.map(element => (
        <>
          <h1>AAAAAAAAAAAAAAAAAA</h1>
          <h2>askfnaoafh</h2>
        </>
      ))}
      <h1>Revise seu pedido!</h1>
    </StyledModal>
  );
}
