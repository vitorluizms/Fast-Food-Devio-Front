import styled from 'styled-components';

export const KitchenContainer = styled.main`
  width: 100%;
  min-height: calc(100dvh - 50px);
  min-height: calc(100dvh - 50px);
  height: 100%;
  padding: 5% 8% 5% 8%;
  gap: 40px;

  display: flex;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PreparingContainer = styled.section`
  width: 50%;
  height: 100%;
  min-height: 70dvh;

  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 2px solid ${({ theme }) => theme.color.gray};

  @media (max-width: 500px) {
    border: none;
  }
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

export const PreparedContainer = styled.section`
  width: 50%;
  height: 100%;
  min-height: 60dvh;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
