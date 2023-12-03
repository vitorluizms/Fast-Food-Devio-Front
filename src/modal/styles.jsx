import Modal from 'react-modal';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

export const StyledModal = styled(Modal)`
  width: 60%;
  min-width: 300px;
  max-height: calc(100vh - 40px);
  height: auto !important;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.color.white};
  padding: 50px;
  border-radius: ${({ theme }) => theme.border.radius.small};
  outline: none;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
  z-index: 5 !important;

  & > :first-child {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.bigger};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.big};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.thin};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    textarea {
      width: 100%;
      height: 120px;
      padding: 15px;

      background-color: ${({ theme }) => theme.color.input};
      border: 1px solid ${({ theme }) => theme.color.lightGray};
      border-radius: ${({ theme }) => theme.border.radius.small};
      padding-left: 10px;

      font-size: ${({ theme }) => theme.fonts.size.default};
      font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    }
  }

  @media (max-width: 500px) {
    align-items: center;
    width: 90%;
    padding: 20px;
  }
`;

export const StyledClose = styled(IoCloseSharp)`
  font-size: 30px;
  color: ${({ theme }) => theme.color.gray};

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ProductDescription = styled.section`
  width: 85%;

  display: flex;
  justify-content: space-between;

  p {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.thin};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ImageContainer = styled.article`
  width: 70%;
  height: auto;

  display: flex;
  gap: 70px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const ToppingSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ToppingTitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ToppingContainer = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CountContainer = styled.div`
  width: 130px;
  height: auto;
  margin-top: 10px;

  border: 2px solid ${({ theme }) => theme.color.green};
  background-color: transparent;
  border-radius: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 48px;
    height: 45px;
    cursor: pointer;

    border: none;
    border-radius: ${({ theme }) => theme.border.radius.circle};
    background-color: ${({ theme }) => theme.color.darkGreen};

    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.family.default};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ResumeContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.small};

  h4 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.thin};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ProductListContainer = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    h4 {
      font-size: ${({ theme }) => theme.fonts.size.small};
    }
  }
`;

export const AmountPayContainer = styled.article`
  width: 100%;
  height: 50px;
  border-top: 1px dashed ${({ theme }) => theme.color.gray};
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
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
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
    button {
      max-width: 120px;
    }
  }
`;

export const AddToCart = styled.button`
  width: 250px;
  vertical-align: center;
  text-align: center;

  background-color: ${({ theme }) => theme.color.darkGreen};
  color: ${({ theme }) => theme.color.white};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.green};
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const CancelProduct = styled.button`
  width: 250px;
  vertical-align: center;
  text-align: center;

  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.darkGreen};
  color: ${({ theme }) => theme.color.darkGreen};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  @media (max-width: 500px) {
    width: 10px;
  }
`;
