import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: 100%;
  padding: 5% 8% 5% 8%;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleContainer = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.bigger};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }

  input {
    min-width: 250px;
    width: 30%;
    height: 45px;

    background: #f4f4f4;
    border: 1px solid #c4c4c4;
    border-radius: ${({ theme }) => theme.border.radius.small};
    padding-left: 10px;

    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  }
`;

export const NavCategoriesContainer = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 25px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.color.gray};
    margin-top: 5px;
  }
`;

export const CategoriesContainer = styled.article`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
`;
