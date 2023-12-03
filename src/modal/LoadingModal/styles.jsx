import { TailSpin } from 'react-loader-spinner';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export const StyledModal = styled(ReactModal)`
  width: 100px;
  height: 100px;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${({ theme }) => theme.border.radius.medium};
  border: none;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinner = styled(TailSpin)`
  width: 60px;
  height: 60px;

  color: #4fa94d;
  border: none;
`;
