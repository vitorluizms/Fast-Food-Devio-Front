import styled, { keyframes } from 'styled-components';
// import { IoFastFoodSharp } from 'react-icons/io5';
// import { GiCardPickup } from 'react-icons/gi';
// import { PiCookingPotFill } from 'react-icons/pi';
import { IoCloseSharp } from 'react-icons/io5';

const slideIn = keyframes`
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 25vh;
  height: 25dvh;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.green};

  position: fixed;
  top: 0;
  right: 0;
  animation: ${slideIn} 0.3s ease-in-out;
  transform: translateX(${({ $isVisible }) => ($isVisible === true ? '0' : '100%')});

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.color.white};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.medium};
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    button {
      width: 80%;
      height: 30px;

      border: none;
      background-color: ${({ theme }) => theme.color.green};
      border-radius: ${({ theme }) => theme.border.radius.small};

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.darkGreen};
        transform: scale(1.05);
      }
    }
  }
`;

export const CloseIcon = styled(IoCloseSharp)`
  font-size: 32px;
  color: ${({ theme }) => theme.color.black};
  margin-left: 18px;
  cursor: pointer;
`;
