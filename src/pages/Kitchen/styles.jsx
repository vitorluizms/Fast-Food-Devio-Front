import styled from 'styled-components';

export const KitchenContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: 100%;
  padding: 5% 8% 5% 8%;

  display: flex;
  gap: 50px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PreparingContainer = styled.section`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.bigger};
`;

export const OrdersContainer = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: transparent;
`;
