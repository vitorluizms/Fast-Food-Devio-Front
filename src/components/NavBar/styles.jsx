import styled from 'styled-components';
import { PiHamburger } from 'react-icons/pi';

export const Container = styled.header`
  width: 100%;
  height: 50px;
  padding: 0px 35px 0px 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.green};

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    h1 {
      font-family: ${({ theme }) => theme.fonts.family.default};
      font-size: ${({ theme }) => theme.fonts.size.big};
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
      color: ${({ theme }) => theme.color.white};
      letter-spacing: ${({ theme }) => theme.fonts.spacing.medium};
    }
  }
`;

export const StyledIcon = styled(PiHamburger)`
  font-size: 32px;
  padding: 3px;

  border-radius: ${({ theme }) => theme.border.radius.circle};
  background: ${({ theme }) => theme.color.white};
`;

export const NavBar = styled.nav`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OrderButton = styled.button`
  width: 80px;
  height: 55%;

  background-color: ${({ theme, $state }) => ($state === '/' ? theme.color.darkGreen : 'transparent')};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.small};
  cursor: pointer;

  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.05);
  }
`;

export const KitchenButton = styled.button`
  width: 80px;
  height: 55%;

  background-color: ${({ theme, $state }) => ($state === '/kitchen' ? theme.color.darkGreen : 'transparent')};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.small};
  cursor: pointer;

  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.05);
  }
`;
export const PickUpButton = styled.button`
  width: 80px;
  height: 55%;

  background-color: ${({ theme, $state }) => ($state === '/pickUp' ? theme.color.darkGreen : 'transparent')};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.small};
  cursor: pointer;

  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.05);
  }
`;
