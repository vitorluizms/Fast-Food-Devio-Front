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
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.bigger};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledSpinner = styled(TailSpin)`
  width: 60px;
  height: 60px;

  color: #4fa94d;
`;
