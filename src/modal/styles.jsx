import Modal from 'react-modal';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  width: 60%;
  min-height: 80%;
  max-width: 600px;
  max-height: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.radius.small};
  outline: none;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
