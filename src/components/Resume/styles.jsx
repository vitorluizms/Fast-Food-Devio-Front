import styled from 'styled-components';

export const ListContainer = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AmountPay = styled.h2`
  font-family: ${({ theme }) => theme.fonts.family.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.big};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  color: ${({ theme }) => theme.color.black};
`;
