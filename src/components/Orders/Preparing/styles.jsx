import styled from 'styled-components';
import { IoMdClose, IoIosCheckmark } from 'react-icons/io';

export const OrderContainer = styled.div`
  width: 350px;
  height: 80px;
  padding: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.medium};

  figure {
    width: 50px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    img {
      max-width: 50px;
      max-height: 50px;
      object-fit: fill;
      object-position: 100% 0;
    }
  }

  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const OrderDescription = styled.div`
  width: 60%;
  max-height: 100%;

  display: flex;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    max-height: 50px;
    overflow: auto;

    p {
      font-family: ${({ theme }) => theme.fonts.family.default};
      font-weight: ${({ theme }) => theme.fonts.weight.thin};
      font-size: ${({ theme }) => theme.fonts.size.small};
      color: ${({ theme }) => theme.color.black};

      word-break: break-word;
      max-height: 20px;
    }
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ButtonsContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 5px;
`;

export const ButtonOrderController = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) => (type === 'check' ? theme.color.lightGreen : theme.color.lightRed)};
  border-radius: ${({ theme }) => theme.border.radius.small};
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const StyledCheck = styled(IoIosCheckmark)`
  font-size: ${({ theme }) => theme.fonts.size.bigger};
  color: ${({ theme }) => theme.color.green};
`;

export const StyledClose = styled(IoMdClose)`
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.color.red};
`;
