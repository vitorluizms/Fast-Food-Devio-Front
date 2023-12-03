import React from 'react';
import { StyledModal, StyledSpinner } from './styles';
import { modalStore } from '../../store/ModalStore';

export default function LoadingModal() {
  const { isLoadingModalOpen, setIsLoadingModalOpen } = modalStore();
  return (
    <StyledModal
      isOpen={isLoadingModalOpen}
      onRequestClose={() => setIsLoadingModalOpen(false)}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <StyledSpinner
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledModal>
  );
}
