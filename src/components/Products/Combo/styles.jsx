import styled from 'styled-components';

export const ProductSection = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;
