import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const RemoveItem = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  background-color: #c2291e;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fonts.size.bigger};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  font-family: ${({ theme }) => theme.fonts.family.default};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ItemContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const LeftSideItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
