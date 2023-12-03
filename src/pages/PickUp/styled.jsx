import styled from 'styled-components';

export const ClientName = styled.h2`
  font-size: 90px;
  color: ${({ theme, $state }) => ($state === 'preparing' ? theme.color.gray : theme.color.green)};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-family: ${({ theme }) => theme.fonts.family.default};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.big};
  word-break: break-word;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-family: ${({ theme }) => theme.fonts.family.default};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.medium};
`;
