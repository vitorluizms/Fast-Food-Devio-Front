import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100dvh;
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

    background: ${({ theme }) => theme.color.input};
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
  height: 150px;
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 30px;
  overflow: auto;
`;

export const ButtonContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 30px;

  button {
    width: 250px;
    height: 50px;
    border-radius: ${({ theme }) => theme.border.radius.big};

    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
  }
`;

export const AddToCart = styled.button`
  vertical-align: center;
  text-align: center;
  border: none;

  background-color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.color.lightGray : theme.color.darkGreen)};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme, $isDisabled }) => ($isDisabled ? '' : theme.color.green)};
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};
  }
`;

export const CancelProduct = styled.button`
  vertical-align: center;
  text-align: center;

  background-color: transparent;
  border: 2px solid ${({ theme, $isDisabled }) => ($isDisabled ? theme.color.lightGray : theme.color.darkGreen)};
  color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.color.lightGray : theme.color.darkGreen)};

  &:hover {
    background-color: ${({ theme, $isDisabled }) => ($isDisabled ? '' : theme.color.lightGray)};
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};
  }
`;
